---
layout: page
title: computational methods in physics
description: Crank–Nicolson solutions to the time-dependent Schrödinger equation in Julia.
img: assets/img/Julia-project.png
meta: "IIT Delhi · 2023 · course project"
importance: 8
category: semiconductor and devices
---

**Dept. of Physics, IIT Delhi** · April 2023 · Computational Methods in Physics

Numerical work on physical systems where the choice of integration scheme is not a detail — it determines
whether the answer means anything at all.

### Time-dependent Schrödinger equation

Solved the time-dependent Schrödinger equation using the **Crank–Nicolson method**, an implicit scheme that
is unconditionally stable and, critically, **unitary** — it conserves the norm of the wavefunction exactly
rather than approximately.

This matters more than it sounds. An explicit scheme applied to the same problem will happily return a
wavefunction whose total probability drifts away from one as the integration proceeds, which is not a small
numerical error but a physically meaningless result. Crank–Nicolson avoids it structurally, at the cost of
having to solve a tridiagonal system at every timestep.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Julia-project.png" title="Phase portrait of a Λ-CDM scalar-field cosmological model with a cosh potential, integrated numerically in Julia: trajectories in the (x, y, z) dynamical-system variables, showing the attractor structure of the expansion history." class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Phase portrait of a Λ-CDM scalar-field cosmological model with a cosh potential, integrated numerically in Julia: trajectories in the (x, y, z) dynamical-system variables, showing the attractor structure of the expansion history.
</div>

### Cosmological dynamical systems

The same course also covered dynamical-systems treatments of cosmology, reformulating the Friedmann equations for a scalar field as an autonomous system and integrating it to map the phase space, as in the portrait above.

### Also covered

- Numerical data analysis in **Julia**, chosen for numerical work where loop performance matters without
  dropping to C.
- **Lagrangian mechanics** formulations, deriving equations of motion from the action rather than from force
  balance, and integrating the resulting systems numerically.

### Skills

Julia · numerical methods for PDEs · Crank–Nicolson / implicit schemes · numerical stability and
conservation · Lagrangian mechanics · scientific data analysis
