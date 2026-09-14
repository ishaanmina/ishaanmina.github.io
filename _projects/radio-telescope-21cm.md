---
layout: page
title: 21 cm radio telescope
description: A low-cost horn antenna built to detect neutral hydrogen and measure galaxy rotation.
img: assets/img/sawbird3.png
meta: "IIT Delhi · 2022 · independent"
importance: 4
category: hardware and instrumentation
---

**IIT Delhi** · September – December 2022

Neutral hydrogen emits at 1420.4 MHz through the spin-flip transition — a 21 cm line that is the standard
tracer for mapping hydrogen across the galaxy. It is also faint enough that detecting it on a hobby budget
is a real instrumentation problem rather than a shopping exercise.

### Work

- Built a **custom horn antenna**, following a published Indian Academy of Sciences design, to detect the
  21 cm hydrogen line.
- Successfully detected the hydrogen line signal from the night sky, centred on the Milky Way galactic
  plane — consistent with the higher hydrogen density expected in that direction.

### Limitation

Measurement precision was constrained by the receiver noise floor and the antenna aperture size, which is
the expected trade-off for a low-cost build.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sawbird3.png" title="The receive chain front end: a SAWbird+ H1 low-noise amplifier and band-pass filter centred on 1420 MHz, between the horn antenna and the RTL-SDR. Product image, Nooelec." class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    The receive chain front end: a SAWbird+ H1 low-noise amplifier and band-pass filter centred on 1420 MHz, between the horn antenna and the RTL-SDR. Product image, Nooelec.
</div>

### Skills

RF and antenna design · horn antenna construction · RTL-SDR · signal processing · noise floor characterisation · radio astronomy
