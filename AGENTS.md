# Tobias Agossou — Digital Systems Studio

Web platform for Tobias Agossou's digital systems design, web architecture, and automation consulting practice.

## Agent skills

### Issue tracker
Tracked locally as markdown files under `docs/tickets/`. See `docs/agents/issue-tracker.md`.

### Triage labels
Canonical five-role triage labels (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs
Single-context repository. Core domain vocabulary defined in `GLOSSARY.md`. Architectural decisions recorded in `docs/adr/`. See `docs/agents/domain.md`.

## Engineering Principles
- **Deep Modules**: Modules provide significant capability behind a lean, intuitive interface (`codebase-design`).
- **TDD / Red-Green-Refactor**: Write failing tests before implementation where business logic or data pipelines apply (`tdd`).
- **No Slop**: Strict adherence to the warm editorial design system in `Tobias Agossou - Site.dc.html` (zero generic AI placeholders, high typographic contrast, subtle micro-motion).
