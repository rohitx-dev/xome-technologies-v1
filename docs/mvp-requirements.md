# Xome Technologies — First Release Requirements

Version: 1.0 — fresh start, 4 October 2026
Owner: Rohit Singh
Project location: D:\xome-technologies-v1
Document location in the project: docs/mvp-requirements.md

## 1. What this document is for

This document explains what we will build and how we will know it works.
MVP means the first useful, complete version of the application.
Read this document before planning features. While building, read only the
sections linked from the current GitHub issue.

This is the requirements baseline for the new build. Earlier Xome plans are
reference material, not instructions for this build. No old implementation is
counted as finished. Existing projects can remain as backups.

## 2. Goal

Build a company website and client management application for Xome Technologies.
Visitors can understand our services, view our portfolio, and request a quote.
The owner can manage enquiries, onboard clients, and track their projects.
Clients can sign in to see their own project progress and delivery links.

Main journey:
Visitor requests a quote → owner reviews it → owner onboards the client →
owner creates a project → client follows progress → owner delivers the work.

## 3. Who uses it

| Person | What they can do |
| --- | --- |
| Visitor | Browse public pages and submit a quote enquiry without logging in |
| Admin (Xome owner) | Manage enquiries, client records, projects, progress updates, and delivery links |
| Client | Sign in and view only their own projects, updates, and delivery links |

The first release has one owner/admin and multiple clients. There are no
separate employee accounts. A client can have more than one project.

## 4. Public website

| Page | Address | What it contains |
| --- | --- | --- |
| Home | / | Company introduction, services preview, selected portfolio projects, process, and Request a Quote button |
| Services | /services | Services, typical deliverables, and links to request a quote |
| About | /about | Accurate company information and working approach |
| Portfolio | /portfolio | Approved project images, descriptions, services provided, and live links where available |
| Contact | /contact | Quote enquiry form and verified contact details |
| Privacy | /privacy | Explanation of the information the application collects and how it is handled |

Use the name Portfolio consistently in navigation and documentation.
The header and footer connect the public pages. The website works on mobile
and desktop. The proposed visual direction is blue with rounded, translucent
navigation; detailed styling belongs in the design document.

Services include website development, landing pages, SEO, Google Ads,
Meta/Instagram advertising, digital marketing, branding and creative design,
and ongoing support. Do not promise undefined lifetime support or guaranteed results.

## 5. Portfolio rules

- The homepage shows selected projects; /portfolio shows the full approved collection.
- Each entry has a title, image, short description, and services provided.
- A live link is optional and appears only when a valid link is available.
- Publish client work only with permission to share its content and assets.
- Label practice projects as demos.
- Private client projects never become public portfolio entries automatically.
- Start with portfolio entries maintained in the code. A portfolio editor in
  the admin dashboard is outside this first release.
- If real examples are unavailable, show an honest empty state or labelled demos.

## 6. Quote enquiries

- Collect name, email, selected service, and project requirements.
- Phone and budget are optional.
- Validate the form and show useful errors without clearing entered information.
- Store valid enquiries so the admin can view them in the dashboard.
- Show success only after the enquiry is saved successfully.
- Protect the public form against repeated automated submissions.
- Admin can view details, add private notes, and change enquiry status.
- Suggested statuses: New, Contacted, Converted, Closed.
- Converted means the enquiry has led to an agreed client project.
- The owner discusses scope, price, and agreement outside the application.
  There is no automatic quote calculator or contract signing in this release.

## 7. Client onboarding and accounts

- Admin creates a client record with name, email, and optional business name/phone.
- Admin invites the client by email to activate their account and set a password.
- Activation links expire and can only be used once; admin can resend an invitation.
- Clients do not register themselves through a public registration form.
- Admin and clients can log in, log out, and reset a forgotten password.
- Reset links expire and can only be used once.
- The application never lets a visitor or client choose the admin role.
- Passwords are stored securely, never as readable text.
- Exact invitation expiry, session rules, and admin setup belong in the technical plan.

## 8. Projects and progress

Admin can create a project for an existing client and record:

- Project name and service type.
- Description of the agreed work.
- Optional start date and target completion date.
- Optional agreed amount in INR. This is a reference amount, not payment tracking.
- Project status: Not started, In progress, Waiting for client, Completed, or Cancelled.
- Project milestones: named steps with optional target dates and Pending, In progress,
  or Done status.
- Dated progress updates that the assigned client can read.
- Labelled delivery links, such as the completed website or shared deliverables.

The admin updates these records. The client dashboard is read-only in this release.
There is no file upload, client approval workflow, or chat system initially.
Display milestone status directly; do not invent an automatic progress percentage.
Store completed/cancelled projects as history rather than deleting them in normal use.

## 9. Dashboards and access

| Area | Required behaviour |
| --- | --- |
| Admin overview | Show enquiry and project counts based on actual records |
| Enquiries | List enquiries, open details, update status, and add private notes |
| Clients | List clients, add a client, and manage activation invitations |
| Projects | Create and update projects, milestones, progress updates, and delivery links |
| Client overview | List only projects assigned to the signed-in client |
| Client project detail | Show that client's project scope, dates, status, milestones, updates, and delivery links |

Access is checked on the server. Changing a URL or request must not let a client
read or change another client's information. Hiding a menu item is not sufficient.
Admin-only enquiry notes never appear in the client dashboard.
Never put passwords, hosting credentials, or API keys in project updates or links.

## 10. What is outside the first release

- Online payments, invoices, subscriptions, and automatic pricing.
- Live chat and client comments.
- Employee accounts and staff assignment.
- File uploads and built-in document storage.
- Online contract signing and client approval workflows.
- A blog, content editor, or portfolio editor in the dashboard.
- Automated deployment of client websites. We record delivery links only.
- A mobile application and advanced reporting.

These boundaries keep the first release manageable. Additions require updating
this document and planning their issues before implementation.

## 11. Checks that define a working first release

These are acceptance criteria: observable checks, not claims that work is finished.

| Feature | Check |
| --- | --- |
| Public website | Main pages open, navigation works, and Request a Quote opens Contact |
| Portfolio | Selected entries appear on Home; full entries appear on Portfolio; demos are labelled |
| Enquiry | A valid submission appears in the admin dashboard; invalid input shows errors |
| Onboarding | Admin adds a client; the client activates once through the invitation |
| Account recovery | A valid reset works; expired or reused reset links are rejected |
| Access control | A signed-out visitor cannot access dashboards; client A cannot access client B's records |
| Project creation | Admin creates a project and the assigned client sees it |
| Progress | Admin changes a milestone or adds an update; the client sees the saved change after refreshing |
| Delivery | Client can open their project's valid delivery links |
| Failure handling | Failed saves show an error instead of a false success; entered form data is retained where practical |
| Usability | Essential journeys work on mobile and with keyboard navigation |
| Persistence | Saved records remain after refreshing and restarting the application |
| Launch | The complete enquiry-to-delivery journey works on the deployed application |

## 12. Development milestones

| GitHub milestone | Finished outcome |
| --- | --- |
| M0 — Planning and setup | Consistent documents, GitHub workflow, runnable application, and automated basic checks |
| M1 — Public website | Public pages, portfolio, and enquiry form interface |
| M2 — Accounts and client onboarding | Database foundation, secure accounts, invitations, and protected dashboards |
| M3 — Enquiries and projects | Saved enquiries, admin enquiry management, client records, and project creation |
| M4 — Progress and delivery | Project milestones, updates, delivery links, and complete client views |
| M5 — Testing and launch | Full journey tested, content checked, and application deployed |

M1's form interface is not a working enquiry service until M3 connects it to storage.
GitHub milestones organise us building Xome. Client project milestones organise
work that Xome delivers to its customers. They are separate.

## 13. How this connects to the next work

This file owns scope. The upcoming technical plan will choose the stack, database,
folder structure, and account design. The implementation plan will turn these
requirements into ordered tasks. GitHub issues will hold each task's checklist.

Workflow: choose milestone → create issue → create branch → implement → check →
open pull request → review → merge. The initial repository commit establishes
main before this repeatable workflow begins.

Use GitHub's actual issue numbers. Do not create a second issue-number system.
Work on one implementation issue at a time. The existence of a document or issue
does not mean the feature has been built.

## 14. Decisions still needed

- Exact technologies, database, email service, and hosting.
- Verified business email, contact information, and permitted logo assets.
- Portfolio examples and permission to publish them.
- Invitation expiry and account security settings.
- Support terms and the handling/retention of client information before launch.

Resolve each decision before its dependent implementation. Provider accounts,
paid services, and production deployments are not created by this document.
