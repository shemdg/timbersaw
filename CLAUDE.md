# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Timbersaw is an Angular 22 application for a Dota 2 hero guide site (the "Timbersaw" hero). It's a standalone-components SSR app (Express server) styled with Tailwind CSS v4.

## Commands

- `npm start` — dev server at `http://localhost:4200/`.
- `npm run build` — production browser + SSR build into `dist/`.
- `npm run watch` — continuous rebuild using the development configuration.
- `npm test` — run the unit-test suite (Angular's `@angular/build:unit-test` builder, backed by Vitest).
- `npm run serve:ssr:timbersaw` — serve a previously built SSR bundle from `dist/timbersaw/server/server.mjs`.

Run `npm install` after changing dependency files. Both `npm test` and `npm run build` should pass before submitting substantial changes.

There is no separate lint script configured.

## Architecture

- **Routing**: `src/app/app.routes.ts` defines top-level routes (`home`, `builds`, `lore`, `more`, `abilities`), each mapped to a standalone component under `src/app/pages/<name>/`. `src/app/app.ts` is the root component — it renders `<app-navbar>` + `<router-outlet>` via `src/app/app.html`.
- **Pages** (`src/app/pages/<name>/`): each is a standalone Angular component (`<name>.ts`, `.html`, `.css`, `.spec.ts`). Follow this pattern for new routes: standalone component, own template/stylesheet, colocated spec.
- **Shared components** (`src/app/shared/`): currently just `navbar/`, imported directly by `app.ts`.
- **SSR**: `src/main.ts` is the browser bootstrap entry, `src/main.server.ts` + `src/app/app.config.server.ts` the server bootstrap, `src/server.ts` the Express server (serves the `dist/.../browser` output and handles Angular SSR rendering via `AngularNodeAppEngine`). `app.config.ts` wires `provideRouter` + `provideClientHydration` for hydration support. Avoid browser-only APIs in components/services unless guarded, since they also render on the server.
- **Route-level SSR config**: `src/app/app.routes.server.ts` controls per-route rendering mode (SSR/prerender) — update it when adding routes with special rendering needs.
- **Styling**: Tailwind v4 via `@tailwindcss/postcss` (`.postcssrc.json`), imported globally in `src/styles.css` alongside global resets and shared rules (buttons, `.banner`, `.content`, etc.). Component-specific CSS stays in the component's own stylesheet; only truly global rules belong in `src/styles.css`.
- **Assets**: static images/media live in `public/assets/` and are referenced with absolute paths like `/assets/images/logo.png` (the `public/` directory is copied wholesale into the build via `angular.json`'s `assets` glob).

## Coding conventions

- Two-space indentation, standard Angular/TypeScript formatting.
- Components are standalone (`standalone: true`) with explicit `imports: []`.
- Filenames: kebab-case (`home.html`, `navbar.ts`). Classes/interfaces: PascalCase (`Home`, `Ability`). Properties/methods: camelCase.
- Prefer typed data structures and Angular template bindings over duplicated markup.
- Tests are colocated as `<name>.spec.ts`, using Angular's `TestBed`/`ComponentFixture` pattern (see `src/app/pages/home/home.spec.ts` for the baseline shape). Don't rely on external network assets in tests.

## Commits & PRs

Recent history uses short, imperative commit summaries with `feat:`/`fix:` prefixes (e.g. `feat: add interactive abilities showcase component`). Keep each commit focused. PRs should explain the user-visible change, note relevant routes/assets, include test/build results, and attach screenshots for visual changes.
