import { describe, expect, it } from 'vitest';
import { itemClasses, inventoryTypes, itemSubclassesByClass } from '../data/equippedItems';
import { spellFamilyFlags } from '../data/spellFamilyFlags';
import { spellReferenceGroups } from '../data/spellTemplateReferences';
import { enumBackedSpellAuras, enumBackedSpellEffects } from '../data/spellAuxiliaryEnums';

describe('reference data invariants', () => {
  it('uses the Vanilla equipped-item class and weapon ranges', () => {
    expect(itemClasses).toHaveLength(16);
    expect(itemClasses[15].name).toBe('ITEM_CLASS_MISC');
    expect(itemSubclassesByClass[2]).toHaveLength(21);
    expect(inventoryTypes).toHaveLength(29);
  });

  it('keeps family source comments only on original MISC entries', () => {
    const commented = spellFamilyFlags.filter((row) => row.comment);
    expect(commented.every((row) => row.ability.includes('MISC'))).toBe(true);
  });

  it('keeps Aura/Effect selectors limited to enum-backed entries', () => {
    expect(enumBackedSpellAuras.length).toBeGreaterThan(0);
    expect(enumBackedSpellEffects.length).toBeGreaterThan(0);
    expect(enumBackedSpellAuras.some((row) => row.id === 107)).toBe(true);
    expect(enumBackedSpellEffects.some((row) => row.id === 6)).toBe(true);
    expect(enumBackedSpellAuras.some((row) => row.id === 3)).toBe(false);
    expect(enumBackedSpellEffects.some((row) => row.id === 2)).toBe(false);
  });

  it('has the scalar spell reference groups used by navigation', () => {
    expect(Object.keys(spellReferenceGroups).sort()).toEqual([
      'damage-class', 'dispel-type', 'mechanic', 'power-type', 'prevention-type', 'school', 'spell-family-name',
    ]);
  });
});
