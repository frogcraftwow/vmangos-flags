# Data coverage

## Spell Family Flags

Baseline ability mappings come from the original vMaNGOS `src/game/Spells/SpellClassMask.h`. The supplied `spellclassflags.txt` matches those 303 mappings for families 3–11. Workbook mappings are not used to replace baseline abilities.

Useful helper comments that only clarify additional affected abilities are folded into the baseline description. Helper/custom workbook assignments are never installed as profile overrides. Bits 0–50 are rendered; higher rows are not shown.

## Spell Attributes / Defines

`spelldefines.txt` supplies the canonical enum names used by the UI, including `SPELL_ATTR_EX_DISMISS_PET_FIRST` for `SpellAttributesEx`. The UI does not use `Attr0`, `Attr1`, or `SPELL_ATTR1_*` naming.

Separate pages exist for:

- SpellAttributes
- SpellAttributesEx
- SpellAttributesEx2
- SpellAttributesEx3
- SpellAttributesEx4
- SpellAttributesCustom
- SpellAttributesInternal
- SpellCategories
- SpellCategoryFlags
- SpellSpecific

Bitmask enums use BigInt mask builders/decoders. Value enums provide decimal/hex lookup.

## Other retained data

- Spell Flags: School Mask, Proc Flags, Proc Flags EX, Creature Immunities.
- Shapeshift mask data from `shapeshift-bitmask.xlsx`.
- Skill Lines from `skilllines.txt`, sorted ascending by ID; GM command text omitted.
- Weapons from `weapons.txt`, exposed as a subclass bitmask calculator.

## Removed from the current UI

DBC/IDs, coordinates, CLS, spell effects, aura datasets, unused creatures, and HP compare are intentionally not shipped in this version.
