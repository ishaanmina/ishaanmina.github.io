---
layout: page
title: operational telescopic amplifier
description: A 180 nm OTA designed, taped out, and measured against its own simulations.
img: assets/img/OTA-layout.png
importance: 3
category: semiconductor and devices
---

**MICAS, KU Leuven** · September – November 2024 · Design and Implementation of Analogue Circuits

Designed an operational telescopic amplifier to hit specific gain and bandwidth targets inside fixed
power and area budgets — then had it fabricated and measured the physical part, which is the rare and
genuinely useful half of an analogue design course.

### Measured specifications

| Parameter              | Value         |
| :--------------------- | :------------ |
| Gain                   | 87.65 dB      |
| Gain-bandwidth product | 1.23 MHz      |
| Power consumption      | 1 mW at 1.8 V |
| Transistor count       | 10            |
| Technology node        | 180 nm        |

- Schematic and layout in **Cadence Virtuoso**, simulation in **ADE**.
- Post-fabrication characterisation matched the simulated predictions to within **under 1% deviation**.
- Area was not calculated — the design sat comfortably inside the area budget.

The physical chip is still in my possession.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/OTA-Schematic.png" title="OTA schematic" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/OTA-layout.png" title="OTA layout" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    The telescopic OTA: schematic in Cadence Virtuoso (left) and the taped-out layout in 180 nm (right). Ten transistors.
</div>

### Skills

Analogue IC design · Cadence Virtuoso (schematic & layout) · Cadence ADE · 180 nm CMOS · tape-out flow · post-silicon characterisation
