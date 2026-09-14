---
layout: page
title: single photon avalanche diodes
description: Bachelor thesis — silicon SPAD design in Silvaco TCAD for near-infrared detection.
img: assets/img/BTP-1.png
importance: 2
category: semiconductor and devices
---

**Dept. of Electrical Engineering, IIT Delhi** · August 2023 – May 2024 · Bachelor's thesis

A single photon avalanche diode is a photodiode biased above its breakdown voltage, so that a single
absorbed photon triggers a self-sustaining avalanche. Silicon is cheap and CMOS-compatible but absorbs
near-infrared light poorly, which is exactly where night-vision and IR camera sensors need to operate.
The thesis asked how far a silicon-based approach could be pushed toward competitive NIR performance.

### Work

- Used **Silvaco Atlas TCAD** to model PN junction diodes, bipolar diodes and MOSFETs, building up to a
  silicon SPAD intended for advanced camera sensor applications.
- Studied both **planar and epitaxial** SPAD structures, evaluating breakdown voltage and structural
  modifications against Photon Detection Efficiency (PDE).

### Result

- **30% PDE at 800 nm** (infrared), against an industry baseline of roughly 50% PDE for comparable sensors.
- Breakdown voltage: **−18.1 V**.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/BTP-1.png" title="Silvaco Atlas simulation of the SPAD cross-section: electric-field magnitude at bias, showing the high-field multiplication region under the central junction and the guard-ring structure suppressing premature edge breakdown." class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Silvaco Atlas simulation of the SPAD cross-section: electric-field magnitude at bias, showing the high-field multiplication region under the central junction and the guard-ring structure suppressing premature edge breakdown.
</div>

### Skills

Silvaco Atlas TCAD · semiconductor device physics
