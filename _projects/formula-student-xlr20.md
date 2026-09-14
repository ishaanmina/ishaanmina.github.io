---
layout: page
title: XLR-20 electric racecar
description: 400 V accumulator and battery-management electronics for IIT Delhi's Formula Student car.
img: assets/img/car-render.png
importance: 1
category: hands-on engineering
---

**AXLR8R Club, IIT Delhi** · May 2021 – June 2022 · Accumulator Department

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/car-render.png" title="XLR-20, the AXLR8R Formula Student electric racecar. CAD render of the full vehicle." class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    XLR-20, the AXLR8R Formula Student electric racecar. CAD render of the full vehicle.
</div>

Formula Student teams build a racecar a year. On an electric car, the accumulator is the part that can
genuinely hurt someone, so it draws the most scrutiny at technical inspection — 192 cells at 400 V, every
one of which has to be monitored and every fault path accounted for.

### Electrical and battery systems

- Co-led XLR-20, a project with a budget of roughly INR 10 million, and mentored 50+ juniors.
- Designed and helped manufacture a **400 V lithium-ion pouch cell battery module** with a passive BMS
  design. Cells were selected and specified from a vendor — the cell chemistry itself was not custom.
- Designed 2 PCBs: a per-cell sensing board, replicated 8× across the pack to monitor all **192 cells**;
  and a data-aggregation board that collected sensor data and transmitted it to the vehicle control unit
  for dashboard display.
- Personally tested and debugged **20+ PCBs**.
- Soldered, wired and connected power devices across the vehicle's power train, from the 400 V accumulator
  through to the motor controllers.
- Designed self-built safety circuits; manufactured and debugged boards in **Altium PCB Designer**;
  simulated in **LTSpice**.
- Owned fuse selection and specification across systems, from HPC fuses down to 0603 SMD fuses.
- Ran **50+ hours** of capacity testing on lithium-ion pouch cells, plotted in MATLAB, and wrote the
  pseudo-code for the charging logic.

### Mechanical and cost

- Designed a charging cart using tubular CAD modelling with DFM principles, manufactured using laser-cut
  fixtures.
- Performed manufacturing-cost analysis for the Cost event at Formula Bharat, identifying and implementing
  cost-saving opportunities across manufacturing processes.

### Results

- **3rd place overall**, Formula Bharat (January 2022), representing IIT Delhi nationally
- **2nd place**, Best Vehicle Design
- **2nd place**, Best Powertrain
- Design also won a Tesla-sponsored competition

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/accu-render.png" title="Accumulator container render" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/accu-assembly.png" title="Accumulator assembly" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    The 400 V accumulator: container render (left) and module assembly (right).
</div>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/accu-heat-plate.png" title="Accumulator heat-plate topology iterations: FEA thermal results for six candidate cut-out patterns, with the peak temperature per iteration, converging on the fourth design." class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Accumulator heat-plate topology iterations: FEA thermal results for six candidate cut-out patterns, with the peak temperature per iteration, converging on the fourth design.
</div>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/BMS-Schematic.png" title="BMS schematic" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/accu-safety-schematic.png" title="Safety circuit schematic" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Battery management schematic (left) and the accumulator safety circuit (right), designed in Altium.
</div>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/BMS-sensing-board.png" title="Sensing board annotated layout" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/BMS-sensing-board-image.jpeg" title="Fabricated sensing board" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    The per-cell sensing board: annotated layout showing cell-tab slots, busbar fastening holes and voltage/temperature sensing points (left), and the fabricated PCB (right). One of eight identical boards monitoring all 192 cells.
</div>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/AXLR8-teamPic.jpeg" title="The AXLR8R team at Formula Bharat 2022, Kari Motor Speedway, Coimbatore." class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    The AXLR8R team at Formula Bharat 2022, Kari Motor Speedway, Coimbatore.
</div>

### Skills

Altium PCB Designer · LTSpice · battery pack & BMS design · high-voltage safety systems · PCB debugging · soldering and wiring · fuse specification · MATLAB · CAD and DFM · team leadership
