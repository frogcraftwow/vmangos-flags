# vMangos Flag Dev Tookit

vMangos Flag Calculator hosted here: https://frogcraftwow.github.io/vmangos-flags/

Static React + TypeScript + Vite developer toolkit for Vanilla 1.12.1 spell/template work.

Canonical spell enum/flag source: **https://github.com/vmangos/core** (`development` branch), especially `src/game/Spells/SpellDefines.h`, `SpellAuraDefines.h`, `SpellAuras.cpp`, `SpellEffects.cpp`, and `src/game/SharedDefines.h`.

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

## Spell section

- Core fields: Damage Class, Dispel Type, Mechanic, Power Type, Prevention Type, Spell School, plus dropdown lookups for `castingTimeIndex`, `category`, `durationIndex`, `rangeIndex`, and `effectRadiusIndex1/2/3`. Select a value to view and copy its decimal or hex DBC ID.
- Flags & targeting: interrupt flags, proc flags, Spell School Mask, target fields
- Requirements: equipped-item requirements and shapeshift
- Effects & auras: curated references only where an enum/mask/reference is required
- Attributes & family: Spell Attributes and Spell Family Flags

Spell Aura and Spell Effect are intentionally **not** complete browsers. They only show entries where an auxiliary field needs an enum, bitmask, or linked reference.
