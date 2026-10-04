# Xome Technologies — Design Guidelines

Version: 1.0 — fresh start, 4 October 2026
Save as: docs/design-guidelines.md
Read alongside: website-requirements.md

## 1. Purpose

This document defines how Xome should look. Page content and behaviour belong in
website-requirements.md. This is a design plan, not an implemented theme.
The visual defaults below give us a consistent starting point; update this file
when we deliberately change the design.

Direction: strong blue hero, light content sections, rounded translucent public
navigation, clear typography, and restrained movement. Use original Xome branding.
Dashboards use the same colours with simpler layouts focused on the client's work.

## 2. Colour palette

| Name | Colour | Use |
| --- | --- | --- |
| Brand blue | #1D4ED8 | Primary buttons, links, selected navigation |
| Brand hover | #1E40AF | Primary button hover |
| Hero navy | #0B1F52 | Dark side of the blue hero |
| Soft blue | #EFF6FF | Gentle highlights and selected surfaces |
| Background | #FFFFFF | Main page background |
| Soft surface | #F8FAFC | Alternating sections and dashboard background |
| Main text | #0F172A | Headings and body text on light surfaces |
| Secondary text | #475569 | Supporting text on light surfaces |
| Inverse text | #FFFFFF | Text on dark blue surfaces |
| Inverse secondary | #DBEAFE | Supporting text on the hero |
| Decorative border | #E2E8F0 | Card edges and separators |
| Input border | #64748B | Visible form boundaries |
| Success | #166534 | Saved/completed messages with a light green background |
| Error | #B91C1C | Error messages with a light red background |

Define reusable CSS colour variables during implementation. Do not scatter slightly
different blue values across components. Check contrast on actual rendered surfaces,
especially transparent navigation. Use text labels as well as colour for statuses.

## 3. Typography and spacing

- Use one readable sans-serif family. Start with a system font stack; custom fonts are optional.
- Body text: 16px with about 1.6 line height. Small labels: usually 14px.
- Hero heading: approximately 36px on mobile and 56–64px on wide screens.
- Section headings: approximately 28px on mobile and 36–40px on desktop.
- Use one main heading per page and a logical heading order below it.
- Keep paragraphs around 60–70 characters wide where practical.
- Use a 4px spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96px.
- Public page content: up to 1200px wide with roughly 20px side padding on mobile
  and 32px on desktop. Text-heavy pages use a narrower reading width.
- Section spacing: about 56px vertically on mobile and 88px on desktop; adjust for content.

These are starting values. Readability and avoiding overflow matter more than forcing
every page into the same height.

## 4. Header, hero, and footer

- Place the public header in a rounded container with a small gap from the screen edges.
- Use a subtle border, restrained shadow, and backdrop blur where supported.
- On the dark hero, use readable light links over a dark translucent surface.
- Over light sections, switch to an almost opaque light surface with dark links.
- Provide a solid fallback so transparency never makes the links unreadable.
- Keep the header visible while scrolling and reserve space so it covers no content or focus target.
- Use the approved Xome logo with its proportions intact and an accessible company name.
- Mobile menu: labelled toggle, visible expanded state, keyboard access, close on selection
  or Escape, and return focus to the toggle after Escape.
- Hero: clear heading, short supporting text, Request a Quote and View Portfolio buttons.
- Footer: use a navy surface with readable text and the links defined in website requirements.

## 5. Reusable components

| Component | Rule |
| --- | --- |
| Primary button | Blue background, white text, clear hover and keyboard focus |
| Secondary button | Outline or quiet surface; sufficient contrast on its actual background |
| Form input | Visible label, readable border, error underneath, clear focus ring |
| Card | White or soft background, 12–16px corners, subtle border; shadow only if helpful |
| Status badge | Short readable text plus colour; no colour-only meaning |
| Empty state | Explain what is missing and show a relevant next action |
| Error message | Explain the failed action and how to retry without losing entered information |
| Loading state | Show what is loading; disable only actions that cannot safely be repeated |

Aim for interactive targets at least 44px high. Do not remove keyboard focus indicators.
Use one consistent outline icon set if icons are needed. Icons must support text,
and icon-only controls need accessible names.

## 6. Portfolio presentation

- Home: up to three selected project cards and a View All Projects link.
- Portfolio page: one column on narrow screens, two on medium screens, up to three on wide screens.
- Use a consistent 16:10 image area with useful cropping and no stretched screenshots.
- Show title, service category, short description, and live link when available.
- Place a clear Demo project label on examples that are not client work.
- Keep client names and imagery limited to approved public material.
- Use a small border/shadow change on hover; do not make essential information hover-only.

## 7. Dashboard presentation

- Desktop: simple left navigation and a main content area with a clear page title.
- Mobile: collapsible navigation and a single main column.
- Use light backgrounds, white panels, and the same blue primary actions as the public site.
- Admin overview: concise summary counts, then useful recent records.
- Admin lists: labelled columns, status filters, and clear links to details.
- On mobile, use readable record cards or deliberately scrollable tables with key actions reachable.
- Client project detail: overview → milestones → dated updates → delivery links.
- Show explicit milestone statuses instead of a made-up percentage progress bar.
- Keep private admin notes visually separate from updates labelled Visible to client.
- Avoid decorative charts when a count, list, or status explains the information clearly.

## 8. Motion and accessibility

- Keep small transitions around 150–250ms; avoid continuous dashboard animation.
- If section reveals are added, the content must still be visible if scripting fails.
- Respect reduced-motion preferences.
- Include a skip link, semantic page landmarks, and descriptive link text.
- Meaningful images need useful alternative text; decorative images use empty alternative text.
- Announce form results appropriately to screen readers.
- Verify keyboard navigation, visible focus, text contrast, and text zoom.
- Avoid horizontal page overflow at 360px width; verify desktop layouts too.

## 9. Design completion checks

- Page content matches website-requirements.md.
- Colours, spacing, buttons, and fields use shared styles.
- Header stays readable over every background and never obscures focused controls.
- Mobile menus and forms work by keyboard as well as touch.
- Long content wraps without breaking cards or dashboards.
- Loading, empty, success, and error states are present where needed.
- Portfolio permissions and demo labels are correct.
- Take desktop and mobile screenshots for the relevant pull request.

Read only the sections needed by the current issue. We implement the shared design
foundation once and reuse it across public pages and dashboards.
