# Data coverage

## Spell Family Flags

Baseline ability mappings come from the original vMaNGOS `src/game/Spells/SpellClassMask.h`. Workbook/helper mappings and custom notes are not used to replace or expand baseline abilities.

Only comments attached to original `MISC` class-flag entries are retained in the built-in data. Ability and comment cells are edited directly in the table; edits are stored as profile differences while the built-in baseline remains immutable. Bits 0–50 are rendered; higher rows are not shown.

## Spell Flags

The Spell Flags workbench contains, in order:

- School Mask
- SpellAttributes
- SpellAttributesEx
- SpellAttributesEx2
- SpellAttributesEx3
- SpellAttributesEx4
- Proc Flags
- Proc Flags EX

`spelldefines.txt` supplies the canonical attribute enum names used by these calculators, including `SPELL_ATTR_EX_DISMISS_PET_FIRST`. The UI does not use `Attr0`, `Attr1`, or `SPELL_ATTR1_*` naming.

The separate Spell Defines section has been removed.

## Other retained data

- Generic BigInt mask calculator directly below Overview in navigation.
- Shapeshift mask data from `shapeshift-bitmask.xlsx`.
- Weapons from `weapons.txt`, exposed as a subclass bitmask calculator.
- Creatures page with Creature Immunities as a mask calculator, directly below Weapons.
- Skill Lines from `skilllines.txt`, sorted ascending by ID; GM command text omitted.

## Removed from the current UI

Spell Defines, DBC/IDs, coordinates, CLS, spell effects, aura datasets, unused creatures, and HP compare are intentionally not shipped in this version.
