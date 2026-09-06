# Data coverage

The runtime project contains hardcoded data only; uploaded XLSX/TXT files are not required at runtime.

## Retained

- Original spell-family mappings with stable `familyId:bitIndex` keys.
- Spell family rows stop at zero-based bit 50 in the UI.
- Vanilla spell attributes: `SpellAttributes`, `SpellAttributesEx`, `SpellAttributesEx2`, `SpellAttributesEx3`, `SpellAttributesEx4`.
- Proc Flags and Proc Flags EX.
- School/interrupt/target masks.
- Shapeshift mask data.
- Skill Lines sorted numerically.
- Equipped item class/subclass/inventory requirements.
- Useful scalar `spell_template` enum references.
- Creature immunity mask.
- Selective Spell Aura entries with enum/mask-backed auxiliary fields.
- Selective Spell Effect entries with enum/mask-backed auxiliary fields.
- SpellModOp reference for Aura 107/108.

## Intentionally excluded

- Full Spell Aura browser.
- Full Spell Effect browser.
- DBC/ID dump.
- Coordinates / CLS / HP compare / unused creatures.
- Full aura lists.
- Runtime spreadsheet parsing.
- User-specific Vanilla Reforged mappings.
