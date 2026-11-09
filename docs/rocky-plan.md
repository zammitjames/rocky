# Rocky implementation plan

## Product

The owner operates a company of persistent AI coworkers. A manager can have many
direct reports, including other managers. Agents keep their own identities and
working state when moved between teams.

Example: Owner → Engineering manager → Platform lead → Engineers; Owner → Finance
lead → Analysts. The company hierarchy and task-delegation tree are separate.

## First milestone: organization

Add departments and a nullable managerBotId relationship within the same space.
Retain parentBotId as creation provenance. Validate cycles, self-reporting,
space membership, and moves in the backend. Add APIs and an expandable organization
tree on web and mobile; Electron uses the web UI. Moving an employee must preserve
its history, routines, files, and identity. Deleting a manager requires an explicit
choice of where its reports move.

## Second milestone: durable delegation

Extend existing tasks/tickets and agent messaging with parent task, assignee,
requesting manager, expected output, context references, status, and result.
Managers can fan out assignments, wait for dependencies, request revisions,
accept results, and escalate blockers. Persist dispatch and completion with
idempotency keys so restarts and duplicate delivery do not duplicate work.
Use persistent employee bots; temporary helpers do not represent employees.

## Third milestone: context and handoffs

Add company, department, project, and private-agent context scopes. Access follows
explicit grants; reporting relationships alone never grant credentials or all
private transcripts. Retrieve relevant context within a bounded prompt budget.
A handoff includes objective, constraints, relevant decisions, artifact references,
expected output, task id, and where to return its result. Promote accepted results
to shared context deliberately, with source and revision history.

## Fourth milestone: scheduled operations

Reuse existing cron, timezone, one-time, and event-triggered routine machinery.
A routine can start a manager-owned task that fans out and later aggregates
results. Add company/team spend budgets, per-resource concurrency controls,
timeouts, cancellation, bounded retries, and loop protection. Agent routines
and arbitrary host operating-system cron jobs are distinct capabilities.

## Acceptance scenario

An owner creates an engineering manager with ten persistent engineers and a
finance lead with analysts. A weekday routine asks the manager to review project
status. It assigns scoped work, engineers share artifacts and report back, and
the manager posts one reviewed summary. An interrupted worker resumes without
duplicating assignments. Finance cannot read private engineering context without
an explicit grant. Nested teams can be moved without losing their history.

## Initial snapshot limits

This document is a plan, not a claim that these milestones are implemented.
The initial rebrand retains internal package namespaces, inherited artwork,
source documentation, and protocol identifiers. No model keys, hosted deployment,
app-store release, or production credentials are included.
