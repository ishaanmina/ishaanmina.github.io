---
layout: page
title: MOL parasitics for advanced CFETs
description: Design-Technology Co-Optimization at imec — parametric TCAD, Kron-reduced parasitic networks, and a SPICE-ready compact model.
img: assets/img/10.jpg
importance: 1
category: semiconductor and devices
---

**imec, Leuven** · July 2025 – August 2026 · Student intern (DTCO), continuing as master's thesis

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

### Tools

Synopsys TCAD (Sentaurus, sVisual) · Python · SPICE

<div class="alert alert-secondary" role="alert" markdown="1">
Device performance and Power-Performance-Area outcomes from this work are covered by NDA and are not
described here. This page covers tooling and methodology only.
</div>
