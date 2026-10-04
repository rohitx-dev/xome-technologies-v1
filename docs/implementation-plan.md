# Xome Technologies — Implementation Plan

Version: 1.0 — fresh start, 4 October 2026
Owner: Rohit Singh
Project: D:\xome-technologies-v1
Save as: docs/implementation-plan.md

## 1. Start here each session

This document answers: What do we work on next?

1. Open the current GitHub milestone.
2. Choose its next unfinished, unblocked issue in the order below.
3. Read that issue and the document sections it links to.
4. Work on its branch, complete its checks, and open a pull request.
5. Review and merge, update local main, then start the next issue.

Work on one implementation issue at a time. Do not memorise every document.
An issue is a task; a milestone groups tasks; a branch holds that task's changes.
A pull request is where we review those changes before merging into main.

This is a new plan. Reading documents is planning progress, not completed application
functionality. No repository, issue, branch, or deployment is created by this file.

## 2. Which document answers which question?

| Question | Document |
| --- | --- |
| What is included in the first release? | mvp-requirements.md |
| Which technologies and folders do we use? | architecture.md |
| What appears on each page? | website-requirements.md |
| How should pages and components look? | design-guidelines.md |
| What task comes next? | implementation-plan.md |
| How do we set up GitHub, name branches, and submit work? | github-setup.md — next document to prepare |

Use only the fresh documents for this project. Valoura and older Xome plans are
reference material. Technical choices already selected in architecture.md resolve
the corresponding open technology questions in the requirements; provider accounts
and exact versions still need selecting at the appropriate task.

## 3. Our milestones

| Milestone | Goal | Finish when |
| --- | --- | --- |
| M0 — Planning and setup | Prepare the project and workflow | Documents and GitHub setup exist; the application runs; automated basic checks pass |
| M1 — Public website | Build the company pages and portfolio | Public pages work on mobile/desktop; the quote form interface is ready |
| M2 — Accounts and client onboarding | Store data and let invited clients sign in | Admin can invite a client; activation, login, logout, reset, and protected dashboards work |
| M3 — Enquiries and projects | Manage requests and agreed work | Enquiries save; admin manages clients/projects; clients see only their own projects |
| M4 — Progress and delivery | Keep clients informed | Milestones, updates, delivery links, and dashboard summaries use real saved data |
| M5 — Testing and launch | Release the complete application | Full journey and access checks pass on the deployed application; handover is documented |

Follow M0 → M1 → M2 → M3 → M4 → M5.
These are GitHub development milestones. Client project milestones inside the app
are a separate feature introduced in M4.

## 4. Before issues: initialise the repository

The first commit creates main so later work can use branches and pull requests.

- Finish the six planning documents, including the upcoming GitHub setup guide.
- Create a short README and safe .gitignore.
- Initialise Git in the confirmed fresh folder and make the initial documentation commit.
- Create an empty GitHub repository, connect its verified remote, and push main.
- Create the six milestones and a Project board.
- Create the first setup issue. Use a blank issue while templates do not yet exist.

The upcoming github-setup.md will give the exact steps. Do not run commands intended
for an older project or push into an uncertain remote. Preserve earlier projects.
Initial repository creation is the only planned exception to issue → branch → PR.

## 5. M0 task order — Planning and setup

Create these issues after the initial repository exists. Each row is one planned issue.
Rows use titles only: GitHub assigns the real issue numbers when we create them.

| Issue title | Read | Work and completion checks |
| --- | --- | --- |
| Set up GitHub templates and workflow | github-setup.md | Add task, bug, and PR templates; verify milestones/board and chosen repository rules; merge the setup PR |
| Create the Next.js application and folder structure | architecture sections 2–5 | Scaffold one application with TypeScript, Tailwind, and src/app; record versions; run locally; commit lockfile and setup instructions |
| Add automated quality checks | architecture section 9 | Provide lint, typecheck, and build scripts; run them locally and in GitHub Actions; a failing check prevents calling the issue complete |

The folder already contains docs. If scaffolding rejects a nonempty directory,
generate in a separate temporary folder and copy only the required application files.
Preserve docs and Git metadata; never delete them to make scaffolding work.

Do not add database or auth packages until their implementation task needs them.
Configure required CI checks only after the workflow has run and the names are known.
For solo work, use recorded self-review; do not require an unavailable external reviewer.

## 6. M1 task order — Public website

| Issue title | Read | Work and completion checks |
| --- | --- | --- |
| Build shared styles, header, and footer | design sections 2–5; website section 3 | Shared colours/components, approved logo, responsive navigation, footer; verify keyboard menu and header contrast |
| Build the homepage | website section 4; design sections 3–4 | Hero, services preview, selected work, process, reasons to choose Xome, and quote CTA; check mobile and desktop |
| Build Services and About pages | website section 4 | Add accurate service/company content and working quote links; no invented business claims |
| Build the Portfolio page and connect featured projects | website section 5; design section 6 | Shared portfolio data, full grid, up to three featured entries on Home, valid optional live links, demo labels |
| Build the Contact form interface | website section 6 | Fields, shared validation, pending/error layouts, and retained input; clearly identify submission as unavailable until M3 connects storage |
| Add Privacy, not-found, and page metadata | website sections 4 and 10 | Draft Privacy against the intended data handling; add useful missing-page navigation and descriptive page titles; check all public links |

The homepage can initially show a truthful portfolio empty state. Connect real approved
entries in the Portfolio issue. Never fabricate client work to fill a design.
M1 is a UI milestone: a success animation or simulated response is not a saved enquiry.
Do not publicly launch an unfinished quote service or an unreviewed Privacy page.

## 7. M2 task order — Accounts and client onboarding

| Issue title | Read | Work and completion checks |
| --- | --- | --- |
| Set up PostgreSQL, Prisma, and the initial data model | architecture sections 3, 6, 9 | Choose compatible versions; document fields/relationships; add identity, client, and invitation foundations; migrations run on empty dev/test databases |
| Add admin login, sessions, and protected dashboard shells | architecture section 7; website sections 7–9 | Configure Better Auth, disable public registration, provision first admin securely, implement login/logout and role checks; test rejected access |
| Set up email and define activation and reset rules | architecture sections 7–8 | Choose email provider, implement server-only sending, configure test delivery; record expiry/resend/session rules and the supported account-provisioning approach |
| Build client records, invitations, and activation | requirements section 7; website sections 7–8 | Admin adds client and sends/resends invite; client sets password and signs in; expiry, reuse, resend, duplicate-email, and delivery-failure checks pass |
| Add password reset and verify account boundaries | website section 7; architecture section 7 | Reset works; invalid/reused links fail; existing sessions are revoked; clients cannot become admin or enter admin pages |

Plan the complete activation flow before coding it. Use supported auth-library APIs
to create credentials; do not write password hashes by hand. Define the database work
needed for single-use invitations and test concurrent activation attempts.
Provide safe environment examples without real secrets. Introduce integration tests
with an isolated database as account behaviour appears, rather than waiting for M5.

Client creation belongs here because invitations require a client record. M3 extends
the same screens with projects and enquiries; it does not build a second client system.

## 8. M3 task order — Enquiries and projects

| Issue title | Read | Work and completion checks |
| --- | --- | --- |
| Save quote enquiries with validation and abuse protection | requirements section 6; architecture section 8 | Add enquiry data migration and endpoint; connect form; save valid input, reject invalid input, enforce shared rate limits, and never show false success |
| Build admin enquiry management | website section 8 | Enquiry list/detail, status filters, private notes, loading/empty/error states; restrict access to admin |
| Create and manage client projects | requirements section 8; website section 8 | Add project migration; create for an existing client, edit details/status, list/filter; link enquiry to resulting project before marking Converted |
| Build client project lists and details | website section 9; architecture section 7 | Read-only project overview and detail show saved scope/dates/status/amount; client A cannot read client B's records by changing URLs or requests |

Use bounded lists with pagination. Reuse existing client records instead of duplicate
accounts. Preserve completed/cancelled project history. Client project access must be
checked inside the data service, not only by hiding links.
Document each endpoint's input, output, errors, and permissions in its issue before coding.
Keep reusable contracts alongside the code and update them in the same PR.

## 9. M4 task order — Progress and delivery

| Issue title | Read | Work and completion checks |
| --- | --- | --- |
| Add project milestones and client-visible progress | requirements section 8; website sections 8–9 | Add milestone migration and admin controls; client sees saved step/status/dates; no invented percentage |
| Add dated project updates | requirements sections 8–9 | Add update migration; label admin form Visible to client; client sees only updates for their projects; private enquiry notes remain private |
| Add project delivery links | requirements section 8; website sections 9–10 | Admin saves safe web links and labels; assigned client opens them; reject unsafe URL schemes and never expose credentials |
| Complete admin and client overview screens | website sections 8–9; design section 7 | Actual counts/recent records, empty/error states, mobile layouts; client summaries never include another client's data |

Clients remain read-only. Chat, uploads, approvals, and payment tracking are outside scope.

## 10. M5 task order — Testing and launch

| Issue title | Read | Work and completion checks |
| --- | --- | --- |
| Verify complete journeys and fix release blockers | requirements section 11 | Enquiry → onboarding → project → progress → delivery works; include invalid inputs, email/save failures, expired links, and two-client access tests |
| Finalise content, accessibility, and release configuration | website section 10; design sections 8–9 | Verify contacts, assets and portfolio permission; finalise Privacy against actual providers/retention; check keyboard/mobile/zoom; document environment and provider settings |
| Deploy and document the first release | architecture section 9 | Configure chosen host/database/email; apply migrations safely; verify deployed journey, HTTPS and sessions; record backup/restore, recovery, and setup instructions |

Create a separate bug issue when a discovered problem needs its own change. Link it to
the affected milestone and treat release-blocking bugs as prerequisites for launch.
Never mark release complete because the homepage deploys: client management must work too.

## 11. How to turn a row into an issue

At the start of each milestone, create its issues from the rows above. Keep future
milestones in this plan until needed; we do not need dozens of open issues on day one.

Every task issue contains:

- Goal: why the task matters.
- Milestone: the single milestone it belongs to.
- Read first: document names and exact sections.
- Depends on: real issue links that must finish first.
- Work checklist: what to implement.
- Completion checks: how to prove it works.

Start with one issue per row. If a task becomes too large for a clear review, split it
deliberately, record the dependency, and update this plan. Do not silently change scope.

Example only: if GitHub gives the header task number 12, its branch can be
feat/12-site-header. If GitHub gives it number 8, use feat/8-site-header.
No X-01, V-01, or B1 task IDs. M0–M5 identify milestones, not issues.

## 12. Board and branch routine

| Board state | Meaning |
| --- | --- |
| Backlog | Planned, but prerequisites or scope are not ready |
| Ready | Scope is clear and prerequisites are complete |
| In progress | We are working on this issue's branch |
| In review | Pull request is open; we are reviewing changes and results |
| Done | Completion checks pass and the changes are merged into main |

For a blocked task, add a blocked label and explain the blocker on the issue.
Move it to Ready only after its dependencies are complete.
Do not assume the board updates automatically; verify its status after merge.

Branch categories: docs/ for documentation, chore/ for setup, ci/ for automated
checks, feat/ for features, and fix/ for bugs. Follow the category with the actual
issue number and a short description. Exact commands belong in github-setup.md.

Always start from up-to-date main. Commit related changes, push the task branch,
open its PR, review the diff and check results, merge, and update local main.
Close an issue only when the PR completes its scope. There are no permanent
frontend, backend, or person-named branches in this workflow.

## 13. What counts as done?

- The behaviour in the issue works; important failure states are handled.
- Relevant checks were actually run and their results recorded.
- Protected features have server-side access and ownership checks.
- Changed user interfaces have mobile/desktop evidence where useful.
- Related documentation matches the implementation.
- No secrets, generated build output, or unrelated files are committed.
- The PR is reviewed and merged, and the issue/board reflect the result.

We do not add tests merely to repeat static markup. Add focused tests for validation,
permissions, invitation use, persistence, and other behaviour where a failure matters.

## 14. How our guided steps will be presented

Each implementation step will state:

1. Current milestone and actual issue number.
2. Exact branch to use.
3. Document sections to read.
4. Work to do, with an explanation of the folders and code.
5. Checks to run and expected results.
6. Commit and PR instructions, followed by the next task after merge.

Current position: M0 planning. Requirements, architecture, page requirements, and
design have been read. This implementation plan is the fifth document. Next, prepare
github-setup.md, then initialise the repository and begin the first setup issue.
