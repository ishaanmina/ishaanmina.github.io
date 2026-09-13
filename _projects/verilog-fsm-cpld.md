---
layout: page
title: finite state machines on a CPLD
description: Counter designs in Verilog, synthesised to real hardware and verified against a test bench.
img: assets/img/10.jpg
importance: 7
category: work
---

**Dept. of Electrical Engineering, IIT Delhi** · April – May 2022 · Supervised by Prof. Dhiman Mallick

Counters are the standard first hardware description exercise, and for good reason: they are simple enough
to reason about exhaustively, and they immediately expose the gap between writing code that _describes_
hardware and writing code that merely simulates correctly.

### Work

- Implemented a range of counters using **D flip-flops in Verilog**, written structurally so that the
  synthesised result mapped onto the flip-flop primitives I intended rather than whatever the tool inferred.
- Synthesised and deployed the designs onto a **CPLD board**, which forces the design to respect real
  resource limits and real propagation delays.
- Built a **test bench** to drive the designs through their full state space and interpreted the resulting
  waveforms in **GTKWave**.

### What it taught

The useful lesson was in the mismatch cases — where behavioural Verilog simulated correctly but synthesised
into something different, usually through an unintended latch or a race on the clock edge. Reading those out
of a waveform viewer is the skill that carries forward into every larger digital design.

### Skills

Verilog HDL · sequential logic design · CPLD synthesis · test-bench verification · GTKWave · timing analysis
