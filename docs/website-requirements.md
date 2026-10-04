# Xome Technologies — Pages and User Journeys

Version: 1.0 — fresh start, 4 October 2026
Save as: docs/website-requirements.md
Read alongside: mvp-requirements.md and architecture.md

## 1. What this document does

This document explains what appears on each screen and what a person can do there.
It covers public pages and both dashboards. It does not add features to the MVP.
Use it before building a page. Use design-guidelines.md when styling that page.
The descriptions below are plans, not evidence that pages have been built.

## 2. Three areas of the application

| Area | Who uses it | Purpose |
| --- | --- | --- |
| Public website | Anyone | Understand Xome, view work, and request a quote |
| Admin dashboard | Xome owner | Manage enquiries, clients, and their projects |
| Client dashboard | An invited, signed-in client | View their own projects and delivery links |

Each dashboard has its own navigation. The public website has a header and footer.
All protected pages and the operations behind them enforce access on the server.

## 3. Public navigation

Header: Xome logo, Home, Services, About, Portfolio, Contact, Client Login,
and a primary Request a Quote button. The logo links to /; the quote button links
to /contact. Client Login opens /login, which supports both client and admin login.
On small screens, links move into an accessible menu.

Footer: company introduction, main page links, services, verified contact details,
Privacy, and configured social links. Omit missing contact/social details rather
than publishing placeholders or broken links.

## 4. Public pages

| Page | Route | Content order and actions |
| --- | --- | --- |
| Home | / | Hero → services preview → selected portfolio → working process → reasons to choose Xome → final quote invitation |
| Services | /services | Introduction → service descriptions and typical deliverables → Request a Quote |
| About | /about | Company introduction → who we help → working approach → Request a Quote |
| Portfolio | /portfolio | Introduction → approved project cards → Request a Similar Project |
| Contact | /contact | Introduction → quote form and contact details → submission result |
| Privacy | /privacy | Information collected, purpose, access, retention, service providers, and contact route, matching actual implementation |

Home hero: explain what Xome does and whom it helps. Primary button: Request a Quote.
Secondary button: View Portfolio. Use a strong blue background with readable text.
Do not invent client counts, awards, testimonials, or guaranteed business results.

Services: website development, landing pages, SEO, Google Ads, Meta/Instagram ads,
digital marketing/business profile support, branding/creative design, and maintenance.
Use concise descriptions of the deliverables, not unconfirmed prices or timelines.

## 5. Portfolio details

- Show up to three selected entries on Home, followed by View All Projects.
- /portfolio displays all approved entries in a responsive card grid.
- Each entry includes title, image with useful alternative text, service category,
  short description of the work, and an optional live link.
- Label practice projects Demo project. Do not invent clients or outcomes.
- Publish client work only with permission. Private client projects never publish automatically.
- If there are no approved entries, explain that examples are being prepared and
  offer a quote link. Do not fill the space with fake reviews or broken images.
- Maintain entries in src/content for this release; there is no dashboard portfolio editor.
- Separate portfolio detail pages and filtering are not required for this release.

## 6. Quote form

| Field | Required? |
| --- | --- |
| Name | Yes |
| Email | Yes |
| Service | Yes; select from Xome's services |
| Project requirements | Yes |
| Phone | No |
| Budget | No |

Button: Send Enquiry. Link to Privacy near the form.
States: ready, field errors, sending, saved, and failed.
Keep entered information when submission fails. Prevent repeated clicks while sending.
Show success only after the enquiry is saved: "Your enquiry has been received."
Do not promise a response time before the owner confirms one.
Submission does not create a client account, a project, or a binding quote.

## 7. Account pages

| Page | Route | Behaviour |
| --- | --- | --- |
| Login | /login | Email and password; Forgot password link; no public sign-up link |
| Activate account | /activate | Invitation link lets the invited client set a password; show useful expired/used-link messages |
| Forgot password | /forgot-password | Request reset instructions with a neutral response that does not reveal whether an email has an account |
| Reset password | /reset-password | Set a new password using a valid reset link; handle expired/used links |

After login, send admin to /admin and client to /client. Provide Logout in both dashboards.
Activation must use the invited email, not let the visitor choose another client identity.
Do not expose invitation or reset tokens in page analytics or logs.

## 8. Admin pages

Navigation: Overview, Enquiries, Clients, Projects, and Logout.

| Screen | Route | What the admin can do |
| --- | --- | --- |
| Overview | /admin | See counts from real records and links to recent enquiries/projects |
| Enquiries | /admin/enquiries | Browse enquiries and filter by status |
| Enquiry detail | /admin/enquiries/[id] | Read requirements, edit private notes/status, and link the resulting client/project |
| Clients | /admin/clients | Browse existing clients and open Add Client |
| Add client | /admin/clients/new | Enter client details and create the client record |
| Client detail | /admin/clients/[id] | See account activation state, send/resend invitation, and view the client's projects |
| Projects | /admin/projects | Browse projects and filter by status |
| Add project | /admin/projects/new | Select an existing client and enter the agreed project details |
| Project detail | /admin/projects/[id] | Edit details/status, manage milestones, add updates, and manage delivery links |

[id] means the identifier of the chosen record. It is not a literal URL segment.
Editing happens within detail screens; separate edit pages are not needed initially.
The final API paths and request fields will be specified with the relevant implementation issues.

An enquiry may come from an existing client. Reuse their record rather than creating
duplicate accounts. Mark an enquiry Converted only when linked to its resulting project.
Conversion links records; it does not send an invitation automatically.

Enquiry statuses: New, Contacted, Converted, Closed.
Project statuses: Not started, In progress, Waiting for client, Completed, Cancelled.
Milestone statuses: Pending, In progress, Done.
Keep completed and cancelled project history. Client-facing updates must be clearly
labelled as visible to the client before the admin saves them.

## 9. Client pages

Navigation: Overview, My Projects, and Logout. Use the same account on all visits.

| Screen | Route | What the client sees |
| --- | --- | --- |
| Overview | /client | Welcome message, project summary, and recent updates from their projects |
| My Projects | /client/projects | Only projects assigned to that client |
| Project detail | /client/projects/[id] | Scope, dates, status, milestones, dated updates, and delivery links |

The dashboard is read-only for clients in this release. Do not show edit controls,
chat boxes, upload buttons, payment buttons, or client approval buttons.
Show agreed amounts if recorded, without implying that payment has been received.
Admin-only enquiry notes never appear here. Never show other clients' information.

## 10. Shared behaviour and completion checks

- Every page has a clear title and one obvious main purpose.
- Show loading, empty, error, and success states where relevant.
- Lists use bounded pages rather than loading every record; preserve active filters.
- Label form fields visibly and connect errors to their fields.
- Missing records show a useful message; unauthorised records reveal no private data.
- Unknown public routes show a not-found page with a route home.
- Verify layouts at a narrow mobile width and on desktop, including long client names.
- Verify menus, forms, links, and dashboard actions using only a keyboard.
- All displayed metrics reflect saved data; no decorative fake counts.
- Validate delivery links as safe web URLs and never expose credentials in them.

## 11. When to read which section

M1 public pages: sections 3–6 and 10.
M2 accounts: sections 2, 7, and the client invitation parts of section 8.
M3 enquiries/projects: sections 6 and 8, plus the lists in section 9.
M4 progress/delivery: project detail behaviour in sections 8–9.
M5 testing/launch: verify all complete journeys and section 10.

The implementation plan will assign the issues. The issue always states which
sections to read, which branch to use, and what counts as finished.
