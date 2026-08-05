---
title: "Stop Solving Everything with AI: Why Optimization Still Wins at Decision Making"
date: "2026-07-22"
summary: "ML is great at predicting what will happen. Optimization is what actually decides what you should do. Here's why the best backend systems use both — and why reaching for AI first is often the wrong move."
tags: Optimization, Operations Research, Linear Programming, Machine Learning, Artificial Intelligence, Java
---

# Stop Solving Everything with AI: Why Optimization Still Wins at Decision Making

Open LinkedIn right now. Give it five minutes.

You'll find someone claiming AI will "revolutionize" logistics, "optimize" your supply chain, or "automate" scheduling with a model that just needs more data and a bigger GPU.

Here's the question nobody in that post is asking:

> **What are we actually trying to solve?**

Because a lot of what gets called "AI-powered optimization" isn't AI solving an optimization problem. It's a classical operations research problem — one that's been formally studied and efficiently solved for *decades* — wearing an AI costume for the demo.

And in a fair number of cases, a linear program will beat your ML model. Not because AI is bad. Because it was never solving the actual problem.

---

## Prediction and decision are not the same job

This distinction rewired how I think about backend systems.

Machine Learning is built to answer questions like:

- How many orders will we get tomorrow?
- Which customers are about to churn?
- Will this machine fail in the next 24 hours?

These are **prediction problems**. Pattern-matching against history.

Optimization answers something else entirely:

> **Given everything we know right now, what should we actually do?**

That sounds like a small difference. It isn't. One of these gives you information. The other gives you an action.

---

## A forecasting model doesn't make decisions

Say your data science team ships a demand forecast running at 97% accuracy. Genuinely impressive work.

Ops still comes to you with the real questions:

- Which factory produces which product?
- Which warehouse fulfills which order?
- Which truck takes which shipment?
- How many people work tomorrow?

Notice the forecast model answers none of these. It hands you a number. Someone — or something — still has to turn that number into a plan that doesn't break the business.

That "something" is optimization.

---

## Three ingredients, no algorithm required

Strip away the math-speak and every optimization model is built from the same three things.

### Decision variables

The choices actually on the table.

- Assign Driver A to Route 1
- Produce 500 units in Factory X
- Ship Product Y from Warehouse B

### Constraints

Reality, encoded.

- Trucks have capacity limits.
- Employees have max hours.
- Warehouses run out of stock.
- Budgets are fixed.
- You can't ship what doesn't exist.

### Objective function

Your definition of "good."

- Minimize cost.
- Maximize profit.
- Balance workload.
- Cut emissions.

Feed a solver all three and it searches for the best feasible answer.

Notice what you *didn't* do anywhere in that process: write an algorithm.

You described the problem.

The solver did the rest.

---

## Why devs reach for AI first anyway

Somewhere along the way "AI" became a synonym for "smart."

Need scheduling? AI.

Need routing? AI.

Need pricing? AI.

Sometimes that's right. Often it isn't — because a routing problem doesn't stop being a routing problem just because you point a neural net at it. No amount of deep learning changes the underlying combinatorics.

---

## This isn't an anti-AI take

To be clear: this isn't "ML is overhyped, throw it out."

ML is exceptional at finding patterns in data. Optimization is exceptional at turning constraints into decisions. They're not competitors — they're different tools solving different halves of the same problem.

| Machine Learning does this | Optimization does this |
|---|---|
| Predicts customer demand | Decides production quantities |
| Forecasts travel times | Plans delivery routes |
| Predicts equipment failure | Schedules maintenance |
| Estimates sales | Allocates inventory |
| Forecasts electricity usage | Optimizes power generation |

One predicts.

The other decides.

Wire them together and you get something neither one can do alone.

---

## What this looks like in a real Spring Boot service

Here's where it gets concrete for backend engineers.

```text
Client Request
      │
      ▼
Spring Boot REST API
      │
      ▼
ML Service (predict demand)
      │
      ▼
Optimization Model (variables + constraints)
      │
      ▼
Solver (OR-Tools / HiGHS / Gurobi)
      │
      ▼
Optimal Plan → JSON Response
```

Spring Boot's job here isn't to solve anything. It's to orchestrate: validate the request, pull the business data, call the prediction service, build the model, run the solver, ship back the result.

The optimization engine is just another component in your architecture — the same category as your database or your message broker. Nothing exotic.

---

## The best code here is the code you don't write

The biggest surprise for engineers new to this: how little "algorithm" you actually end up writing.

Instead of weeks spent hand-tuning something like:

```java
for (...) {
    // find the next best driver
    // check constraints
    // assign the delivery
}
```

...you spend that time answering better questions:

- What are the real decision variables?
- Which constraints are actually mandatory vs. nice-to-have?
- What am I optimizing for, and can I even measure it?

Less procedural code.

Better, provably-correct solutions.

That trade is usually a win.

---

## So does optimization replace AI? No.

The strongest systems run both, each doing what it's actually good at:

1. ML predicts demand for the next 30 days.
2. Optimization decides production quantities.
3. Optimization assigns inventory to warehouses.
4. A second optimization model schedules transportation.
5. Spring Boot wraps the whole pipeline behind one clean REST API.

Clear responsibility per component.

That's just good architecture.

---

## The takeaway

We're wired as engineers to reach for the cleverest algorithm we can build. Sometimes the smarter move is to stop writing algorithms entirely.

If you're building something that answers:

- Which employee should work this shift?
- Which truck should take this delivery?
- Which warehouse should fulfill this order?
- How do I split a limited resource across competing demands?

...you might not need another model.

You might need a solver.

> **Machine Learning tells you what's likely to happen.**
>
> **Mathematical Optimization tells you what to do about it.**

The best systems know which question they're actually answering.