# Repository Guidelines

## Project Structure & Module Organization

This repository is an Angular 22 application for a Timbersaw game guide. Application code lives under `src/app/`, with page components in `pages/`, the shared navigation component in `shared/navbar/`, and the abilities showcase in `abilities/`. Route definitions are in `src/app/app.routes.ts`; application and SSR bootstrap files are in `src/`. Component templates and styles are kept beside their TypeScript files. Static images and other public assets belong in `public/assets/` and are referenced with paths such as `/assets/images/logo.png`. Tests are colocated with the code they cover using `.spec.ts` files.

## Build, Test, and Development Commands

- `npm start` — run the development server at `http://localhost:4200/`.
- `npm run build` — create the production browser and SSR build in `dist/`.
- `npm run watch` — rebuild continuously using the development configuration.
- `npm test` — run the Angular/Vitest unit-test suite.
- `npm run serve:ssr:timbersaw` — serve a previously built SSR output.

Run `npm install` after changing dependency files. Confirm both `npm test` and `npm run build` before submitting substantial changes.

## Coding Style & Naming Conventions

Use two-space indentation and standard Angular/TypeScript formatting. Keep components focused and standalone where practical. Name files in kebab-case (`home.html`, `navbar.ts`), classes and interfaces in PascalCase (`Home`, `Ability`), and properties and methods in camelCase. Prefer typed data structures, descriptive names, and Angular template bindings over duplicated markup. Keep component-specific CSS in its adjacent stylesheet; place truly global rules in `src/styles.css`.

## Testing Guidelines

Tests use Vitest through Angular’s unit-test builder. Keep tests beside the implementation as `<name>.spec.ts`; add coverage for new routes, interactive behavior, and data transformations. Use `npm test` locally and avoid relying on external network assets in tests.

## Commit & Pull Request Guidelines

Recent history uses short, imperative summaries, commonly with prefixes such as `feat:` and `fix:` (for example, `feat: add interactive abilities showcase component`). Follow that style and keep each commit focused. Pull requests should explain the user-visible change, note relevant routes or assets, include test/build results, link the related issue when applicable, and attach screenshots or recordings for visual changes.

## Security & Configuration Tips

Do not commit secrets, tokens, or generated `dist/` output. Review new external asset URLs carefully; prefer checked-in assets under `public/assets/` when practical. Preserve SSR compatibility by avoiding browser-only APIs during server rendering unless guarded appropriately.
