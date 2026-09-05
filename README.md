# Spell & DBC Toolkit

Static React + TypeScript + Vite developer toolkit generated from the supplied spell/DBC workbooks and text files. The deployed application contains hardcoded extracted data and does **not** parse XLSX/TXT files at runtime.

## Local development

```bash
npm install
npm run dev
```

## Tests / build

```bash
npm test
npm run build
```

## GitHub Pages deployment

The app uses `HashRouter` and Vite `base: './'`, so project-directory GitHub Pages hosting works without route rewrites.

```bash
npm run deploy
```

`gh-pages` publishes the generated `dist` directory. No GitHub Actions, backend, accounts, database, or cloud sync are required.

## Profile data

Baseline/reference data is immutable in `src/data`. User-created mappings, comments and mask presets are stored in browser `localStorage` per profile. A new installation creates one empty `Default` profile with no custom mappings. Downloaded profile JSON contains only user-owned profile metadata, overrides and presets.
