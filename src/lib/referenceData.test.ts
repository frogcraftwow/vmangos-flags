import { describe, expect, it } from 'vitest';
import { itemClasses, inventoryTypes, itemSubclassesByClass } from '../data/equippedItems';
import { spellFamilyFlags } from '../data/spellFamilyFlags';
import { powerTypes, resourcePowerTypes, spellReferenceGroups } from '../data/spellTemplateReferences';
import { auraTypeRows, spellEffectRows } from '../data/coreSpellEnums';
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
    expect(enumBackedSpellEffects.some((row) => row.id === 132)).toBe(true);
    expect(enumBackedSpellEffects.some((row) => row.id === 65)).toBe(false);
    expect(enumBackedSpellEffects.some((row) => row.id === 60)).toBe(false);
    expect(enumBackedSpellAuras.some((row) => row.id === 3)).toBe(false);
    expect(enumBackedSpellEffects.some((row) => row.id === 2)).toBe(false);
  });

  it('uses the current VMaNGOS AuraType and SpellEffects enum ranges for cross-references', () => {
    expect(auraTypeRows).toHaveLength(193);
    expect(auraTypeRows[192].name).toBe('SPELL_AURA_AURA_SPELL');
    expect(spellEffectRows).toHaveLength(134);
    expect(spellEffectRows[65].name).toBe('SPELL_EFFECT_HEALTH_FUNNEL');
    expect(spellEffectRows[132].name).toBe('SPELL_EFFECT_APPLY_AREA_AURA_RAID');
  });

  it('does not expose the internal POWER_HEALTH sentinel as a spell resource selector', () => {
    expect(powerTypes.map((row) => row.value)).toEqual([0, 1, 2, 3, 4]);
    expect(resourcePowerTypes.map((row) => row.value)).toEqual([0, 1, 2, 3, 4]);
  });

  it('has the scalar spell reference groups used by navigation', () => {
    expect(Object.keys(spellReferenceGroups).sort()).toEqual([
      'damage-class', 'dispel-type', 'mechanic', 'power-type', 'prevention-type', 'spell-school',
    ]);
  });
});
