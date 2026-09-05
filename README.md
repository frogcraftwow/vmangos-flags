# Spell Dev Toolkit

Static React + TypeScript + Vite toolkit for vMaNGOS spell development. Source XLSX/TXT files are extracted at build time only; the deployed site uses hardcoded TypeScript data.

## Included

- Spell Family Flags with authoritative vMaNGOS `SpellClassMask.h` baseline mappings, editable local profile overrides, presets, and a continuous BigInt mask through visible bit 50.
- SpellAttributes, SpellAttributesEx, SpellAttributesEx2, SpellAttributesEx3, and SpellAttributesEx4 as separate mask calculators using the enum names from `spelldefines.txt`.
- Separate calculators/pages for SpellAttributesCustom, SpellAttributesInternal, SpellCategories, SpellCategoryFlags, and SpellSpecific.
- Spell Flags calculators, with Proc Flags before Proc Flags EX.
- Shapeshift mask calculator.
- Weapon subclass mask calculator.
- Generic BigInt mask calculator.
- Skill Lines sorted by numeric ID.
- Local profiles, import/export, autosave, and saved presets.
- Global search across the included baseline/reference data.

Not included in this version: DBC/ID explorer, coordinates, CLS calculator, spell effects, aura explorers, unused creatures, or HP compare.

## Run

```bash
npm install
npm run dev -- --host 0.0.0.0
```

## Test / build

```bash
npm test
npm run build
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

The app uses `HashRouter` and Vite `base: './'` for GitHub Pages project-directory hosting.
