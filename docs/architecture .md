# Xome Technologies — Technical Architecture

Version: 1.0 — fresh start, 4 October 2026
Owner: Rohit Singh
Project location: D:\xome-technologies-v1
Save this document as: docs/architecture.md
Scope reference: docs/mvp-requirements.md (first release includes client management)

## 1. Purpose

Requirements explain WHAT we build. Architecture explains HOW we organise it.
Read sections 2–5 now. Use the remaining sections when their feature is started.
This is a plan; it does not mean these tools have been installed or features built.

## 2. Main decision

Build one Next.js application with a PostgreSQL database.
The same application contains public pages, admin pages, client pages, and backend
code. Backend means the trusted code that checks permissions and saves information.
We do not need a separate Express application for this release.

Node.js runs the server code. React builds the interface. Next.js organises both.
Next.js Route Handlers provide HTTP endpoints when needed [1].

## 3. Tools and their jobs

| Tool | Simple explanation | Used for | Introduce |
| --- | --- | --- | --- |
| Next.js App Router | The application framework | Pages, layouts, and backend request handling | M0 |
| React | Builds reusable interface pieces | Header, forms, cards, dashboards | M0 onward |
| TypeScript | Checks the shapes of values while coding | Catching mistakes in application code | M0 |
| Tailwind CSS | Styling utilities | Colours, spacing, layouts, and mobile design | M0/M1 |
| PostgreSQL | Stores related records permanently | Clients, enquiries, projects, accounts, progress | M2 |
| Prisma ORM | Connects TypeScript server code to the database | Database queries and versioned database changes | M2 |
| Better Auth | Handles account authentication | Password login, sessions, and password reset | M2 |
| Zod | Checks information received at runtime | Enquiry and project form validation | When forms need it |
| Git and GitHub | Record and review changes | Issues, branches, commits, pull requests | M0 |
| GitHub Actions | Runs automated checks | Lint, type checking, build, and later tests | M0 onward |

Prisma is not a second database. PostgreSQL stores the records; Prisma accesses them.
TypeScript does not validate untrusted form input by itself; Zod performs that job.
Better Auth identifies the signed-in user. Our code still checks what they may access.
Its official documentation describes Next.js and Prisma integrations [3][4].

Select and record compatible supported package versions during setup. Commit the
lockfile and record the Node.js major version. The Better Auth Prisma example currently
uses Prisma 7; verify compatibility before selecting the ORM major. Do not combine
setup instructions from different major versions [3][5].

## 4. How the application works

Example: the admin creates a client project.

1. The admin fills in a form in the browser.
2. The form sends a request to a Next.js Route Handler.
3. Server code validates the session, checks admin access, and validates the form.
4. A project service applies the project rules and writes through Prisma to PostgreSQL.
5. The server returns success only after saving succeeds.
6. The interface shows the saved project or a readable error.

The client project page reads through a server-side service that checks ownership.
The browser never connects directly to the database.

Project convention: use Route Handlers for form submissions and changes. Server
Components may call authorised read services directly without calling our own HTTP
endpoints. Interactive menus and forms use Client Components [2]. Keep the business
rules in shared server services so pages and endpoints do not duplicate them.

## 5. Planned folders

Create folders as we implement their features. Do not create every empty folder now.

| Path | What belongs here |
| --- | --- |
| docs/ | Requirements, architecture, design, implementation order, GitHub instructions |
| .github/ | Issue templates, pull request template, automated checks |
| public/ | Public logo and approved portfolio images; never private client files |
| src/app/ | Page routes, shared layouts, and API Route Handlers |
| src/app/(public)/ | Public pages such as Home, Services, and Portfolio |
| src/app/(auth)/ | Login, account activation, and password reset pages |
| src/app/admin/ | Admin dashboard pages |
| src/app/client/ | Client dashboard pages |
| src/app/api/ | Endpoints that receive requests, including authentication |
| src/components/ | Reusable interface pieces |
| src/content/ | Public service descriptions and portfolio entries maintained in code |
| src/lib/ | Small shared utilities and form validation schemas |
| src/server/ | Server-only authentication configuration, database connection, permission checks, and feature services |
| prisma/ | Database definitions and migrations for the selected Prisma version |
| tests/ | Integration and browser tests as the features appear |

Parenthesised folders such as (public) group routes without becoming part of the URL.
For example, src/app/(public)/portfolio/page.tsx serves /portfolio.
Use only src/app, not an additional root app directory.
Keep one application, one package.json, and one package-lock.json.

## 6. Data we need

This is a relationship overview, not the final database schema.

| Record | Purpose | Relationship |
| --- | --- | --- |
| User and authentication records | Login identity, role, session, recovery information | Managed using the auth library's supported schema |
| Client | Contact and business details | May exist before activation; links to one client login when activated |
| Enquiry | A visitor's request, status, and private admin notes | Can later link to a client and resulting project |
| Project | Agreed work, status, dates, optional amount | Belongs to exactly one client |
| Project milestone | A named step and its status | Belongs to one project |
| Progress update | A dated message for the client | Belongs to one project |
| Delivery link | A labelled link to completed work | Belongs to one project |
| Invitation | Pending activation and expiry information | Belongs to one client record |

One client may have many projects. Each project may have many milestones, updates,
and delivery links. Portfolio entries stay in src/content and are separate from
private project records. A public enquiry does not automatically create an account.

Use database constraints to enforce relationships and unique account email addresses.
Store optional agreed amounts as integer paise in INR. Record timestamps consistently
in UTC and display them in the chosen local timezone. Treat date-only deadlines as dates.
Choose exact fields, indexes, and transactions before the M2 database work.

## 7. Accounts and access

- Roles are admin and client. Visitors have no account.
- Provision the first admin through a controlled server-side setup step.
- Disable public sign-up. Only the admin can start client onboarding.
- Invitations must be random, expiring, and single-use. Store a hash of an application
  invitation token, not the raw link token. Resending invalidates the previous invitation.
- Implement activation using supported authentication-library APIs; do not write password
  hashes or authentication records manually. Verify the complete invitation flow in M2.
- Use library-managed sessions with secure production cookies. Logging out revokes the session.
- Password reset uses the auth library's flow and invalidates existing sessions.
- Check session, role, and project ownership in server services for every protected operation.
- Never trust a client-supplied role or client ID as proof of permission.
- Protect signed-in mutations against cross-site requests. Use the library's origin protections
  for auth and appropriate same-origin/CSRF checks for our own endpoints.
- Private dashboard responses must not enter shared public caches.
- Test two different clients to prove that their information stays separate.

The exact expiry times and account policies will be recorded in the M2 issues before coding.

## 8. Email and public enquiries

Use a transactional email service for activation and password reset. Select its provider
before implementing invitations. Wrap email sending in one server-only module so page
code does not depend on a provider. Keep credentials in private environment variables.

For enquiries, saving to PostgreSQL is the required success condition. An optional admin
email is a notification, not the only copy of the enquiry. An email failure must not erase
a saved enquiry. If invitation email fails, show the admin a delivery error and allow resend.

Validate input on the server. Apply rate limits to enquiries, login, reset, and activation.
Production limits need shared storage such as PostgreSQL, not just one process's memory.
Do not expose passwords, session tokens, invitation links, or full enquiry content in logs.

## 9. Testing and deployment

- M0: automate lint, type checking, and production build.
- M1: check mobile layout, page links, and keyboard navigation.
- M2 onward: add focused integration tests using an isolated test database, especially
  for invitations, session rules, permissions, ownership, and saved data.
- M5: verify the full browser journey from enquiry to delivery, including failures.
- Choose a host that runs the Next.js server; a static-only export cannot run this application.
- Use a managed PostgreSQL database for production and separate development/test data.
- Record migrations, environment setup, backups, restore procedure, and deployment steps.
- Select hosting and email accounts later; this plan creates no services or expenses.

## 10. How this connects to our workflow

We are in M0 — Planning and setup. This document does not create a branch or issue.
Initial documents enter the first repository commit. Subsequent tasks follow:

Issue → branch → implementation → checks → pull request → review → merge.

The implementation plan owns the milestone and task order. The GitHub guide owns
branch names, templates, and commands. Requirements own feature scope. Architecture
owns technical decisions. Update the relevant document in the same PR when a decision changes.

Next planning step: define page structure and visual rules, then write the ordered
implementation plan and GitHub setup guide before scaffolding the application.

## Official references

These are references to consult when implementing, not required reading today.

1. Next.js Route Handlers: https://nextjs.org/docs/app/getting-started/route-handlers
2. Next.js Server and Client Components: https://nextjs.org/docs/app/getting-started/server-and-client-components
3. Better Auth Prisma integration: https://better-auth.com/docs/adapters/prisma
4. Better Auth Next.js integration: https://better-auth.com/docs/integrations/next
5. Prisma PostgreSQL quickstart: https://www.prisma.io/docs/prisma-orm/quickstart/postgresql
