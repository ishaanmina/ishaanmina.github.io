---
layout: page
title: MOL parasitics for advanced CFETs
description: Design-Technology Co-Optimization at imec — parametric TCAD, Kron-reduced parasitic networks, and a SPICE-ready compact model.
img: assets/img/imec-thesis.png
importance: 1
category: semiconductor and devices
---

**imec, Leuven** · July 2025 – August 2026 · Student intern (DTCO), continuing as master's thesis

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/imec-thesis.png" title="The stacked CFET structure: nFET and pFET nanosheet stacks one above the other, with the middle-of-line contacts and interconnect that this work models. Rendered from the parametrised geometry." class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    The stacked CFET structure: nFET and pFET nanosheet stacks one above the other, with the middle-of-line contacts and interconnect that this work models. Rendered from the parametrised geometry.
</div>

Complementary FET (CFET) devices stack nFET and pFET transistors vertically, which buys area but makes
the middle-of-line (MOL) interconnect dramatically more crowded — and parasitic capacitance there starts
to dominate the behaviour of a standard cell. This work is about predicting that parasitic contribution
early enough for it to inform design decisions.

### What I built

- Performed Design-Technology Co-Optimization (DTCO) by simulating 3D device structures in Synopsys TCAD
  and generating electrical models for logic standard cells.
- Fully parametrised the CFET structure across **43 distinct geometric and design parameters**, enabling
  systematic exploration of the design space.
- Built a custom parametric script to sweep CFET dimensions across 15+ core geometric parameters,
  including multi-parameter combined sweeps.
- Wrote Python automation that computes parasitic capacitance directly from device dimensions. The tool
  ingests Synopsys sVisual TCAD log files, or lets the user define a custom device and nominate exactly
  which surfaces to use for capacitance calculation and netlist generation.
- Applied the **Kron reduction network method** to collapse the full parasitic capacitance network down to
  input, output and node capacitances, holding individual capacitance values to **under 10% error**.
- Developed an analytical compact model of CFET parasitic capacitances that emits a SPICE-compatible
  netlist structured for integration into a Process Design Kit (PDK).
- Designed and built an in-house TCAD log-file viewer and renderer in Python to replace the native Synopsys
  viewer, which was CPU/GPU-heavy and unreliable. The replacement added slicing, per-layer hide/show,
  opacity control and surface highlighting, and rendered substantially faster.

### Interactive: the parametrised CFET and its parasitic network

Both views below are live Plotly figures exported from my own tooling. Drag to rotate, scroll to zoom. These show geometry and the capacitance-calculation method, not device performance figures, which remain under NDA.

<iframe src="{{ '/assets/plotly/cfet_nanosheet_viewer.html' | relative_url }}" title="The parametrised CFET nanosheet stack, rendered by the custom TCAD log-file viewer. Layers can be isolated and surfaces highlighted; this replaced the vendor viewer for day-to-day inspection." frameborder="0" scrolling="no" height="560px" width="100%" style="border: 1px dashed grey;" loading="lazy"></iframe>
<div class="caption">
    The parametrised CFET nanosheet stack, rendered by the custom TCAD log-file viewer. Layers can be isolated and surfaces highlighted; this replaced the vendor viewer for day-to-day inspection.
</div>
<iframe src="{{ '/assets/plotly/capacitance_example.html' | relative_url }}" title="Worked capacitance example: the surfaces nominated for capacitance calculation and the resulting parasitic network before Kron reduction to input, output and node capacitances." frameborder="0" scrolling="no" height="560px" width="100%" style="border: 1px dashed grey;" loading="lazy"></iframe>
<div class="caption">
    Worked capacitance example: the surfaces nominated for capacitance calculation and the resulting parasitic network before Kron reduction to input, output and node capacitances.
</div>

### Skills

Synopsys TCAD (Sentaurus, sVisual) · Python · SPICE

<div class="alert alert-secondary" role="alert" markdown="1">
Device performance and Power-Performance-Area outcomes from this work are covered by NDA and are not
described here. This page covers tooling and methodology only.
</div>
