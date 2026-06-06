# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

The app lives inside `my-app/` — all commands below should be run from that directory.

## Commands

```bash
# Install dependencies
npm install

# Start dev server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint
npm run lint
```

No test runner is configured in this project.

## Architecture

This is a minimal React 19 + Vite app (JavaScript, not TypeScript).

- **Entry point:** `src/main.jsx` — mounts `<App />` into `#root` via `createRoot`
- **Root component:** `src/App.jsx` — composes child components and renders the UI
- **Components:** `src/Hello.jsx` and `src/Bye.jsx` are simple functional components imported by `App`
- **Styling:** `src/App.css` is imported inside `Hello.jsx`; `src/index.css` exists but is currently commented out in `main.jsx`

The Vite config uses `@vitejs/plugin-react` (Oxc-based transform). ESLint is configured for `.js`/`.jsx` files with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`.

The React Compiler is **not** enabled. TypeScript is **not** used — stick to `.jsx`/`.js` files.
