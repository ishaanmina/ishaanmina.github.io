---
layout: page
title: pick-up arm prototype for TA-MOONS
description: Precision optomechanical design and error-budget analysis to 16 µm and 5 µrad, for a multi-object spectrometer pick-up arm.
img: assets/img/TIFR-2.png
importance: 5
category: semiconductor and devices
related_publications: true
---

**Tata Institute of Fundamental Research, Mumbai** · June – July 2023 · Opto-mechanical instrument engineer

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/TIFR-2.png" title="SolidWorks assembly of the pick-up arms in their circular configuration around the telescope focal plane." class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    SolidWorks assembly of the pick-up arms in their circular configuration around the telescope focal plane.
</div>

TIFR and ARIES are building a multi-object spectrometer for the 3.6 m Devasthal Optical Telescope, designed
to observe eight sources at once. Doing that requires eight robotic arms arranged around the focal plane,
each grabbing the light from one source and folding it into a shared spectrograph slit. My work was on the
mechanical design of that pick-up arm.

Underneath the astronomy, this is a precision-positioning problem: a moving mechanism has to place a
13 mm² field on an optical axis repeatably, to a tolerance set by the spectrograph, while vibration,
thermal drift and manufacturing tolerance all try to move it. The design work was an **error budget**:
allocate the allowed positioning error across those sources, then design and verify each contribution.

### Work

- Designed the robotic pick-up arm in **SolidWorks** CAD.
- Ran finite element analysis in **Ansys Mechanical** to verify structural and thermal integrity.
- Achieved **16 µm positional and 5 µrad angular precision** through design optimisation against the
  error budget.
- Used **Zemax** to verify optical focus and image movement through the full articulation range — the
  alignment check that confirms the mechanical tolerances translate into optical performance.
- Used **MATLAB/Simulink** for the control algorithm determining which of the 8 arms picks a 13 mm² area
  out of a 10 m telescope aperture field and redirects it to the spectrometer.
- Characterised and designed against the dominant error sources: vibration, thermal effects and
  manufacturing tolerance stack-up.
- Ran a **failure mode and effects analysis (FMEA)** on the arm mechanism, and used **5-whys** to trace
  positioning-error contributors back to their design causes, so the error budget was allocated against
  real failure modes rather than assumed ones.
- Applied **design-for-manufacture (DFM)** so the tolerances the error budget demanded were ones the
  prototype could actually be machined and assembled to.

### Publication

This work contributed to a paper presented at SPIE Astronomical Telescopes + Instrumentation 2024. I am a
contributing author, not the first author.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/TIFR-optics.png" title="Zemax ray trace of the pick-up arm optical path: fourteen surfaces from the focal-plane pick-off to the output fibre, used to verify focus and image movement as the arm articulates." class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Zemax ray trace of the pick-up arm optical path: fourteen surfaces from the focal-plane pick-off to the output fibre, used to verify focus and image movement as the arm articulates.
</div>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/TIFR-FEA.mp4" class="img-fluid rounded z-depth-1" controls=true muted=true %}
    </div>
</div>
<div class="caption">
    Ansys Mechanical FEA of the arm under load: the modal and deflection analysis behind the 16 µm and 5 µrad precision figures.
</div>

### Skills

SolidWorks CAD · Ansys Mechanical (FEA) · Zemax optical design · MATLAB/Simulink control · precision opto-mechanical design · tolerance and vibration analysis
