import type { ReferenceRow } from './spellTemplateReferences';
import type { MaskFlag } from '../components/MaskTool';

export const stats: readonly ReferenceRow[] = [
  { value: -1, name: 'STAT_ALL', comment: 'All stats where supported by the aura.' },
  { value: 0, name: 'STAT_STRENGTH' },
  { value: 1, name: 'STAT_AGILITY' },
  { value: 2, name: 'STAT_STAMINA' },
  { value: 3, name: 'STAT_INTELLECT' },
  { value: 4, name: 'STAT_SPIRIT' },
] as const;

export type AuxReferenceKey =
  | 'aura-state'
  | 'creature-type-mask'
  | 'dispel-type'
  | 'equipped-item'
  | 'mechanic'
  | 'mechanic-mask'
  | 'power-type'
  | 'school-mask'
  | 'shapeshift'
  | 'spell-aura'
  | 'spell-effect'
  | 'spellmod-op'
  | 'stat';

export type EnumBackedEntry = {
  id: number;
  name: string;
  field: 'EffectMiscValue' | 'EffectApplyAuraName';
  reference: AuxReferenceKey;
  explanation: string;
};

// Only AuraTypes whose auxiliary value has a meaningful enum/bitmask interpretation.
// This is intentionally not a complete AuraType browser.
export const enumBackedSpellAuras: readonly EnumBackedEntry[] = [
  { id: 10, name: 'SPELL_AURA_MOD_THREAT', field: 'EffectMiscValue', reference: 'school-mask', explanation: 'MiscValue is a SpellSchoolMask selecting the schools whose threat is modified.' },
  { id: 13, name: 'SPELL_AURA_MOD_DAMAGE_DONE', field: 'EffectMiscValue', reference: 'school-mask', explanation: 'MiscValue is a SpellSchoolMask selecting affected damage schools.' },
  { id: 22, name: 'SPELL_AURA_MOD_RESISTANCE', field: 'EffectMiscValue', reference: 'school-mask', explanation: 'MiscValue is a SpellSchoolMask selecting affected resistances.' },
  { id: 24, name: 'SPELL_AURA_PERIODIC_ENERGIZE', field: 'EffectMiscValue', reference: 'power-type', explanation: 'MiscValue selects the power type restored periodically.' },
  { id: 29, name: 'SPELL_AURA_MOD_STAT', field: 'EffectMiscValue', reference: 'stat', explanation: 'MiscValue selects the stat modified; -1 is used for all stats where supported.' },
  { id: 35, name: 'SPELL_AURA_MOD_INCREASE_ENERGY', field: 'EffectMiscValue', reference: 'power-type', explanation: 'MiscValue selects the power pool increased.' },
  { id: 36, name: 'SPELL_AURA_MOD_SHAPESHIFT', field: 'EffectMiscValue', reference: 'shapeshift', explanation: 'MiscValue selects the shapeshift form.' },
  { id: 37, name: 'SPELL_AURA_EFFECT_IMMUNITY', field: 'EffectMiscValue', reference: 'spell-effect', explanation: 'MiscValue is a SpellEffect ID made immune.' },
  { id: 38, name: 'SPELL_AURA_STATE_IMMUNITY', field: 'EffectMiscValue', reference: 'spell-aura', explanation: 'MiscValue is an AuraType ID made immune.' },
  { id: 39, name: 'SPELL_AURA_SCHOOL_IMMUNITY', field: 'EffectMiscValue', reference: 'school-mask', explanation: 'MiscValue is a SpellSchoolMask made immune.' },
  { id: 40, name: 'SPELL_AURA_DAMAGE_IMMUNITY', field: 'EffectMiscValue', reference: 'school-mask', explanation: 'MiscValue is a SpellSchoolMask for damage immunity.' },
  { id: 41, name: 'SPELL_AURA_DISPEL_IMMUNITY', field: 'EffectMiscValue', reference: 'dispel-type', explanation: 'MiscValue selects the DispelType made immune.' },
  { id: 59, name: 'SPELL_AURA_MOD_DAMAGE_DONE_CREATURE', field: 'EffectMiscValue', reference: 'creature-type-mask', explanation: 'MiscValue is a creature-type mask selecting affected creature types.' },
  { id: 64, name: 'SPELL_AURA_PERIODIC_MANA_LEECH', field: 'EffectMiscValue', reference: 'power-type', explanation: 'MiscValue selects the power type drained.' },
  { id: 69, name: 'SPELL_AURA_SCHOOL_ABSORB', field: 'EffectMiscValue', reference: 'school-mask', explanation: 'MiscValue is a SpellSchoolMask selecting absorbed schools.' },
  { id: 71, name: 'SPELL_AURA_MOD_SPELL_CRIT_CHANCE_SCHOOL', field: 'EffectMiscValue', reference: 'school-mask', explanation: 'MiscValue is a SpellSchoolMask selecting affected spell schools.' },
  { id: 72, name: 'SPELL_AURA_MOD_POWER_COST_SCHOOL_PCT', field: 'EffectMiscValue', reference: 'school-mask', explanation: 'MiscValue is a SpellSchoolMask selecting affected spell schools.' },
  { id: 73, name: 'SPELL_AURA_MOD_POWER_COST_SCHOOL', field: 'EffectMiscValue', reference: 'school-mask', explanation: 'MiscValue is a SpellSchoolMask selecting affected spell schools.' },
  { id: 74, name: 'SPELL_AURA_REFLECT_SPELLS_SCHOOL', field: 'EffectMiscValue', reference: 'school-mask', explanation: 'MiscValue is a SpellSchoolMask selecting reflected schools.' },
  { id: 77, name: 'SPELL_AURA_MECHANIC_IMMUNITY', field: 'EffectMiscValue', reference: 'mechanic', explanation: 'MiscValue selects one Mechanic made immune.' },
  { id: 79, name: 'SPELL_AURA_MOD_DAMAGE_PERCENT_DONE', field: 'EffectMiscValue', reference: 'school-mask', explanation: 'MiscValue is a SpellSchoolMask selecting affected damage schools.' },
  { id: 80, name: 'SPELL_AURA_MOD_PERCENT_STAT', field: 'EffectMiscValue', reference: 'stat', explanation: 'MiscValue selects the stat modified.' },
  { id: 83, name: 'SPELL_AURA_MOD_BASE_RESISTANCE', field: 'EffectMiscValue', reference: 'school-mask', explanation: 'MiscValue is a SpellSchoolMask selecting affected resistances.' },
  { id: 85, name: 'SPELL_AURA_MOD_POWER_REGEN', field: 'EffectMiscValue', reference: 'power-type', explanation: 'MiscValue selects the regenerated power type.' },
  { id: 87, name: 'SPELL_AURA_MOD_DAMAGE_PERCENT_TAKEN', field: 'EffectMiscValue', reference: 'school-mask', explanation: 'MiscValue is a SpellSchoolMask selecting affected damage schools.' },
  { id: 101, name: 'SPELL_AURA_MOD_RESISTANCE_PCT', field: 'EffectMiscValue', reference: 'school-mask', explanation: 'MiscValue is a SpellSchoolMask selecting affected resistances.' },
  { id: 102, name: 'SPELL_AURA_MOD_MELEE_ATTACK_POWER_VERSUS', field: 'EffectMiscValue', reference: 'creature-type-mask', explanation: 'MiscValue is a creature-type mask.' },
  { id: 107, name: 'SPELL_AURA_ADD_FLAT_MODIFIER', field: 'EffectMiscValue', reference: 'spellmod-op', explanation: 'MiscValue selects one SpellModOp; the aura applies a flat modifier.' },
  { id: 108, name: 'SPELL_AURA_ADD_PCT_MODIFIER', field: 'EffectMiscValue', reference: 'spellmod-op', explanation: 'MiscValue selects one SpellModOp; the aura applies a percent modifier.' },
  { id: 117, name: 'SPELL_AURA_MOD_MECHANIC_RESISTANCE', field: 'EffectMiscValue', reference: 'mechanic', explanation: 'MiscValue selects one Mechanic.' },
  { id: 123, name: 'SPELL_AURA_MOD_TARGET_RESISTANCE', field: 'EffectMiscValue', reference: 'school-mask', explanation: 'MiscValue is a SpellSchoolMask selecting target resistances.' },
  { id: 131, name: 'SPELL_AURA_MOD_RANGED_ATTACK_POWER_VERSUS', field: 'EffectMiscValue', reference: 'creature-type-mask', explanation: 'MiscValue is a creature-type mask.' },
  { id: 132, name: 'SPELL_AURA_MOD_INCREASE_ENERGY_PERCENT', field: 'EffectMiscValue', reference: 'power-type', explanation: 'MiscValue selects the power pool increased.' },
  { id: 137, name: 'SPELL_AURA_MOD_TOTAL_STAT_PERCENTAGE', field: 'EffectMiscValue', reference: 'stat', explanation: 'MiscValue selects the stat modified.' },
  { id: 142, name: 'SPELL_AURA_MOD_BASE_RESISTANCE_PCT', field: 'EffectMiscValue', reference: 'school-mask', explanation: 'MiscValue is a SpellSchoolMask selecting affected resistances.' },
  { id: 143, name: 'SPELL_AURA_MOD_RESISTANCE_EXCLUSIVE', field: 'EffectMiscValue', reference: 'school-mask', explanation: 'MiscValue is a SpellSchoolMask selecting affected resistances.' },
  { id: 147, name: 'SPELL_AURA_MECHANIC_IMMUNITY_MASK', field: 'EffectMiscValue', reference: 'mechanic-mask', explanation: 'MiscValue is a bitmask of Mechanics made immune.' },
  { id: 168, name: 'SPELL_AURA_MOD_DAMAGE_DONE_VERSUS', field: 'EffectMiscValue', reference: 'creature-type-mask', explanation: 'MiscValue is a creature-type mask.' },
  { id: 169, name: 'SPELL_AURA_MOD_CRIT_PERCENT_VERSUS', field: 'EffectMiscValue', reference: 'creature-type-mask', explanation: 'MiscValue is a creature-type mask.' },
  { id: 180, name: 'SPELL_AURA_MOD_FLAT_SPELL_DAMAGE_VERSUS', field: 'EffectMiscValue', reference: 'creature-type-mask', explanation: 'MiscValue is a creature-type mask.' },
  { id: 181, name: 'SPELL_AURA_MOD_FLAT_SPELL_CRIT_DAMAGE_VERSUS', field: 'EffectMiscValue', reference: 'creature-type-mask', explanation: 'MiscValue is a creature-type mask.' },
  { id: 182, name: 'SPELL_AURA_MOD_RESISTANCE_OF_STAT_PERCENT', field: 'EffectMiscValue', reference: 'stat', explanation: 'MiscValue selects the stat used for the resistance scaling.' },
] as const;

// Only SpellEffects whose auxiliary fields reference another enum/bitmask.
// IDs are Vanilla-era SpellEffects; this is intentionally not a complete SpellEffect browser.
export const enumBackedSpellEffects: readonly EnumBackedEntry[] = [
  { id: 6, name: 'SPELL_EFFECT_APPLY_AURA', field: 'EffectApplyAuraName', reference: 'spell-aura', explanation: 'EffectApplyAuraName is an AuraType. Use Spell Aura to choose and interpret enum-backed auras.' },
  { id: 8, name: 'SPELL_EFFECT_POWER_DRAIN', field: 'EffectMiscValue', reference: 'power-type', explanation: 'MiscValue selects the power type drained.' },
  { id: 27, name: 'SPELL_EFFECT_PERSISTENT_AREA_AURA', field: 'EffectApplyAuraName', reference: 'spell-aura', explanation: 'EffectApplyAuraName is an AuraType applied by the persistent area aura.' },
  { id: 30, name: 'SPELL_EFFECT_ENERGIZE', field: 'EffectMiscValue', reference: 'power-type', explanation: 'MiscValue selects the power type restored.' },
  { id: 35, name: 'SPELL_EFFECT_APPLY_AREA_AURA_PARTY', field: 'EffectApplyAuraName', reference: 'spell-aura', explanation: 'EffectApplyAuraName is an AuraType applied to party targets.' },
  { id: 38, name: 'SPELL_EFFECT_DISPEL', field: 'EffectMiscValue', reference: 'dispel-type', explanation: 'MiscValue selects the DispelType removed.' },
  { id: 60, name: 'SPELL_EFFECT_PROFICIENCY', field: 'EffectMiscValue', reference: 'equipped-item', explanation: 'MiscValue uses the item-class enum; the equipped-item reference contains the Vanilla item-class names.' },
  { id: 62, name: 'SPELL_EFFECT_POWER_BURN', field: 'EffectMiscValue', reference: 'power-type', explanation: 'MiscValue selects the power type burned.' },
  { id: 65, name: 'SPELL_EFFECT_APPLY_AREA_AURA_RAID', field: 'EffectApplyAuraName', reference: 'spell-aura', explanation: 'EffectApplyAuraName is an AuraType applied to raid targets.' },
  { id: 108, name: 'SPELL_EFFECT_DISPEL_MECHANIC', field: 'EffectMiscValue', reference: 'mechanic', explanation: 'MiscValue selects the Mechanic to dispel.' },
  { id: 119, name: 'SPELL_EFFECT_APPLY_AREA_AURA_PET', field: 'EffectApplyAuraName', reference: 'spell-aura', explanation: 'EffectApplyAuraName is an AuraType applied to pet targets.' },
] as const;

export function mechanicsAsMask(rows: readonly ReferenceRow[]): readonly MaskFlag[] {
  return rows.filter((row) => row.value > 0).map((row) => ({
    name: row.name,
    bitIndex: row.value,
    comment: row.comment ?? '',
  }));
}
