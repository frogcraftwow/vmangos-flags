# Spell Dev Toolkit

Static React + TypeScript + Vite developer toolkit for Vanilla 1.12.1 spell/template work.

## Run

```bash
npm install
npm run dev -- --host 0.0.0.0
```

## Build / deploy to GitHub Pages

```bash
npm run build
npm run deploy
```

The app uses `HashRouter`, `BigInt`, `localStorage`, and `gh-pages`. No runtime XLSX/TXT parsing is required.

## Current structure

- Generic Mask
- Creatures
  - Creature Immunities
- Skill Lines
- Spells
  - scalar enum references and mask fields owned by `spell_template`
  - consolidated Spell Attributes (`Attributes` through `AttributesEx4`)
  - consolidated Proc Flags (`ProcFlags` + `ProcFlagsEx`)
  - Equipped Item Requirements
  - Spell Family Flags
  - Target Creature Type
  - selective Spell Aura and Spell Effect references

Spell Aura and Spell Effect intentionally show only entries whose auxiliary fields require an enum or bitmask interpretation. They are reference tools, not complete AuraType/SpellEffect browsers.

Definition names/comments are editable as profile deltas; the immutable original remains visible underneath.
