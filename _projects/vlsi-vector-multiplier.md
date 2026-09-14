---
layout: page
title: 8-bit vector multiplication microprocessor
description: A full RTL-to-layout digital implementation flow, from behavioural Verilog to a timed, DRC-checked layout.
img: assets/img/8-bit_Processor.png
importance: 6
category: semiconductor and devices
---

**Dept. of Electrical Engineering, IIT Delhi** · August – November 2023 · Introduction to VLSI

Took an 8-bit vector multiplication microprocessor unit from a behavioural description all the way to a
physical layout — the complete digital implementation flow that sits behind every synthesised chip.

### The flow, end to end

**1. RTL design.** Wrote behavioural **Verilog** for the 8-bit vector multiplication microprocessor unit,
describing the datapath and control at the register-transfer level rather than gate by gate.

**2. Synthesis.** Performed RTL compilation in **Cadence Genus**, mapping the description onto a standard
cell library and observing how coding choices in the RTL propagate into gate count and critical path.

**3. Place and route.** Generated the physical layout in **Cadence Innovus** — floorplanning, cell
placement, clock tree, and routing.

**4. Sign-off.** Ran **static timing analysis** to confirm the design met its timing constraints across
corners, and **design rule checks** to confirm the layout was physically manufacturable.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/8-bit_Processor.png" title="Final placed-and-routed layout of the 8-bit vector multiplication unit in Cadence Innovus, after timing closure and DRC." class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Final placed-and-routed layout of the 8-bit vector multiplication unit in Cadence Innovus, after timing closure and DRC.
</div>

### Why the full flow matters

Each stage constrains the one before it. A multiplier that looks clean in RTL can produce a critical path
that will not close at the target frequency, or a layout that is routable only at the cost of area. Running
the whole flow is what makes those coupling effects visible instead of theoretical — and it is the same
loop, at a different scale, as the Power-Performance-Area trade-off work in my thesis.

### Skills

Verilog RTL · logic synthesis (Cadence Genus) · place and route (Cadence Innovus) · static timing analysis ·
design rule checking · standard cell libraries
