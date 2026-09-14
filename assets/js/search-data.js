// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Devices, circuits and instruments I have designed, simulated or built.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-skills",
          title: "skills",
          description: "Ranked by how much they matter for semiconductor device and process work, with a depth signal on each.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/skills/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed work I have contributed to, most recent first.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Education, experience, projects and skills. A PDF version is available from the button above.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-teaching",
              title: "teaching",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/teaching/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "books-harry-potter-series",
          title: 'Harry Potter (series)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2020-harry-potter/";
            },},{id: "books-percy-jackson-and-the-olympians-series",
          title: 'Percy Jackson and the Olympians (series)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2020-percy-jackson/";
            },},{id: "books-the-hunger-games-series",
          title: 'The Hunger Games (series)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2021-hunger-games/";
            },},{id: "books-fahrenheit-451",
          title: 'Fahrenheit 451',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2021-fahrenheit-451/";
            },},{id: "books-the-alchemist",
          title: 'The Alchemist',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2021-the-alchemist/";
            },},{id: "books-introduction-to-electrodynamics",
          title: 'Introduction to Electrodynamics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2022-griffiths-electrodynamics/";
            },},{id: "books-a-brief-history-of-time",
          title: 'A Brief History of Time',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023-a-brief-history-of-time/";
            },},{id: "books-cosmos",
          title: 'Cosmos',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023-cosmos/";
            },},{id: "books-surely-you-39-re-joking-mr-feynman",
          title: 'Surely You&amp;#39;re Joking, Mr. Feynman!',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023-surely-youre-joking-mr-feynman/";
            },},{id: "news-openai-announced-a-proof-that-the-navier-stokes-equations-can-blow-up-in-finite-time-formalised-in-the-lean-proof-assistant-a-post-on-what-lean-is-and-why-a-machine-checkable-proof-changes-the-burden-of-verification-is-in-progress",
          title: 'OpenAI announced a proof that the Navier–Stokes equations can blow up in finite...',
          description: "",
          section: "News",},{id: "news-completed-my-msc-in-nanoscience-nanotechnology-and-nanoengineering-at-ku-leuven-with-a-thesis-on-modelling-middle-of-line-parasitics-for-advanced-cfets-carried-out-at-imec",
          title: 'Completed my MSc in Nanoscience, Nanotechnology and Nanoengineering at KU Leuven, with a...',
          description: "",
          section: "News",},{id: "projects-computational-methods-in-physics",
          title: 'computational methods in physics',
          description: "Crank–Nicolson solutions to the time-dependent Schrödinger equation in Julia.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/computational-physics-julia/";
            },},{id: "projects-xlr-20-electric-racecar",
          title: 'XLR-20 electric racecar',
          description: "400 V accumulator and battery-management electronics for IIT Delhi&#39;s Formula Student car.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/formula-student-xlr20/";
            },},{id: "projects-gyandadhabha",
          title: 'Gyandadhabha',
          description: "A free, central place for notes and past papers — open to any student who wants them.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gyandadhabha/";
            },},{id: "projects-mol-parasitics-for-advanced-cfets",
          title: 'MOL parasitics for advanced CFETs',
          description: "Design-Technology Co-Optimization at imec — parametric TCAD, Kron-reduced parasitic networks, and a SPICE-ready compact model.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/imec-cfet-mol-parasitics/";
            },},{id: "projects-optical-nems-based-xor-gate",
          title: 'optical NEMS-based XOR gate',
          description: "Simulating and optimising a 1550 nm electro-mechanical optical logic gate.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/optical-nems-xor-gate/";
            },},{id: "projects-operational-telescopic-amplifier",
          title: 'operational telescopic amplifier',
          description: "A 180 nm OTA designed, taped out, and measured against its own simulations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ota-analog-chip/";
            },},{id: "projects-quantum-error-mitigation",
          title: 'quantum error mitigation',
          description: "IBM Qiskit Global Summer School — cutting computational error from ~70% to under 10%.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/qiskit-quantum-ml/";
            },},{id: "projects-3d-printed-quadcopter",
          title: '3D-printed quadcopter',
          description: "A 211 g self-built drone with PID flight stabilisation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/quadcopter-drone/";
            },},{id: "projects-21-cm-radio-telescope",
          title: '21 cm radio telescope',
          description: "A low-cost horn antenna built to detect neutral hydrogen and measure galaxy rotation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/radio-telescope-21cm/";
            },},{id: "projects-reliability-and-yield",
          title: 'reliability and yield',
          description: "Failure-analysis case studies on semiconductor device degradation and yield loss.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/reliability-yield-failure-analysis/";
            },},{id: "projects-student-led-rocketry-project",
          title: 'student-led rocketry project',
          description: "Founding IIT Delhi&#39;s first student-led space project — solid propellant, test benches, and the altitude problem.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rocketry-space-project/";
            },},{id: "projects-rutag-smart-vending-cart",
          title: 'RuTAG smart vending cart',
          description: "Survey-driven modular attachments for street vegetable carts, designed to cost 40–60% less than commercial equivalents.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rutag-vending-cart/";
            },},{id: "projects-solar-corona-imaging-australia-2023",
          title: 'solar corona imaging, Australia 2023',
          description: "Equipment lead for a four-telescope coronal imaging expedition inside a two-minute totality window.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/solar-eclipse-corona-2023/";
            },},{id: "projects-single-photon-avalanche-diodes",
          title: 'single photon avalanche diodes',
          description: "Bachelor thesis — silicon SPAD design in Silvaco TCAD for near-infrared detection.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spad-design-simulation/";
            },},{id: "projects-pick-up-arm-prototype-for-ta-moons",
          title: 'pick-up arm prototype for TA-MOONS',
          description: "Precision optomechanical design and error-budget analysis to 16 µm and 5 µrad, for a multi-object spectrometer pick-up arm.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tamoons-pickup-arm/";
            },},{id: "projects-finite-state-machines-on-a-cpld",
          title: 'finite state machines on a CPLD',
          description: "Counter designs in Verilog, synthesised to real hardware and verified against a test bench.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/verilog-fsm-cpld/";
            },},{id: "projects-8-bit-vector-multiplication-microprocessor",
          title: '8-bit vector multiplication microprocessor',
          description: "A full RTL-to-layout digital implementation flow, from behavioural Verilog to a timed, DRC-checked layout.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vlsi-vector-multiplier/";
            },},{id: "teachings-electronics-and-mechanical-fundamentals",
          title: 'Electronics and Mechanical Fundamentals',
          description: "Training incoming Formula Student engineers in the electrical and mechanical skills needed to build a competition racecar.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/electronics-and-mechanical-fundamentals/";
            },},{id: "teachings-introduction-to-robotics",
          title: 'Introduction to Robotics',
          description: "A from-scratch robotics course for school students with no prior electronics background, taught through three build projects.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-robotics/";
            },},{id: "teachings-quantum-computing-with-qiskit",
          title: 'Quantum Computing with Qiskit',
          description: "A four-week workshop series taking bachelor students from quantum gates to running their own circuits on IBM&#39;s quantum hardware.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/quantum-computing-qiskit/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Ishaan_Jain_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%61%69%6E.%69%73%68%61%61%6E@%7A%6F%68%6F%6D%61%69%6C.%65%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ishaanmina", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qLbkHtF8AAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ishaan-jain-7515761bb", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
