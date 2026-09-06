export type ReferenceRow = {
  key?: string;
  value: number;
  name: string;
  comment?: string;
};

export const schoolValues: readonly ReferenceRow[] = [
  { value: 0, name: 'SPELL_SCHOOL_NORMAL', comment: 'Physical, Armor' },
  { value: 1, name: 'SPELL_SCHOOL_HOLY' },
  { value: 2, name: 'SPELL_SCHOOL_FIRE' },
  { value: 3, name: 'SPELL_SCHOOL_NATURE' },
  { value: 4, name: 'SPELL_SCHOOL_FROST' },
  { value: 5, name: 'SPELL_SCHOOL_SHADOW' },
  { value: 6, name: 'SPELL_SCHOOL_ARCANE' },
] as const;

export const powerTypes: readonly ReferenceRow[] = [
  { value: -2, name: 'POWER_HEALTH' },
  { value: 0, name: 'POWER_MANA', comment: 'UNIT_FIELD_POWER1' },
  { value: 1, name: 'POWER_RAGE', comment: 'UNIT_FIELD_POWER2' },
  { value: 2, name: 'POWER_FOCUS', comment: 'UNIT_FIELD_POWER3' },
  { value: 3, name: 'POWER_ENERGY', comment: 'UNIT_FIELD_POWER4' },
  { value: 4, name: 'POWER_HAPPINESS', comment: 'UNIT_FIELD_POWER5' },
] as const;

export const mechanics: readonly ReferenceRow[] = [
  { value: 0, name: 'MECHANIC_NONE' },
  { value: 1, name: 'MECHANIC_CHARM' },
  { value: 2, name: 'MECHANIC_DISORIENTED' },
  { value: 3, name: 'MECHANIC_DISARM' },
  { value: 4, name: 'MECHANIC_DISTRACT' },
  { value: 5, name: 'MECHANIC_FEAR' },
  { value: 6, name: 'MECHANIC_FUMBLE' },
  { value: 7, name: 'MECHANIC_ROOT' },
  { value: 8, name: 'MECHANIC_PACIFY', comment: '0 spells use this mechanic' },
  { value: 9, name: 'MECHANIC_SILENCE' },
  { value: 10, name: 'MECHANIC_SLEEP' },
  { value: 11, name: 'MECHANIC_SNARE' },
  { value: 12, name: 'MECHANIC_STUN' },
  { value: 13, name: 'MECHANIC_FREEZE' },
  { value: 14, name: 'MECHANIC_KNOCKOUT' },
  { value: 15, name: 'MECHANIC_BLEED' },
  { value: 16, name: 'MECHANIC_BANDAGE' },
  { value: 17, name: 'MECHANIC_POLYMORPH' },
  { value: 18, name: 'MECHANIC_BANISH' },
  { value: 19, name: 'MECHANIC_SHIELD' },
  { value: 20, name: 'MECHANIC_SHACKLE' },
  { value: 21, name: 'MECHANIC_MOUNT' },
  { value: 22, name: 'MECHANIC_PERSUADE', comment: '0 spells use this mechanic' },
  { value: 23, name: 'MECHANIC_TURN' },
  { value: 24, name: 'MECHANIC_HORROR' },
  { value: 25, name: 'MECHANIC_INVULNERABILITY' },
  { value: 26, name: 'MECHANIC_INTERRUPT' },
  { value: 27, name: 'MECHANIC_DAZE' },
  { value: 28, name: 'MECHANIC_DISCOVERY' },
  { value: 29, name: 'MECHANIC_IMMUNE_SHIELD', comment: 'Divine (Blessing) Shield/Protection and Ice Block' },
  { value: 30, name: 'MECHANIC_SAPPED' },
] as const;

export const dispelTypes: readonly ReferenceRow[] = [
  { value: 0, name: 'DISPEL_NONE' },
  { value: 1, name: 'DISPEL_MAGIC' },
  { value: 2, name: 'DISPEL_CURSE' },
  { value: 3, name: 'DISPEL_DISEASE' },
  { value: 4, name: 'DISPEL_POISON' },
  { value: 5, name: 'DISPEL_STEALTH' },
  { value: 6, name: 'DISPEL_INVISIBILITY' },
  { value: 7, name: 'DISPEL_ALL' },
  { value: 8, name: 'DISPEL_SPE_NPC_ONLY' },
  { value: 9, name: 'DISPEL_ENRAGE' },
  { value: 10, name: 'DISPEL_ZG_TICKET' },
] as const;

export const damageClasses: readonly ReferenceRow[] = [
  { value: 0, name: 'SPELL_DAMAGE_CLASS_NONE' },
  { value: 1, name: 'SPELL_DAMAGE_CLASS_MAGIC' },
  { value: 2, name: 'SPELL_DAMAGE_CLASS_MELEE' },
  { value: 3, name: 'SPELL_DAMAGE_CLASS_RANGED' },
] as const;

export const preventionTypes: readonly ReferenceRow[] = [
  { value: 0, name: 'SPELL_PREVENTION_TYPE_NONE' },
  { value: 1, name: 'SPELL_PREVENTION_TYPE_SILENCE' },
  { value: 2, name: 'SPELL_PREVENTION_TYPE_PACIFY' },
] as const;

export const spellFamilyNames: readonly ReferenceRow[] = [
  { value: 0, name: 'SPELLFAMILY_GENERIC' },
  { value: 1, name: 'SPELLFAMILY_UNK1', comment: 'events, holidays' },
  { value: 3, name: 'SPELLFAMILY_MAGE' },
  { value: 4, name: 'SPELLFAMILY_WARRIOR' },
  { value: 5, name: 'SPELLFAMILY_WARLOCK' },
  { value: 6, name: 'SPELLFAMILY_PRIEST' },
  { value: 7, name: 'SPELLFAMILY_DRUID' },
  { value: 8, name: 'SPELLFAMILY_ROGUE' },
  { value: 9, name: 'SPELLFAMILY_HUNTER' },
  { value: 10, name: 'SPELLFAMILY_PALADIN' },
  { value: 11, name: 'SPELLFAMILY_SHAMAN' },
  { value: 12, name: 'SPELLFAMILY_UNK2' },
  { value: 13, name: 'SPELLFAMILY_POTION' },
] as const;

export const auraStates: readonly ReferenceRow[] = [
  { value: 1, name: 'AURA_STATE_DEFENSE', comment: 'C' },
  { value: 2, name: 'AURA_STATE_HEALTHLESS_20_PERCENT', comment: 'C T' },
  { value: 3, name: 'AURA_STATE_BERSERKING', comment: 'C' },
  { value: 4, name: 'AURA_STATE_FROZEN', comment: 'frozen target (but not used for any spells in 1.12.1 at client side)' },
  { value: 5, name: 'AURA_STATE_JUDGEMENT', comment: 'C' },
  { key: '7:hunter-parry', value: 7, name: 'AURA_STATE_HUNTER_PARRY', comment: 'C' },
  { key: '7:rogue-stealth', value: 7, name: 'AURA_STATE_ROGUE_ATTACK_FROM_STEALTH', comment: 'C | FIX ME: not implemented yet!' },
] as const;

export const spellReferenceGroups = {
  'damage-class': { title: 'Damage Class', rows: damageClasses, scope: 'spells:damage-class' },
  'dispel-type': { title: 'Dispel Type', rows: dispelTypes, scope: 'spells:dispel-type' },
  mechanic: { title: 'Mechanic', rows: mechanics, scope: 'spells:mechanic' },
  'power-type': { title: 'Power Type', rows: powerTypes, scope: 'spells:power-type' },
  'prevention-type': { title: 'Prevention Type', rows: preventionTypes, scope: 'spells:prevention-type' },
  school: { title: 'School', rows: schoolValues, scope: 'spells:school' },
  'spell-family-name': { title: 'Spell Family Name', rows: spellFamilyNames, scope: 'spells:spell-family-name' },
} as const;
