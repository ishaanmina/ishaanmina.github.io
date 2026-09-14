---
layout: page
title: optical NEMS-based XOR gate
description: Simulating and optimising a 1550 nm electro-mechanical optical logic gate.
img: assets/img/XOR-2.png
importance: 4
category: semiconductor and devices
---

**imec** · February – June 2025 · Course project

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/XOR-1.png" title="The device: a silicon nitride waveguide over a silicon grid, with a suspended plate that an applied voltage bends toward the waveguide to switch the optical path." class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    The device: a silicon nitride waveguide over a silicon grid, with a suspended plate that an applied voltage bends toward the waveguide to switch the optical path.
</div>

Optical logic avoids converting signals back into the electrical domain at every gate, but something still
has to switch the light. In a nano-electromechanical (NEMS) gate, an applied voltage physically displaces a
plate, and that displacement changes whether light propagates through the structure.

### Work

- Replicated a published NEMS device structure, then optimised its electrical and dimensional parameters
  through simulation in **COMSOL Multiphysics** and analytical analysis in **MATLAB**.
- The device operates at **1550 nm** and achieves **0.8 µm plate displacement** under a **10 V** applied
  voltage difference, which is what gates optical transmission on and off.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/XOR-3.png" title="Simulated optical mode profile in the waveguide cross-section (COMSOL)." class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Simulated optical mode profile in the waveguide cross-section (COMSOL).
</div>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/XOR-2.png" title="Bent vs unbent transmission" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/XOR-4.png" title="Bent-structure passband" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Transmission with the plate unbent versus bent (left): the bent state drops to about −30 dB across the band, giving the off state. The bent structure alone (right) shows a flat passband from roughly 1350 to 1700 nm, centred on the 1550 nm operating wavelength.
</div>

### Skills

COMSOL Multiphysics · MATLAB
