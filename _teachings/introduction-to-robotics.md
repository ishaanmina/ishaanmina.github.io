---
layout: course
title: Introduction to Robotics
description: A from-scratch robotics course for school students with no prior electronics background, taught through three build projects.
instructor: Ishaan Jain
year: 2022
term: June – July 2022
location: Rancho Labs, Delhi
course_id: introduction-to-robotics
---

**~50 secondary and senior-secondary students** · Curriculum designed and delivered end to end

I designed this course from scratch for students who had never opened a circuit before. The brief was an
"introductory robotics course"; the harder problem was sequencing it so that nothing felt like magic and
nothing felt like homework.

### The design constraint

Every concept had to terminate in something the students could physically build, power on, and watch
misbehave. Debugging is the part of engineering that actually teaches, and it only happens if the thing in
front of you is real. That ruled out simulation-first teaching and pushed the whole curriculum toward three
progressively harder builds.

### What the course covered

- **Electronics** — digital and analogue peripherals, reading a datasheet, voltage and current as things
  you measure rather than things you are told.
- **Mechanical systems** — linkages, actuation, and why a design that works in CAD binds in plastic.
- **Programming** — Arduino in C++, from blinking an LED through to interrupt-driven sensor reads.

### The three builds

**1. Piezoelectric speaker.** A voltage signal drives plate vibration at audible frequencies. This is the
cheapest possible demonstration that an electrical waveform and a physical one are the same object viewed
from two sides, and it gives students an immediate, audible debugging signal — a wrong frequency is
something you _hear_.

**2. Prosthetic arm.** Flex sensors on a glove, a 433 MHz RF transmitter/receiver pair, and servo motors
driving a 3D-printed arm. This introduces the full sensing → transmission → actuation chain in one build,
and it is the first point where students hit real engineering problems: sensor noise, dropped packets, and
servo current draw that browns out the microcontroller.

**3. Autonomous trash collector.** A multi-sensor robot that navigates, detects fill level, and reports
status and capacity alerts over an HC-05 Bluetooth/UART link. This is the integration project — multiple
sensors, a state machine, and a communications protocol that has to keep working while the robot moves.

### Tools

Arduino IDE · C++ · 3D printing · custom PCB design · servo and RF modules · HC-05 Bluetooth/UART

Builds were deliberately kept within reach of the students' skill level: custom PCBs and printed parts
removed the fiddly assembly that would otherwise have consumed the teaching time.
