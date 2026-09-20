/*
  "Talk to me" chat widget — all behaviour for the chat panel.

  If you read Python, here is the mental mapping for this file:

    document.getElementById("x")   ->  find the HTML element with id="x"
                                       (like a dict lookup on the page)
    el.addEventListener("click", f) -> "when this element is clicked, call f"
                                       (there is no main loop; the browser calls
                                       your functions when things happen)
    async function / await          -> same idea as Python's async/await
    fetch(url, {...})               -> requests.post(url, json=...) but async
    const / let                     -> variable declarations (const = cannot be
                                       reassigned, like a name you promise not
                                       to rebind)
    el.hidden = true                -> hides the element (CSS display: none)
    `template ${x} strings`         -> f"template {x} strings"

  Everything is wrapped in one function that runs immediately (the
  "(function () { ... })();" at the very bottom). That keeps our variable names
  private to this file so they cannot clash with the theme's own scripts.
*/

(function () {
  "use strict"; // makes JS stricter about silent mistakes (typos become errors)

  // ---------------------------------------------------------------------------
  // 1. Find the elements we need. If the widget is not on the page (chatbot_url
  //    empty in _config.yml), the root is null and we stop here.
  // ---------------------------------------------------------------------------
  const root = document.getElementById("chat-widget");
  if (!root) return;

  const ENDPOINT = root.dataset.endpoint.replace(/\/$/, ""); // strip a trailing slash if present
  const EMAIL = root.dataset.email;

  const toggleBtn = document.getElementById("chat-toggle");
  const closeBtn = document.getElementById("chat-close");
  const panel = document.getElementById("chat-panel");
  const messagesEl = document.getElementById("chat-messages");
  const startersEl = document.getElementById("chat-starters");
  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");
  const sendBtn = document.getElementById("chat-send");
  const callout = document.getElementById("chat-callout");
  const calloutClose = document.getElementById("chat-callout-close");

  // ---------------------------------------------------------------------------
  // 2. State. `history` is the list we send back to the server on every turn
  //    so the model has context. Shape matches what app.py expects:
  //    [{role: "user", content: "..."}, {role: "assistant", content: "..."}]
  // ---------------------------------------------------------------------------
  let history = [];
  let busy = false; // true while a request is in flight — blocks double-sends
  let warmedUp = false; // have we already pinged /health this page load?

  // ---------------------------------------------------------------------------
  // 3. Small helpers for putting things on screen.
  // ---------------------------------------------------------------------------

  // Add a message bubble. `kind` is one of: "user", "bot", "status", "error".
  // Returns the element so the caller can remove it later (used for the
  // temporary "thinking…" bubble).
  function addMessage(text, kind) {
    const el = document.createElement("div");
    el.className = "chat-msg " + kind;
    el.textContent = text; // textContent (not innerHTML) so nothing is treated as HTML — safe against injection
    messagesEl.appendChild(el);
    messagesEl.scrollTop = messagesEl.scrollHeight; // scroll to the newest message
    return el;
  }

  // The animated three-dot "typing" indicator.
  function addTyping() {
    const el = document.createElement("div");
    el.className = "chat-msg bot";
    el.innerHTML = '<span class="chat-typing"><span></span><span></span><span></span></span>';
    messagesEl.appendChild(el);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return el;
  }

  function setBusy(state) {
    busy = state;
    sendBtn.disabled = state;
    input.disabled = state;
  }

  // ---------------------------------------------------------------------------
  // 4. Open / close the panel.
  // ---------------------------------------------------------------------------
  function openPanel() {
    hideCallout(true);
    toggleBtn.classList.remove("pulsing");
    panel.hidden = false;
    toggleBtn.setAttribute("aria-expanded", "true");
    toggleBtn.hidden = true;

    // First open: show a greeting. Only once per page load.
    if (messagesEl.childElementCount === 0) {
      addMessage("Hi, I'm an AI version of Ishaan. Ask me about my work, skills or what I'm looking for.", "bot");
    }

    // Serverless backends (Vercel) spin up a fresh instance after idle time,
    // which adds a second or two. Ping the cheap /health endpoint now so that
    // by the time the visitor finishes typing, the instance is already warm.
    if (!warmedUp) {
      warmedUp = true;
      fetch(ENDPOINT + "/health", { method: "GET" }).catch(function () {
        /* ignore — this is only a warm-up; a real error is reported on send */
      });
    }

    input.focus();
  }

  function closePanel() {
    panel.hidden = true;
    toggleBtn.hidden = false;
    toggleBtn.setAttribute("aria-expanded", "false");
  }

  toggleBtn.addEventListener("click", openPanel);
  closeBtn.addEventListener("click", closePanel);

  // ---------------------------------------------------------------------------
  // 4b. Drawing attention on first visit.
  //     - The button pulses for 8 seconds after every page load.
  //     - A callout bubble appears once per browser (remembered in localStorage,
  //       the browser's tiny key/value store) and hides itself after 10 seconds,
  //       on dismiss, or when the chat is opened.
  // ---------------------------------------------------------------------------
  const SEEN_KEY = "chat-callout-seen";

  toggleBtn.classList.add("pulsing");
  setTimeout(function () {
    toggleBtn.classList.remove("pulsing");
  }, 8000);

  function hideCallout(remember) {
    callout.hidden = true;
    if (remember) {
      try {
        localStorage.setItem(SEEN_KEY, "1");
      } catch (_) {
        /* private mode or storage blocked: just don't remember, no harm */
      }
    }
  }

  let seen = false;
  try {
    seen = localStorage.getItem(SEEN_KEY) === "1";
  } catch (_) {
    /* same as above */
  }
  if (!seen) {
    // Small delay so it appears after the page has settled, not during load.
    setTimeout(function () {
      if (panel.hidden) callout.hidden = false;
    }, 1500);
    setTimeout(function () {
      hideCallout(true);
    }, 11500);
  }
  calloutClose.addEventListener("click", function () {
    hideCallout(true);
  });

  // Escape key closes the panel, like most chat widgets.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !panel.hidden) closePanel();
  });

  // ---------------------------------------------------------------------------
  // 5. Starter questions: clicking one just fills the box and submits.
  // ---------------------------------------------------------------------------
  startersEl.addEventListener("click", function (event) {
    const btn = event.target.closest(".chat-starter"); // was a starter button clicked?
    if (!btn) return;
    input.value = btn.textContent;
    form.requestSubmit(); // same as the user pressing Enter
  });

  // ---------------------------------------------------------------------------
  // 6. Sending a question. This is the core.
  // ---------------------------------------------------------------------------
  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // stop the browser from reloading the page (default form behaviour)
    if (busy) return;

    const question = input.value.trim();
    if (!question) return;

    // Show the user's message immediately; hide the starters once they've asked something.
    addMessage(question, "user");
    startersEl.hidden = true;
    input.value = "";
    setBusy(true);

    const typingEl = addTyping();

    // If the reply takes unusually long, add a small note under the typing
    // dots so the visitor knows it is still working rather than stuck.
    let statusEl = null;
    const wakeTimer = setTimeout(function () {
      statusEl = addMessage("Still thinking — this one is taking a little longer than usual…", "status");
    }, 10000);

    try {
      // fetch() is the browser's HTTP client. Python equivalent:
      //   requests.post(ENDPOINT + "/chat", json={"message": question, "history": history}, timeout=60)
      const controller = new AbortController(); // lets us cancel the request on timeout
      const timeoutId = setTimeout(function () {
        controller.abort();
      }, 60000);

      const response = await fetch(ENDPOINT + "/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question, history: history }),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      // A non-2xx status is NOT an exception in fetch (unlike requests.raise_for_status),
      // so we check response.ok ourselves.
      if (!response.ok) {
        throw await errorFromResponse(response);
      }

      const data = await response.json(); // -> {reply: "..."}
      const reply = data.reply || "(empty reply)";

      // Remember both turns for context on the next question.
      history.push({ role: "user", content: question });
      history.push({ role: "assistant", content: reply });

      typingEl.remove();
      addMessage(reply, "bot");
    } catch (err) {
      typingEl.remove();
      addMessage(friendlyMessage(err), "error");
    } finally {
      // `finally` runs whether we succeeded or failed — same as Python.
      clearTimeout(wakeTimer);
      if (statusEl) statusEl.remove();
      setBusy(false);
      input.focus();
    }
  });

  // ---------------------------------------------------------------------------
  // 7. Turning failures into something a visitor can understand.
  // ---------------------------------------------------------------------------

  // Build an Error object from a failed HTTP response, keeping the status code
  // so friendlyMessage() can pick the right wording.
  async function errorFromResponse(response) {
    let detail = "";
    try {
      const body = await response.json();
      detail = body.detail || "";
    } catch (_) {
      /* body was not JSON — that's fine */
    }
    const err = new Error(detail || "HTTP " + response.status);
    err.status = response.status;
    err.retryAfter = response.headers.get("Retry-After");
    return err;
  }

  function friendlyMessage(err) {
    // 429 = our own rate limiter in app.py said "too many requests from this IP".
    if (err.status === 429) {
      const mins = err.retryAfter ? Math.ceil(Number(err.retryAfter) / 60) : 60;
      return "You've hit the limit of 20 questions per hour. Try again in about " + mins + " minutes, or email me at " + EMAIL + ".";
    }
    // 503 = the AI provider is rate-limiting us right now; the backend already
    // retried once and sends a visitor-friendly sentence, so show it as-is.
    if (err.status === 503 && err.message) {
      return err.message;
    }
    // 502 = our backend could not reach the AI provider, or it returned an error.
    if (err.status === 502 || err.status === 503) {
      return "The AI service is temporarily unavailable. Please try again in a minute, or email me at " + EMAIL + ".";
    }
    // The request timed out — usually the Space was asleep and took too long.
    if (err.name === "AbortError") {
      return "That took too long — the server may still be waking up. Please try once more.";
    }
    // Network error: no internet, or the Space is paused/down (fetch throws a TypeError).
    if (err instanceof TypeError) {
      return "Couldn't reach the chat server. It may be offline — email me at " + EMAIL + " instead.";
    }
    return "Something went wrong (" + err.message + "). Email me at " + EMAIL + " if it keeps happening.";
  }
})();
