export type SpellFamilyFlag = {
  familyId: number;
  className: string;
  bitIndex: number;
  ability: string;
  comment: string;
};

// Immutable baseline from the original vMaNGOS ClassFlag definitions.
// Comments are intentionally retained only for original MISC entries.
export const spellFamilyFlags: readonly SpellFamilyFlag[] = [
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 0,
    "ability": "CF_MAGE_FIREBALL",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 1,
    "ability": "CF_MAGE_FIRE_BLAST",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 2,
    "ability": "CF_MAGE_FLAMESTRIKE",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 3,
    "ability": "CF_MAGE_FIRE_WARD",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 4,
    "ability": "CF_MAGE_SCORCH",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 5,
    "ability": "CF_MAGE_FROSTBOLT",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 6,
    "ability": "CF_MAGE_FROST_NOVA",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 7,
    "ability": "CF_MAGE_BLIZZARD",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 8,
    "ability": "CF_MAGE_FROST_WARD",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 9,
    "ability": "CF_MAGE_CONE_OF_COLD",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 10,
    "ability": "CF_MAGE_ARCANE_INT",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 11,
    "ability": "CF_MAGE_ARCANE_MISSILES_CHANNEL",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 12,
    "ability": "CF_MAGE_ARCANE_EXPLOSION",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 13,
    "ability": "CF_MAGE_D_A_MAGIC",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 14,
    "ability": "CF_MAGE_COUNTERSPELL",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 15,
    "ability": "CF_MAGE_MANA_SHIELD",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 16,
    "ability": "CF_MAGE_BLINK",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 17,
    "ability": "CF_MAGE_BLAST_WAVE1",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 18,
    "ability": "CF_MAGE_UNK18",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 19,
    "ability": "CF_MAGE_MISC_FROST",
    "comment": "Frost spells"
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 20,
    "ability": "CF_MAGE_CHILLED",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 21,
    "ability": "CF_MAGE_ARCANE_MISSILES",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 22,
    "ability": "CF_MAGE_PYROBLAST",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 23,
    "ability": "CF_MAGE_BLAST_WAVE2",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 24,
    "ability": "CF_MAGE_POLYMORPH",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 25,
    "ability": "CF_MAGE_ELEMENTAL_ARMOR",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 26,
    "ability": "CF_MAGE_EVOCATION",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 27,
    "ability": "CF_MAGE_IGNITE",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 28,
    "ability": "CF_MAGE_MAGE_ARMOR",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 29,
    "ability": "CF_MAGE_UNK29",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 30,
    "ability": "CF_MAGE_CONJURE",
    "comment": ""
  },
  {
    "familyId": 3,
    "className": "Mage",
    "bitIndex": 31,
    "ability": "CF_MAGE_PORTALS",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 0,
    "ability": "CF_WARRIOR_CHARGE",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 1,
    "ability": "CF_WARRIOR_HAMSTRING",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 2,
    "ability": "CF_WARRIOR_OVERPOWER",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 3,
    "ability": "CF_WARRIOR_PUMMEL",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 4,
    "ability": "CF_WARRIOR_RECKLESSNESS",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 5,
    "ability": "CF_WARRIOR_REND",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 6,
    "ability": "CF_WARRIOR_HEROIC_STRIKE",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 7,
    "ability": "CF_WARRIOR_THUNDER_CLAP",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 8,
    "ability": "CF_WARRIOR_BLOODRAGE",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 9,
    "ability": "CF_WARRIOR_DISARM",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 10,
    "ability": "CF_WARRIOR_REVENGE",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 11,
    "ability": "CF_WARRIOR_SHIELD_BASH",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 12,
    "ability": "CF_WARRIOR_SHIELD_BLOCK",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 13,
    "ability": "CF_WARRIOR_SHIELD_WALL",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 14,
    "ability": "CF_WARRIOR_SUNDER_ARMOR",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 15,
    "ability": "CF_WARRIOR_TAUNT",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 16,
    "ability": "CF_WARRIOR_BATTLE_SHOUT",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 17,
    "ability": "CF_WARRIOR_DEMORALIZING_SHOUT",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 18,
    "ability": "CF_WARRIOR_INTIMIDATING_SHOUT",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 19,
    "ability": "CF_WARRIOR_CHALLENGING_SHOUT",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 20,
    "ability": "CF_WARRIOR_INNER_RAGE",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 21,
    "ability": "CF_WARRIOR_SLAM",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 22,
    "ability": "CF_WARRIOR_CLEAVE",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 23,
    "ability": "CF_WARRIOR_STANCES",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 24,
    "ability": "CF_WARRIOR_CHARGE_STUN",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 25,
    "ability": "CF_WARRIOR_MORTAL_STRIKE",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 26,
    "ability": "CF_WARRIOR_CONCUSSION_BLOW",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 27,
    "ability": "CF_WARRIOR_MOCKING_BLOW",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 28,
    "ability": "CF_WARRIOR_BERSERKER_RAGE",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 29,
    "ability": "CF_WARRIOR_EXECUTE",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 30,
    "ability": "CF_WARRIOR_INTERCEPT",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 31,
    "ability": "CF_WARRIOR_RETALIATION",
    "comment": ""
  },
  {
    "familyId": 4,
    "className": "Warrior",
    "bitIndex": 32,
    "ability": "CF_WARRIOR_SHIELD_SLAM",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 0,
    "ability": "CF_WARLOCK_SHADOW_BOLT",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 1,
    "ability": "CF_WARLOCK_CORRUPTION",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 2,
    "ability": "CF_WARLOCK_IMMOLATE",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 3,
    "ability": "CF_WARLOCK_DRAIN_LIFE",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 4,
    "ability": "CF_WARLOCK_DRAIN_MANA",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 5,
    "ability": "CF_WARLOCK_RAIN_OF_FIRE",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 6,
    "ability": "CF_WARLOCK_HELLFIRE",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 7,
    "ability": "CF_WARLOCK_SHADOWBURN",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 8,
    "ability": "CF_WARLOCK_SEARING_PAIN",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 9,
    "ability": "CF_WARLOCK_CONFLAGRATE",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 10,
    "ability": "CF_WARLOCK_CURSE_OF_AGONY",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 11,
    "ability": "CF_WARLOCK_ENSLAVE_DEMON",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 12,
    "ability": "CF_WARLOCK_IMP_FIREBOLT",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 13,
    "ability": "CF_WARLOCK_SUCCUBUS_LASH_OF_PAIN",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 14,
    "ability": "CF_WARLOCK_DRAIN_SOUL",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 15,
    "ability": "CF_WARLOCK_CURSE_OF_WEAKNESS",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 16,
    "ability": "CF_WARLOCK_HEALTHSTONE",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 17,
    "ability": "CF_WARLOCK_SPELLSTONE",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 18,
    "ability": "CF_WARLOCK_LIFE_TAP",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 19,
    "ability": "CF_WARLOCK_DEATH_COIL",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 20,
    "ability": "CF_WARLOCK_CREATE_STONES",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 21,
    "ability": "CF_WARLOCK_FIRESTONE_ATTACK",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 22,
    "ability": "CF_WARLOCK_CURSE_OF_EXHAUSTION",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 23,
    "ability": "CF_WARLOCK_IMP_BUFFS",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 24,
    "ability": "CF_WARLOCK_HEALTH_FUNNEL",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 25,
    "ability": "CF_WARLOCK_VOIDWALKER_SPELLS",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 26,
    "ability": "CF_WARLOCK_TAMED_PET_PASSIVE_DAMAGE",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 27,
    "ability": "CF_WARLOCK_TAMED_PET_PASSIVE_HEALTH",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 28,
    "ability": "CF_WARLOCK_TAMED_PET_PASSIVE_ENERGY",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 29,
    "ability": "CF_WARLOCK_SUMMON_SPELLS",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 30,
    "ability": "CF_WARLOCK_SUCCUBUS_SPELLS",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 31,
    "ability": "CF_WARLOCK_MISC_DEBUFFS",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 32,
    "ability": "CF_WARLOCK_SIPHON_LIFE",
    "comment": ""
  },
  {
    "familyId": 5,
    "className": "Warlock",
    "bitIndex": 33,
    "ability": "CF_WARLOCK_CURSE_OF_DOOM",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 0,
    "ability": "CF_PRIEST_POWER_WORD_SHIELD",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 1,
    "ability": "CF_PRIEST_INNER_FIRE",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 2,
    "ability": "CF_PRIEST_VAMPIRIC_EMBRACE",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 3,
    "ability": "CF_PRIEST_POWER_WORD_FORTITUDE",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 4,
    "ability": "CF_PRIEST_MANA_BURN",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 5,
    "ability": "CF_PRIEST_TEST_NPC_RESURRECTION",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 6,
    "ability": "CF_PRIEST_RENEW",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 7,
    "ability": "CF_PRIEST_SMITE",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 8,
    "ability": "CF_PRIEST_SHADOW_PROTECTION",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 9,
    "ability": "CF_PRIEST_PRAYER_OF_HEALING",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 10,
    "ability": "CF_PRIEST_HEAL",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 11,
    "ability": "CF_PRIEST_FLASH_HEAL",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 12,
    "ability": "CF_PRIEST_GREATER_HEAL",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 13,
    "ability": "CF_PRIEST_MIND_BLAST",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 14,
    "ability": "CF_PRIEST_FADE",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 15,
    "ability": "CF_PRIEST_SHADOW_WORD_PAIN",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 16,
    "ability": "CF_PRIEST_PSYCHIC_SCREAM",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 17,
    "ability": "CF_PRIEST_MIND_CONTROL",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 18,
    "ability": "CF_PRIEST_LESSER_HEAL",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 19,
    "ability": "CF_PRIEST_TOUCH_OF_WEAKNESS",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 20,
    "ability": "CF_PRIEST_HOLY_FIRE",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 21,
    "ability": "CF_PRIEST_STARSHARDS",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 22,
    "ability": "CF_PRIEST_HOLY_NOVA1",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 23,
    "ability": "CF_PRIEST_MIND_FLAY",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 24,
    "ability": "CF_PRIEST_DESPERATE_PRAYER",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 25,
    "ability": "CF_PRIEST_DEVOURING_PLAGUE",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 26,
    "ability": "CF_PRIEST_MIND_VISION",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 27,
    "ability": "CF_PRIEST_HOLY_NOVA2",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 28,
    "ability": "CF_PRIEST_FLASH_HEAL2",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 29,
    "ability": "CF_PRIEST_WEAKENED_SOUL",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 30,
    "ability": "CF_PRIEST_MISC1",
    "comment": "Ressurection, Shackle Undead, Lightwell"
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 31,
    "ability": "CF_PRIEST_MISC2",
    "comment": ""
  },
  {
    "familyId": 6,
    "className": "Priest",
    "bitIndex": 32,
    "ability": "CF_PRIEST_DISPELLS",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 0,
    "ability": "CF_DRUID_WRATH",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 1,
    "ability": "CF_DRUID_MOONFIRE",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 2,
    "ability": "CF_DRUID_STARFIRE",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 3,
    "ability": "CF_DRUID_DEMORALIZING_ROAR",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 4,
    "ability": "CF_DRUID_REJUVENATION",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 5,
    "ability": "CF_DRUID_HEALING_TOUCH",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 6,
    "ability": "CF_DRUID_REGROWTH",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 7,
    "ability": "CF_DRUID_TRANQUILITY",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 8,
    "ability": "CF_DRUID_THORNS",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 9,
    "ability": "CF_DRUID_ENTANGLING_ROOTS",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 10,
    "ability": "CF_DRUID_FAERIE_FIRE",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 11,
    "ability": "CF_DRUID_MAUL_SWIPE",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 12,
    "ability": "CF_DRUID_RAKE_CLAW",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 13,
    "ability": "CF_DRUID_BASH",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 14,
    "ability": "CF_DRUID_PROWL",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 15,
    "ability": "CF_DRUID_SHRED",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 16,
    "ability": "CF_DRUID_RAVAGE",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 17,
    "ability": "CF_DRUID_POUNCE",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 18,
    "ability": "CF_DRUID_MARK_OF_THE_WILD",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 19,
    "ability": "CF_DRUID_ENRAGE",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 20,
    "ability": "CF_DRUID_NATURES_GRASP",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 21,
    "ability": "CF_DRUID_INSECT_SWARM",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 22,
    "ability": "CF_DRUID_HURRICANE",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 23,
    "ability": "CF_DRUID_RIP_BITE",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 24,
    "ability": "CF_DRUID_SOOTHE_HIBERNATE",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 25,
    "ability": "CF_DRUID_TREE_FORM",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 26,
    "ability": "CF_DRUID_SHAPESHIFT_FORM_EFFECT",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 27,
    "ability": "CF_DRUID_CAT_FORM_PASSIVE",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 28,
    "ability": "CF_DRUID_REBIRTH",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 29,
    "ability": "CF_DRUID_MISC_FORMS",
    "comment": "Aquatic Form, Travel Form, Moonkin Form, Faerie Dragon Form"
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 30,
    "ability": "CF_DRUID_BEAR_FORM",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 31,
    "ability": "CF_DRUID_CAT_FORM",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 32,
    "ability": "CF_DRUID_FERAL_CHARGE",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 33,
    "ability": "CF_DRUID_SWIFTMEND",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 34,
    "ability": "CF_DRUID_DISPELLS",
    "comment": ""
  },
  {
    "familyId": 7,
    "className": "Druid",
    "bitIndex": 35,
    "ability": "CF_DRUID_GROWL",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 0,
    "ability": "CF_ROGUE_THROW",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 1,
    "ability": "CF_ROGUE_SINISTER_STRIKE",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 2,
    "ability": "CF_ROGUE_BACKSTAB",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 3,
    "ability": "CF_ROGUE_GOUGE",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 4,
    "ability": "CF_ROGUE_KICK",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 5,
    "ability": "CF_ROGUE_EVASION",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 6,
    "ability": "CF_ROGUE_SPRINT",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 7,
    "ability": "CF_ROGUE_SAP",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 8,
    "ability": "CF_ROGUE_GARROTE",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 9,
    "ability": "CF_ROGUE_AMBUSH",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 10,
    "ability": "CF_ROGUE_CHEAP_SHOT",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 11,
    "ability": "CF_ROGUE_VANISH",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 12,
    "ability": "CF_ROGUE_DISTRACT",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 13,
    "ability": "CF_ROGUE_INSTANT_POISON",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 14,
    "ability": "CF_ROGUE_CRIPPLING_POISON",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 15,
    "ability": "CF_ROGUE_MIND_NUMBING_POISON",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 16,
    "ability": "CF_ROGUE_DEADLY_POISON",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 17,
    "ability": "CF_ROGUE_EVISCERATE",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 18,
    "ability": "CF_ROGUE_SLICE_AND_DICE",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 19,
    "ability": "CF_ROGUE_EXPOSE_ARMOR",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 20,
    "ability": "CF_ROGUE_RUPTURE",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 21,
    "ability": "CF_ROGUE_KIDNEY_SHOT",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 22,
    "ability": "CF_ROGUE_STEALTH",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 23,
    "ability": "CF_ROGUE_MISC_COMBO_MOVES",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 24,
    "ability": "CF_ROGUE_BLIND",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 25,
    "ability": "CF_ROGUE_HEMORRHAGE",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 26,
    "ability": "CF_ROGUE_GHOSTLY_STRIKE",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 27,
    "ability": "CF_ROGUE_FEINT",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 28,
    "ability": "CF_ROGUE_WOUND_POISON",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 29,
    "ability": "CF_ROGUE_UNK29",
    "comment": ""
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 30,
    "ability": "CF_ROGUE_MISC1",
    "comment": "Blade Furry, Cold Blood, Ghostly Strike, Premeditation, Revealed Flaw"
  },
  {
    "familyId": 8,
    "className": "Rogue",
    "bitIndex": 31,
    "ability": "CF_ROGUE_MISC2",
    "comment": "Riposte, Pick Pocket, Disarm Trap, Blind"
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 0,
    "ability": "CF_HUNTER_SHOOT",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 1,
    "ability": "CF_HUNTER_MONGOOSE_RAPTOR",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 2,
    "ability": "CF_HUNTER_FIRE_TRAP_EFFECTS",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 3,
    "ability": "CF_HUNTER_FREEZING_TRAP_EFFECT",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 4,
    "ability": "CF_HUNTER_FROST_TRAP_AURA",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 5,
    "ability": "CF_HUNTER_RAPID_FIRE",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 6,
    "ability": "CF_HUNTER_WING_CLIP",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 7,
    "ability": "CF_HUNTER_TRAPS",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 8,
    "ability": "CF_HUNTER_FEIGN_DEATH",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 9,
    "ability": "CF_HUNTER_CONCUSSIVE_SHOT",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 10,
    "ability": "CF_HUNTER_HUNTERS_MARK",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 11,
    "ability": "CF_HUNTER_ARCANE_SHOT",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 12,
    "ability": "CF_HUNTER_MULTI_SHOT",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 13,
    "ability": "CF_HUNTER_VOLLEY",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 14,
    "ability": "CF_HUNTER_SERPENT_STING",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 15,
    "ability": "CF_HUNTER_SCORPID_STING",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 16,
    "ability": "CF_HUNTER_MISC",
    "comment": "Viper Sting, Wyvern Sting, Distracting Shot"
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 17,
    "ability": "CF_HUNTER_AIMED_SHOT",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 18,
    "ability": "CF_HUNTER_SCATTER_SHOT",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 19,
    "ability": "CF_HUNTER_ASPECT_OF_THE_MONKEY",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 20,
    "ability": "CF_HUNTER_ASPECT_OF_THE_HAWK",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 21,
    "ability": "CF_HUNTER_ASPECT_OF_THE_CHEETAH",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 22,
    "ability": "CF_HUNTER_EYES_OF_THE_BEAST",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 23,
    "ability": "CF_HUNTER_MEND_PET",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 24,
    "ability": "CF_HUNTER_REVIVE_PET",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 25,
    "ability": "CF_HUNTER_TAMED_PET_PASSIVE_DAMAGE",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 26,
    "ability": "CF_HUNTER_TAMED_PET_PASSIVE_ARMOR",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 27,
    "ability": "CF_HUNTER_TAMED_PET_PASSIVE_HEALTH",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 28,
    "ability": "CF_HUNTER_TAMED_PET_PASSIVE_SPEED",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 29,
    "ability": "CF_HUNTER_TAMED_PET_PASSIVE_FOCUS",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 30,
    "ability": "CF_HUNTER_TAMED_PET_PASSIVE_CRIT",
    "comment": ""
  },
  {
    "familyId": 9,
    "className": "Hunter",
    "bitIndex": 31,
    "ability": "CF_HUNTER_TAMED_PET_PASSIVE_FRENZY",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 0,
    "ability": "CF_PALADIN_RIGHTEOUS_FURY",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 1,
    "ability": "CF_PALADIN_BLESSING_OF_MIGHT",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 2,
    "ability": "CF_PALADIN_REPENTANCE",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 3,
    "ability": "CF_PALADIN_RETRIBUTION_AURA",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 4,
    "ability": "CF_PALADIN_BLESSING_OF_FREEDOM",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 5,
    "ability": "CF_PALADIN_CONSECRATION",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 6,
    "ability": "CF_PALADIN_DEVOTION_AURA",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 7,
    "ability": "CF_PALADIN_BLESSING_OF_PROTECTION",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 8,
    "ability": "CF_PALADIN_BLESSING_OF_SALVATION1",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 9,
    "ability": "CF_PALADIN_SEAL_OF_THE_CRUSADER",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 10,
    "ability": "CF_PALADIN_JUDGEMENT_OF_RIGHTEOUSNESS",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 11,
    "ability": "CF_PALADIN_HAMMER_OF_JUSTICE",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 12,
    "ability": "CF_PALADIN_CLEANSE",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 13,
    "ability": "CF_PALADIN_FLASH_OF_LIGHT1",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 14,
    "ability": "CF_PALADIN_HOLY_LIGHT1",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 15,
    "ability": "CF_PALADIN_LAY_ON_HANDS",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 16,
    "ability": "CF_PALADIN_BLESSING_OF_WISDOM",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 17,
    "ability": "CF_PALADIN_CONCENTRATION_AURA",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 18,
    "ability": "CF_PALADIN_SEAL_OF_WISDOM_LIGHT",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 19,
    "ability": "CF_PALADIN_JUDGEMENT_OF_WISDOM_LIGHT",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 20,
    "ability": "CF_PALADIN_JUDGEMENT_OF_JUSTICE",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 21,
    "ability": "CF_PALADIN_HOLY_SHOCK",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 22,
    "ability": "CF_PALADIN_UNK22",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 23,
    "ability": "CF_PALADIN_JUDGEMENT",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 24,
    "ability": "CF_PALADIN_BLESSING_OF_KINGS",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 25,
    "ability": "CF_PALADIN_SEAL_OF_COMMAND",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 26,
    "ability": "CF_PALADIN_AURAS",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 27,
    "ability": "CF_PALADIN_SEALS",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 28,
    "ability": "CF_PALADIN_BLESSINGS",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 29,
    "ability": "CF_PALADIN_JUDGEMENT_OF_THE_CRUSADER",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 30,
    "ability": "CF_PALADIN_FLASH_OF_LIGHT2",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 31,
    "ability": "CF_PALADIN_HOLY_LIGHT2",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 32,
    "ability": "CF_PALADIN_UNK32",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 33,
    "ability": "CF_PALADIN_PURIFY_CLEANSE",
    "comment": ""
  },
  {
    "familyId": 10,
    "className": "Paladin",
    "bitIndex": 34,
    "ability": "CF_PALADIN_JUDGEMENT_OF_COMMAND",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 0,
    "ability": "CF_SHAMAN_LIGHTNING_BOLT",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 1,
    "ability": "CF_SHAMAN_CHAIN_LIGHTNING",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 2,
    "ability": "CF_SHAMAN_MAGMA_TOTEM_ATTACK",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 3,
    "ability": "CF_SHAMAN_STONECLAW_TOTEM",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 4,
    "ability": "CF_SHAMAN_SEARING_TOTEM",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 5,
    "ability": "CF_SHAMAN_FIRE_NOVA",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 6,
    "ability": "CF_SHAMAN_HEALING_WAVE",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 7,
    "ability": "CF_SHAMAN_LESSER_HEALING_WAVE",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 8,
    "ability": "CF_SHAMAN_CHAIN_HEAL",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 9,
    "ability": "CF_SHAMAN_REINCARNATION",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 10,
    "ability": "CF_SHAMAN_LIGHTNING_SHIELD",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 11,
    "ability": "CF_SHAMAN_GHOSTWOLF",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 12,
    "ability": "CF_SHAMAN_MAGMA_TOTEM",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 13,
    "ability": "CF_SHAMAN_HEALING_STREAM",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 14,
    "ability": "CF_SHAMAN_MANA_SPRING",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 15,
    "ability": "CF_SHAMAN_STONESKIN_WINDWALL",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 16,
    "ability": "CF_SHAMAN_STRENGTH_OF_EARTH",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 17,
    "ability": "CF_SHAMAN_GRACE_OF_AIR",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 18,
    "ability": "CF_SHAMAN_UNK18",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 19,
    "ability": "CF_SHAMAN_HEALING_MANA_TOTEM",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 20,
    "ability": "CF_SHAMAN_EARTH_SHOCK",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 21,
    "ability": "CF_SHAMAN_FLAMETONGUE_WEAPON",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 22,
    "ability": "CF_SHAMAN_ROCKBITER_WEAPON",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 23,
    "ability": "CF_SHAMAN_WINDFURY_WEAPON",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 24,
    "ability": "CF_SHAMAN_FROSTBRAND_ATTACK",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 25,
    "ability": "CF_SHAMAN_FLAMETONGUE_ATTACK",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 26,
    "ability": "CF_SHAMAN_TOTEM_EFFECTS",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 27,
    "ability": "CF_SHAMAN_UNK27",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 28,
    "ability": "CF_SHAMAN_FLAME_SHOCK",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 29,
    "ability": "CF_SHAMAN_TOTEMS",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 30,
    "ability": "CF_SHAMAN_FIRE_TOTEM_ATTACK",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 31,
    "ability": "CF_SHAMAN_FROST_SHOCK",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 32,
    "ability": "CF_SHAMAN_EARTHBIND",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 33,
    "ability": "CF_SHAMAN_WINDFURY_TOTEM",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 34,
    "ability": "CF_SHAMAN_FLAMETONGUE_TOTEM",
    "comment": ""
  },
  {
    "familyId": 11,
    "className": "Shaman",
    "bitIndex": 35,
    "ability": "CF_SHAMAN_CURES",
    "comment": ""
  }
] as const;
