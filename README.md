# Xome Technologies

A company website and client management application.

## First release

- Public pages and portfolio.
- Quote enquiries and admin enquiry management.
- Invited client accounts.
- Client projects, milestones, progress updates, and delivery links.

## Planned stack

Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, Prisma, and Better Auth.

## Current status

M0 — Planning and setup.

The initial Next.js application is ready.
Automated quality checks are being added.
Public pages and client management features are not implemented yet.

## Documentation

- [Requirements](docs/mvp-requirements.md): what we are building.
- [Architecture](docs/architecture.md): tools and code structure.
- [Pages](docs/website-requirements.md): screens and user journeys.
- [Design](docs/design-guidelines.md): visual rules.
- [Implementation plan](docs/implementation-plan.md): milestone and task order.
- [GitHub guide](docs/github-setup.md): issues, branches, templates, and PRs.

## Development

Use Node.js 24.x and npm 11.6.2.

Install the locked dependencies:

```powershell
npm ci
```

Start the development server:

```powershell
npm run dev
```

Open http://localhost:3000.

Check code with ESLint:

```powershell
npm run lint
```

Create a production build:

```powershell
npm run build
```

Run the production build:

```powershell
npm run start
```

## Quality checks

Run these commands before opening a pull request:

```powershell
npm run lint
npm run typecheck
npm run build
```

- Lint checks code quality.
- Typecheck generates Next.js route types and checks TypeScript.
- Build verifies that the production application builds.

GitHub Actions runs the same checks for pull requests targeting main
and pushes to main. See .github/workflows/ci.yml.

## Setup Version
node version = v24.21.0
npm version = 11.6.2
├── next@16.3.8
├── react-dom@19.2.8
├── react@19.2.8
├── tailwindcss@4.3.3
└── typescript@5.9.3