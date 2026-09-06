# VMaNGOS correction pass

Source of truth: `https://github.com/vmangos/core` (`development` branch).

Primary source files checked:

- `src/game/Spells/SpellDefines.h`
- `src/game/Spells/SpellAuraDefines.h`
- `src/game/Spells/SpellAuras.cpp`
- `src/game/Spells/SpellEffects.cpp`
- `src/game/SharedDefines.h`

## UI / organization

- Uses a simple Segoe UI / Arial / Helvetica font stack.
- Spell tools are grouped into Core fields, Flags & targeting, Requirements, Effects & auras, and Attributes & family.
- Removed Aura State and Spell Family Name from the application navigation/search.
- Removed the combined spell-flag switcher; each interrupt/school/target flag link opens its own configured page.
- Scalar enum references are reference/search tables only; there is no synthetic value-lookup input.
- Equipped item subclass and inventory masks are side-by-side on normal desktop widths; the standalone EquippedItemClass reference panel was removed.
- Spell Attribute and Proc workbenches wrap into readable grids instead of running off the right side.
- Spell Family headings use `Class — SpellFamilyFlag N`.

## Spell Aura / Spell Effect

- The main Aura and Effect selectors contain only cases where an auxiliary field needs an enum, mask, SkillLine, CreatureType, shapeshift, or another concrete reference.
- Full current VMaNGOS `AuraType` (0..192) and `SpellEffects` (0..133) are used only when another field needs those enums as a reference.
- `SPELL_EFFECT_HEALTH_FUNNEL` is correctly effect 65; it is not mislabeled as raid area aura.
- `SPELL_EFFECT_APPLY_AREA_AURA_RAID` is correctly effect 132.
- `SPELL_EFFECT_PROFICIENCY` is not treated as an EffectMiscValue enum: VMaNGOS reads the equipped-item requirement fields for it.
- Resource selectors used by energize/drain/burn and relevant auras expose only power values 0..4; the internal `POWER_HEALTH = -2` sentinel is not shown as a spell resource option.
- Mechanic mask bits use `mechanic - 1`, matching VMaNGOS.

## Flags / attributes

- Aura/Channel Interrupt flags, Interrupt flags, Proc flags, ProcFlagsEx, school mask labels, and SpellAttributesEx4 were aligned to current VMaNGOS definitions.
- Removed non-VMaNGOS SpellAttributesEx4 bits and corrected bit 0 to `SPELL_ATTR_EX4_IGNORE_RESISTANCES`.

## 2026-09-06 — Spell Aura / Spell Effect runtime fix

- Fixed both curated Spell Aura and Spell Effect reference pages crashing at runtime by importing `Link` from `react-router-dom` in `SpellEnumReferencePage.tsx`.
- Added route aliases for `/spells/spell-auras` and `/spells/spell-effects` while keeping the existing singular routes for compatibility.
- Verified all 67 TS/TSX files transpile successfully with TypeScript and verified all four aura/effect routes are present.
