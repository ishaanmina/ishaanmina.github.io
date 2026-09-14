---
layout: page
title: reliability and yield
description: Failure-analysis case studies on semiconductor device degradation and yield loss.
img: assets/img/bathtub-curve.webp
importance: 9
category: semiconductor and devices
---

**KU Leuven** · Nanodevices and Circuits specialisation · Reliability and Yield

A device that meets specification on the first wafer and fails in the field is not a working device. This
course was about the gap between those two states — what degrades, how fast, and which of it shows up as
yield loss at test rather than as a warranty return three years later.

### Work

- Worked through in-class case-study exercises on semiconductor device reliability and yield, building
  failure-analysis competency against representative failure scenarios.
- Applied root-cause and degradation-mechanism analysis methods — separating intrinsic wear-out mechanisms
  from extrinsic, defect-driven failures, and reasoning about which statistical signature each produces.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bathtub-curve.webp" title="The bathtub curve: early infant-mortality failures, a constant random-failure floor, and wear-out. Separating which regime a failure belongs to is the first question in every case study." class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    The bathtub curve: early infant-mortality failures, a constant random-failure floor, and wear-out. Separating which regime a failure belongs to is the first question in every case study.
</div>

### Why it sits next to the rest of this work

Reliability is the constraint that quietly bounds most of the device work elsewhere on this page. A
parasitic model that informs a Power-Performance-Area trade-off is only useful if the resulting device
survives its intended lifetime, and the failure mechanisms are what set that limit.

### Skills

Failure analysis · root-cause analysis · degradation mechanisms · yield statistics
