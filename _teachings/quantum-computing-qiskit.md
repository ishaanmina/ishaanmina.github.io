---
layout: course
title: Quantum Computing with Qiskit
description: A four-week workshop series taking bachelor students from quantum gates to running their own circuits on IBM's quantum hardware.
instructor: Ishaan Jain
year: 2023
term: Workshop series, 2023
location: Physics and Astronomy Society, IIT Delhi
time: 4 weeks · 2–3 hours per week
course_id: quantum-computing-qiskit
---

**~15 bachelor students** · Informal workshop series, not a formal course

I had come through IBM's Qiskit Global Summer School two years earlier and wanted to compress what was
useful about it into something a motivated undergraduate could absorb in four sessions. The format was
deliberately informal — a workshop series under the Physics and Astronomy Society rather than a credited
course — which meant I could optimise for students actually running circuits instead of for an exam.

### The through-line

Quantum computing is usually taught either as linear algebra with no hardware, or as hardware demos with no
mechanism. Neither sticks. The series was built so that every concept ended with the students executing
something on **real IBM Quantum hardware** and seeing the result come back noisy — which makes the final
week on error mitigation feel necessary rather than academic.

### Week by week

**Gates and circuits.** Qubits, superposition and entanglement introduced through the gates that produce
them. Students built and simulated their first circuits immediately.

**Algorithms.** **Grover's** search and **Shor's** factoring algorithm — the two results that explain why
anyone funds this field. Grover first, because the amplitude amplification intuition is visual; Shor second,
because it needs the period-finding machinery underneath it.

**Quantum machine learning basics.** Variational circuits and parametrised models — where the classical and
quantum halves of a QML pipeline actually meet.

**Error mitigation.** Why results from real hardware disagree with the simulator, what the dominant noise
channels are, and the practical techniques for correcting for them statistically.

### What the students did

Students built circuits in **Qiskit** and submitted them to **IBM Quantum** servers to run on real quantum
processors, then compared those results against their own simulator runs. The gap between the two is the
whole lesson.

### Tools

Qiskit · Python · IBM Quantum
