// Vanilla 1.12.x reference data. Aura IDs 107/108 are the flat/percent spell modifier auras.
// MiscValue uses SpellModOp. Values below follow the original Vanilla/vMaNGOS definitions.
export const auraModifierTypes = [
  { id: 107, name: 'SPELL_AURA_ADD_FLAT_MODIFIER' },
  { id: 108, name: 'SPELL_AURA_ADD_PCT_MODIFIER' },
] as const;

export const auraModifierMiscValues = [
  { value: 0, name: 'SPELLMOD_DAMAGE', comment: '' },
  { value: 1, name: 'SPELLMOD_DURATION', comment: '' },
  { value: 2, name: 'SPELLMOD_THREAT', comment: '' },
  { value: 3, name: 'SPELLMOD_ATTACK_POWER', comment: '' },
  { value: 4, name: 'SPELLMOD_CHARGES', comment: '' },
  { value: 5, name: 'SPELLMOD_RANGE', comment: '' },
  { value: 6, name: 'SPELLMOD_RADIUS', comment: '' },
  { value: 7, name: 'SPELLMOD_CRITICAL_CHANCE', comment: '' },
  { value: 8, name: 'SPELLMOD_ALL_EFFECTS', comment: '' },
  { value: 9, name: 'SPELLMOD_NOT_LOSE_CASTING_TIME', comment: '' },
  { value: 10, name: 'SPELLMOD_CASTING_TIME', comment: '' },
  { value: 11, name: 'SPELLMOD_COOLDOWN', comment: '' },
  { value: 12, name: 'SPELLMOD_SPEED', comment: '' },
  { value: 14, name: 'SPELLMOD_COST', comment: '' },
  { value: 15, name: 'SPELLMOD_CRIT_DAMAGE_BONUS', comment: '' },
  { value: 16, name: 'SPELLMOD_RESIST_MISS_CHANCE', comment: '' },
  { value: 17, name: 'SPELLMOD_JUMP_TARGETS', comment: '' },
  { value: 18, name: 'SPELLMOD_CHANCE_OF_SUCCESS', comment: 'Only used with SPELL_AURA_ADD_FLAT_MODIFIER and affects proc spells' },
  { value: 19, name: 'SPELLMOD_ACTIVATION_TIME', comment: '' },
  { value: 20, name: 'SPELLMOD_EFFECT_PAST_FIRST', comment: '' },
  { value: 21, name: 'SPELLMOD_GLOBAL_COOLDOWN', comment: '' },
  { value: 22, name: 'SPELLMOD_DOT', comment: '' },
  { value: 23, name: 'SPELLMOD_HASTE', comment: '' },
  { value: 24, name: 'SPELLMOD_SPELL_BONUS_DAMAGE', comment: '' },
  { value: 27, name: 'SPELLMOD_MULTIPLE_VALUE', comment: '' },
  { value: 28, name: 'SPELLMOD_RESIST_DISPEL_CHANCE', comment: '' },
] as const;
