# Data coverage

The deployed app does not read the original XLSX/TXT files. The supplied sources were extracted once into `src/data`.

- `spellclassflags.txt`: 303 immutable baseline class-family mappings for family IDs 3–11.
- `spell_class_flags_helper.xlsx`: helper comments attached to matching baseline bits; 5 non-baseline entries kept separately and visibly marked helper-only.
- `spell_attribute_bitmask_builder_native.xlsx`: 160 Attr0–Attr4 rows (32 bits per group).
- `spelldefines.txt`: `SpellAttributes`, `SpellAttributesEx`, `SpellAttributesEx2`, `SpellAttributesEx3`, `SpellAttributesEx4`, `SpellAttributesCustom`, `SpellAttributesInternal`, `SpellCategories`, `SpellCategoryFlags`, and `SpellSpecific`.
- `shapeshift-bitmask.xlsx`: all 32 shapeshift rows, including unnamed/reserved entries.
- `skilllines.txt`: ID/name rows only; GM command text excluded.
- `weapons.txt`: weapon type, subclass, decimal mask and hex mask.
- `dev Flag calculator and IDs.xlsx`:
  - `IDs`: hardcoded searchable reference rows.
  - `DBC stuff`: hardcoded reference rows plus 13 structured DBC mask domains.
  - `SPELLFAMILIES`: supplied vmangos/Vanilla Reforged comparison values kept as reference-only data.
  - `MODIFIER_107_108`: hardcoded reference rows.
  - `SPELLEFFECTS`: 171 populated spell-effect IDs with the supplied effect columns/notes.
  - `SPELLFLAGS`: School Mask, Proc Flags EX, Proc Flags, Creature Immunities.
  - `List of spell auras`: 193 symbolic aura rows with descriptions.
  - `coords`: formulas ported to TypeScript; cached spreadsheet errors are not used.
  - `CLS calculator`: supplied damage/AP lookup tables and formulas ported to TypeScript.
  - `UNUSED_CREATURES`: 1,265 populated creature records.
  - `MASK_CALCULATOR`: replaced with a BigInt 64-bit generic mask builder/decoder.
  - `AURAS_LIST`: 317 misc-value rows plus its 317-row comparison/reference block.
  - `hp compare`: 10,147 comparison rows with All / Matches / Mismatches views.

## Custom data rule

No Vanilla Reforged/personal mapping is installed into the first-run profile. `Default` starts with `overrides.spellFamilyFlags = {}`. Profile JSON contains only user-owned metadata, differences, comments and mask presets; it does not include the baseline dataset.
