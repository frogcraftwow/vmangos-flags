# Spell Dev Toolkit

Static React + TypeScript + Vite toolkit for vMaNGOS spell development. The deployed site uses hardcoded TypeScript data and does not read XLSX/TXT files at runtime.

## Included

- Generic BigInt mask calculator.
- Spell Family Flags with authoritative vMaNGOS `SpellClassMask.h` baseline mappings, direct in-place ability/comment editing backed by local profile overrides, presets, and visible bits 0–50.
- Spell Flags workbench in this order: School Mask, SpellAttributes, SpellAttributesEx, SpellAttributesEx2, SpellAttributesEx3, SpellAttributesEx4, Proc Flags, Proc Flags EX.
- Shapeshift mask calculator.
- Weapon subclass mask calculator.
- Creatures mask page with Creature Immunities.
- Skill Lines sorted by numeric ID.
- Local profiles, import/export, autosave, and saved presets.
- Global search across the included baseline/reference data.

Not included in this version: Spell Defines, DBC/ID explorer, coordinates, CLS calculator, spell effects, aura explorers, unused creatures, or HP compare.

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
