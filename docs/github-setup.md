# Xome Technologies — GitHub Setup and Daily Workflow

Version: 1.0 — fresh start, 4 October 2026
Save as: docs/github-setup.md
Local project: D:\xome-technologies-v1

## 1. One workflow for this project

Milestone → issue → branch → work → checks → pull request → review → merge.

main contains reviewed work. Each task has a short-lived branch.
The first documentation commit creates main before issues and pull requests can begin.
No old Xome or Valoura branch instructions apply to this new repository.

This guide does not create anything remotely. Follow the current guided step rather
than running every command in the document at once.

## 2. Prepare the initial files

The docs folder should contain exactly these six planning files:

- mvp-requirements.md
- architecture.md
- website-requirements.md
- design-guidelines.md
- implementation-plan.md
- github-setup.md

In the project root, create README.md with:

```markdown
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

Planning and repository setup. Application implementation has not started.

## Documentation

- [Requirements](docs/mvp-requirements.md): what we are building.
- [Architecture](docs/architecture.md): tools and code structure.
- [Pages](docs/website-requirements.md): screens and user journeys.
- [Design](docs/design-guidelines.md): visual rules.
- [Implementation plan](docs/implementation-plan.md): milestone and task order.
- [GitHub guide](docs/github-setup.md): issues, branches, templates, and PRs.

## Development

Installation and run instructions will be added when the application is created.
```

Create .gitignore in the project root with:

```gitignore
node_modules/
.next/
out/
dist/
coverage/
playwright-report/
test-results/
.vercel/
.env
.env.*
!.env.example
*.log
*.tsbuildinfo
.DS_Store
Thumbs.db
```

README is the project introduction. .gitignore keeps local secrets, dependencies,
and generated output out of normal Git staging. It does not remove files already
tracked by Git. Commit package-lock.json when the application is scaffolded.

## 3. Initialise Git and make the first commit

Use PowerShell in the fresh folder:

```powershell
Set-Location D:\xome-technologies-v1
git init -b main
git status
```

This is for the confirmed fresh project only. If Git reports reinitialising an existing
repository, stop and inspect it before proceeding; do not reset or overwrite history.
Confirm main is the current branch and the root contains the intended files.

If Git asks for an identity when committing, configure your real name and a verified
or GitHub-provided no-reply email locally for this repository:

```powershell
git config user.name "Rohit Singh"
git config user.email "REPLACE_WITH_YOUR_VERIFIED_OR_NOREPLY_EMAIL"
```

Replace the email before running that command. Never use the placeholder literally.
Then stage only the initial files:

```powershell
git add README.md .gitignore docs/mvp-requirements.md docs/architecture.md docs/website-requirements.md docs/design-guidelines.md docs/implementation-plan.md docs/github-setup.md
git diff --cached --stat
git diff --cached
git commit -m "docs: establish Xome project baseline"
git status
```

Review staged contents before committing. Press q if Git opens a pager.
Expected result: the commit succeeds on main and the working tree is clean.
No application is expected yet. There are no npm checks to run on this docs-only commit.

## 4. Create and connect the new GitHub repository

Once the local commit is confirmed:

1. Create a new repository named xome-technologies-v1 under your chosen GitHub account.
2. Choose visibility deliberately. Public is suitable for a portfolio repository when
   its code and documentation are intended for public sharing; private is also supported.
3. Keep GitHub's README, .gitignore, and licence initialisation options empty, since
   the local repository already has its first commit. Choose a licence separately later.
4. Copy the exact HTTPS repository URL from GitHub.
5. Inspect existing remotes with git remote -v. A new local repository should have none.

Run the following only after replacing the URL:

```powershell
git remote add origin https://github.com/YOUR_ACCOUNT/xome-technologies-v1.git
git remote -v
git push -u origin main
```

Verify the account and repository in the output before pushing. Authenticate through
the normal Git credential flow; never put an access token into the remote URL.
If the name is taken or origin already exists, resolve that explicitly. Do not reuse
an old repository or force-push to make the command succeed.

## 5. Create milestones, labels, and the board

Create these repository milestones, copying names from implementation-plan.md:

- M0 — Planning and setup
- M1 — Public website
- M2 — Accounts and client onboarding
- M3 — Enquiries and projects
- M4 — Progress and delivery
- M5 — Testing and launch

Start without invented deadlines. Milestones group related issues.
Use these simple labels: setup, docs, feature, bug, blocked. Reuse an existing bug
label if present. Role labels and a second priority system are unnecessary initially.

Create a GitHub Project named Xome Technologies and a board with Status values:
Backlog, Ready, In progress, In review, Done. Link the project to the repository and
add current milestone issues. The issue's Milestone field and the board's Status field
have different jobs: the first identifies the goal, the second shows current progress.

The GitHub interface may vary by account; use the guided screen instructions when
performing setup. This board configuration is our project convention [1].

## 6. Create the first issue without a template

Templates do not exist yet. Create a blank issue with this title:

Set up GitHub templates and workflow

Paste this body:

```markdown
## Goal
Make each future task and pull request easy to understand and review.

## Read first
- docs/github-setup.md, sections 5–11.
- docs/implementation-plan.md, sections 5 and 11–13.

## Depends on
Initial documentation is committed and pushed to main.

## Work
- [ ] Add the task issue template.
- [ ] Add the bug issue template.
- [ ] Add the pull request template.
- [ ] Keep the blank issue option available.
- [ ] Verify M0–M5 milestones and the project board.
- [ ] Configure available main-branch rules without blocking solo review.

## Completion checks
- [ ] Template files are reviewed and merged into main.
- [ ] New issue chooser shows Task and Bug report.
- [ ] A subsequent PR uses the PR template.
- [ ] The issue belongs to M0 and the board shows its correct status.

CI is added in a later M0 issue. Required checks will be configured after it runs.
```

Assign the issue to yourself, set milestone M0, add label setup, and add it to the board.
Record its actual number. Do not assume it is #1: GitHub assigns the numbers.
The post-merge template checks must be verified before marking this setup issue Done.

## 7. Branch names

| Work | Prefix | Example only |
| --- | --- | --- |
| Documentation | docs/ | docs/4-clarify-requirements |
| Setup | chore/ | chore/1-github-setup |
| Automated checks | ci/ | ci/5-quality-checks |
| New feature | feat/ | feat/12-site-header |
| Bug fix | fix/ | fix/18-mobile-menu |

The number must be the actual issue number. PR numbers are different and do not
replace issue numbers. No permanent frontend, backend, or person-named branches.

For the first issue, use chore/ACTUAL_NUMBER-github-setup. Replace ACTUAL_NUMBER
before running commands. We will give the exact branch after you share the issue number.

## 8. Template contents — create on the setup branch

Templates are reusable forms. They do not create issues or complete tasks themselves.
The issue forms belong in .github/ISSUE_TEMPLATE; the PR template belongs in .github [2][3].
Create these files during the first issue, not in the initial documentation commit.

### .github/ISSUE_TEMPLATE/task.yml

```yaml
name: Task
description: Plan one piece of project work
body:
  - type: textarea
    id: goal
    attributes:
      label: Goal
      description: What should work when this task is finished, and why?
    validations:
      required: true
  - type: textarea
    id: read_first
    attributes:
      label: Read first
      description: Document filenames and sections needed for this task.
    validations:
      required: true
  - type: textarea
    id: dependencies
    attributes:
      label: Depends on
      description: Link prerequisite issues, or write None.
    validations:
      required: true
  - type: textarea
    id: work
    attributes:
      label: Work checklist
      description: List the changes using Markdown checkboxes.
      placeholder: "- [ ] Implement the required behaviour"
    validations:
      required: true
  - type: textarea
    id: checks
    attributes:
      label: Completion checks
      description: How will we prove the task works?
      placeholder: "- [ ] Verify the expected result"
    validations:
      required: true
```

Set milestone, assignee, label, and project using the issue fields. They are not
automatically inferred from the text. One Task form handles setup, docs, and features.

### .github/ISSUE_TEMPLATE/bug.yml

```yaml
name: Bug report
description: Report behaviour that does not match the requirements
body:
  - type: textarea
    id: problem
    attributes:
      label: Problem
      description: What went wrong, and who is affected?
    validations:
      required: true
  - type: textarea
    id: steps
    attributes:
      label: Steps to reproduce
      description: Write the steps another person can follow.
    validations:
      required: true
  - type: textarea
    id: expected_actual
    attributes:
      label: Expected and actual result
      description: Explain both results and link the relevant requirement.
    validations:
      required: true
  - type: textarea
    id: environment
    attributes:
      label: Environment and evidence
      description: Browser, screen size, commit or page, and screenshots when helpful. Remove private information.
    validations:
      required: true
```

### .github/ISSUE_TEMPLATE/config.yml

```yaml
blank_issues_enabled: true
```

### .github/pull_request_template.md

```markdown
## Why

Describe the problem or requirement and why this change is needed.

## Changes

- Describe the main behaviour or implementation changes.

## Related issue

Closes #REPLACE_WITH_ACTUAL_ISSUE_NUMBER

<!-- Use "Related to #..." instead if this PR does not complete the issue. -->

## Verification

List checks actually run and their results. Mark checks not run as such with a reason.

| Check | Result / evidence |
| --- | --- |
| Lint | |
| Type checking | |
| Build | |
| Relevant tests | |
| Manual behaviour / layout checks | |

## Screenshots

For visible UI changes, include useful desktop/mobile screenshots. Otherwise write N/A.

## Risks and follow-up

Mention known limitations, configuration changes, deployment steps, or remaining work. Write None if appropriate. Never paste secret values.

## Review checklist

- [ ] The diff matches the linked issue's scope.
- [ ] The relevant acceptance criteria are met, or remaining work is explicitly linked.
- [ ] Checks above report actual results rather than assumed passes.
- [ ] Documentation and safe configuration examples reflect relevant changes.
- [ ] No credentials, personal enquiry contents, or unintended files are included.
- [ ] UI accessibility and responsive behaviour were checked where applicable; otherwise marked N/A above.

```

For the setup PR, paste the PR template manually if it is not offered yet. Templates
must reach the default branch before their normal use is verified. Mark its checks
honestly: automated application checks do not exist at this point.

## 9. Main branch rules and solo review

Where your GitHub plan and repository visibility support enforcement:

- Require a pull request before merging to main.
- Block force pushes and deletion of main.
- Leave required external approvals at zero while working alone.
- Add required CI checks after the quality-check workflow has run successfully.

Authors cannot approve their own PRs as an independent reviewer. Write a self-review
and inspect checks instead. With a real collaborator, a separate approval can be required [5].
If your account cannot enforce a rule, document that limit and follow the same process
manually; do not change repository visibility just to enable a setting.

## 10. Daily routine for every later issue

Start only with a clean working tree. If git status shows unfinished work, resolve
or preserve it deliberately before switching branches.

```powershell
git status
git switch main
git pull --ff-only origin main
git switch -c TYPE/NUMBER-short-description
```

Replace the whole branch placeholder with the exact branch for the issue.
Move the issue to In progress. Read its linked sections, then implement its checklist.

Once application scripts exist, run:

```powershell
npm run lint
npm run typecheck
npm run build
```

Run relevant behaviour tests once they are introduced. These scripts do not exist
before scaffolding/quality setup. A documentation-only change needs a focused content
review, not pretend build results.

Review git diff, stage the actual changed paths with git add, inspect git diff --cached,
then commit. Do not copy example paths that do not match your work.
Use messages such as feat: add portfolio page, fix: correct mobile menu focus, or
docs: clarify client onboarding. Push the exact branch with git push -u origin BRANCH_NAME.

Open a PR with base main and compare set to your task branch. Fill the template and
link the issue. Closes #12 closes issue 12 when a completing PR merges into the default
branch; use Related to #12 for partial work or remaining post-merge checks [4].
Move the issue to In review. Inspect the diff and actual check results before merging.
Our merge convention is Squash and merge, which puts one combined task commit on main [6].

After merge:

```powershell
git switch main
git pull --ff-only origin main
git status
```

Verify the merged behaviour, close the issue if still open and fully complete, and
move it to Done. The board may need manual updating.
Delete the merged remote branch through the PR page. For the local branch, first try
git branch -d BRANCH_NAME. Squash merges can make that command refuse deletion.
Only after checking that the PR is merged, the intended changes are on main, and no
additional local work would be lost, use git branch -D BRANCH_NAME if needed.
Never use forced deletion as a way to hide unfinished work.

## 11. What follows the setup issue

Create the remaining M0 issues from implementation-plan.md:

- Create the Next.js application and folder structure.
- Add automated quality checks.

Put them in M0 and on the board. Link dependencies using their actual issue numbers.
Only the next unblocked issue becomes Ready. Once M0 is finished, create M1's issues.
We will build the public website in M1 and introduce the database and accounts in M2.

## Official references

1. GitHub flow: https://docs.github.com/en/get-started/using-github/github-flow
2. Issue form syntax: https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms
3. Issue and PR templates: https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates
4. Linking PRs and issues: https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue
5. Protected branches: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches
6. PR merge methods: https://docs.github.com/en/pull-requests/reference/pull-request-merges
