---
layout: page
permalink: /skills/
title: skills
description: Ranked by how much they matter for semiconductor device and process work, with a depth signal on each.
nav: true
nav_order: 4
toc:
  sidebar: left
---

A flat list of tools says very little. Each entry below carries a depth marker and links to the
[project](/projects/) that backs it up.

**●** core — used extensively, thesis or flagship-project depth &nbsp;·&nbsp;
**◐** working — delivered a project or course with it &nbsp;·&nbsp;
**○** familiar — used, not deep

## 1. Device simulation and modelling

The centre of what I do.

| Tool / method                                  | Depth | Evidence                                                                          |
| :--------------------------------------------- | :---: | :-------------------------------------------------------------------------------- |
| **Synopsys TCAD** (Sentaurus, sVisual)         |   ●   | 13 months at imec — [CFET MOL parasitics](/projects/imec-cfet-mol-parasitics/)    |
| **Parasitic extraction and compact modelling** |   ●   | Kron-reduced capacitance networks, PDK-ready SPICE netlists, <10% error           |
| **Design-Technology Co-Optimization (DTCO)**   |   ●   | 43-parameter CFET design-space exploration                                        |
| **Python for EDA automation**                  |   ●   | TCAD log ingestion, capacitance calculation, netlist generation, custom 3D viewer |
| **Silvaco Atlas TCAD**                         |   ●   | 9-month bachelor thesis — [SPAD design](/projects/spad-design-simulation/)        |
| **Semiconductor device physics**               |   ◐   | SPADs, PN and bipolar diodes, MOSFETs; breakdown and PDE optimisation             |
| **SPICE simulation** (LTSpice)                 |   ●   | Formula Student safety circuits; compact-model verification                       |

## 2. Analogue and digital IC design

| Tool / method                            | Depth | Evidence                                                                                                  |
| :--------------------------------------- | :---: | :-------------------------------------------------------------------------------------------------------- |
| **Cadence Virtuoso** (schematic, layout) |   ●   | Taped out and measured — [180 nm OTA](/projects/ota-analog-chip/)                                         |
| **Cadence ADE**                          |   ◐   | OTA simulation; silicon matched within 1%                                                                 |
| **Verilog HDL**                          |   ●   | [FSMs on CPLD](/projects/verilog-fsm-cpld/), [8-bit vector multiplier](/projects/vlsi-vector-multiplier/) |
| **Cadence Genus** (synthesis)            |   ◐   | RTL-to-gates for the vector multiplier                                                                    |
| **Cadence Innovus** (place & route)      |   ◐   | Layout, STA and DRC sign-off on the same design                                                           |
| **Intel Quartus**                        |   ○   | CPLD synthesis                                                                                            |

## 3. Semiconductor lab and characterisation

Hands-on time in the lab, not just simulation.

| Technique                                                | Depth | Notes                                                                    |
| :------------------------------------------------------- | :---: | :----------------------------------------------------------------------- |
| **Probe stations, wafer handling, ESD-safe practice**    |   ◐   | Device-level electrical test                                             |
| **Atomic force microscopy (AFM)**                        |   ◐   | Surface characterisation                                                 |
| **2-/4-probe and Hall measurement**                      |   ◐   | Resistivity, carrier density, mobility                                   |
| **Thin-film deposition** (PVD, CVD, thermal evaporation) |   ◐   | Thin films, multilayers, nanoparticles                                   |
| **Spin coating, dip coating, electrodeposition**         |   ◐   | Wet-process film formation                                               |
| **Solar cell I–V, minority carrier lifetime, band gap**  |   ◐   | Optoelectronic characterisation                                          |
| **Reliability and failure analysis**                     |   ○   | [Case studies](/projects/reliability-yield-failure-analysis/), KU Leuven |

## 4. Programming and scientific computing

| Language / tool                       | Depth | Evidence                                                                           |
| :------------------------------------ | :---: | :--------------------------------------------------------------------------------- |
| **Python**                            |   ●   | All imec tooling; automation and visualisation                                     |
| **MATLAB / Simulink**                 |   ●   | NEMS optimisation, TIFR control algorithm, battery test analysis                   |
| **C / C++**                           |   ◐   | Embedded (ESP32, Arduino), taught to ~50 students                                  |
| **Julia**                             |   ●   | [Crank–Nicolson Schrödinger solver](/projects/computational-physics-julia/)        |
| **Qiskit**                            |   ◐   | [Quantum error mitigation](/projects/qiskit-quantum-ml/); taught a 4-week workshop |
| **Linux (Ubuntu), Git/GitHub, LaTeX** |   ●   | Daily working environment                                                          |
| **SimpleRISC**                        |   ●   | Computer architecture coursework                                                   |
| **RISC-V**                            |   ○   | Computer architecture coursework                                                   |
| **Origin**                            |   ◐   | Plotting and data analysis                                                         |
| **Mathematica**                       |   ○   | Symbolic work                                                                      |
| **STM32CubeIDE**                      |   ◐   | STM32 firmware                                                                     |

## 5. Multiphysics and mechanical design

| Tool                       | Depth | Evidence                                                                                                                      |
| :------------------------- | :---: | :---------------------------------------------------------------------------------------------------------------------------- |
| **COMSOL Multiphysics**    |   ●   | [Optical NEMS XOR gate](/projects/optical-nems-xor-gate/)                                                                     |
| **SolidWorks**             |   ●   | [TIFR pick-up arm](/projects/tamoons-pickup-arm/), [RuTAG cart](/projects/rutag-vending-cart/), Formula Student charging cart |
| **Ansys Mechanical** (FEA) |   ●   | Structural and thermal analysis, 16 µm / 5 µrad precision                                                                     |
| **Zemax**                  |   ○   | Optical focus and movement verification at TIFR                                                                               |
| **OpenRocket**             |   ◐   | [Rocketry project](/projects/rocketry-space-project/)                                                                         |

## 6. Electronics hardware

| Skill                                                       | Depth | Evidence                                                                             |
| :---------------------------------------------------------- | :---: | :----------------------------------------------------------------------------------- |
| **PCB design** (Altium, Eagle)                              |   ●   | 2 boards designed, 20+ debugged — [XLR-20 racecar](/projects/formula-student-xlr20/) |
| **Battery systems** — pack design, BMS, balancing, charging |   ●   | 400 V, 192-cell accumulator                                                          |
| **Soldering, wiring, high-voltage power train**             |   ●   | Accumulator-to-motor-controller integration                                          |
| **Embedded** — ESP32, STM32, Raspberry Pi, CPLD             |   ●   | [Quadcopter](/projects/quadcopter-drone/), robotics teaching                         |
| **3D printing, laser cutting, sheet metal**                 |   ●   | Drone frame, eclipse mounts, telescope hardware                                      |
| **RF / RTL-SDR**                                            |   ●   | [21 cm radio telescope](/projects/radio-telescope-21cm/)                             |

## Also

SharpCap and Siril (astrophotography) · Adobe Suite · Selenium · HTML/CSS

---

# Lab experience

Experimental techniques I have run hands-on, in full.

## Solid state and semiconductors

**Deposition and synthesis** — thin film, multilayer and nanoparticle synthesis by physical and chemical
vapour deposition; thermal evaporation; spin coating; dip coating; electrodeposition

**Electrical characterisation** — resistivity, band gap, carrier density and mobility measurement;
two-probe and four-probe measurement; classical Hall effect measurement; minority carrier lifetime
measurement; I–V characteristics of solar cells; junction diode characteristics in solar cell configuration

**Materials and structure** — crystal structure analysis; phase diagram analysis; dielectric constant and
specific heat measurement; superconductivity studies; magnetostriction

**Device design** — thin-film resistor design; magnetic field sensor design; optoelectronics; silver
nanoparticle plasmonics

## Optics

Michelson and Fabry–Pérot interferometry · Mach–Zehnder interferometry · Young's double-slit experiment in
the **single-photon regime** · single and multi-slit diffraction · open-frame He–Ne laser alignment ·
spatial filtering · Rubidium spectroscopy · spectrometry · Faraday rotation · light coupling

## Electronics

Verilog HDL coding and simulation in Quartus on CPLD boards · battery testing and capacity characterisation ·
PCB debugging · analogue, pulse and digital modulation and demodulation

---

# Relevant coursework

**Nanodevices and Circuits — KU Leuven**
Design and Implementation of Analogue Circuits · Semiconductor Devices · Technology of Integrated Systems ·
Reliability and Yield · Physical Material Characterization · MEMS and Microsystems

**Electrical Engineering — IIT Delhi**
Computer Architecture · Introduction to VLSI · Physical Electronics · Signals and Systems · Digital
Electronics · Design of Digital Integrated Circuits · Analog and Mixed-Signal Electronics for Signal
Processing

**Physics — IIT Delhi**
Solid State Physics · Statistical Physics · Quantum Mechanics · Electrodynamics

---

# Languages

| Language | Level              |
| :------- | :----------------- |
| Hindi    | Native             |
| English  | Fluent — IELTS 7.5 |
| Dutch    | A2 / Beginner      |
