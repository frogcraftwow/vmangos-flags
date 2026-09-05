// Canonical spell define enums from the supplied spelldefines.txt.
export const spellDefines = {
  "SpellAttributesCustom": [
    {
      "name": "SPELL_CUSTOM_NONE",
      "value": "0x000",
      "comment": ""
    },
    {
      "name": "SPELL_CUSTOM_ALLOW_STACK_BETWEEN_CASTER",
      "value": "0x001",
      "comment": "For example 'Siphon Soul' must be able to stack between the warlocks on a mob"
    },
    {
      "name": "SPELL_CUSTOM_NEGATIVE",
      "value": "0x002",
      "comment": ""
    },
    {
      "name": "SPELL_CUSTOM_POSITIVE",
      "value": "0x004",
      "comment": ""
    },
    {
      "name": "SPELL_CUSTOM_CHAN_NO_DIST_LIMIT",
      "value": "0x008",
      "comment": ""
    },
    {
      "name": "SPELL_CUSTOM_FIXED_DAMAGE",
      "value": "0x010",
      "comment": "Not affected by damage/healing done bonus"
    },
    {
      "name": "SPELL_CUSTOM_IGNORE_ARMOR",
      "value": "0x020",
      "comment": ""
    },
    {
      "name": "SPELL_CUSTOM_BEHIND_TARGET",
      "value": "0x040",
      "comment": "For spells that require the caster to be behind the target"
    },
    {
      "name": "SPELL_CUSTOM_FACE_TARGET",
      "value": "0x080",
      "comment": "For spells that require the target to be in front of the caster"
    },
    {
      "name": "SPELL_CUSTOM_SINGLE_TARGET_AURA",
      "value": "0x100",
      "comment": "Aura applied by spell can only be on 1 target at a time"
    },
    {
      "name": "SPELL_CUSTOM_AURA_APPLY_BREAKS_STEALTH",
      "value": "0x200",
      "comment": "Stealth is removed when this aura is applied"
    },
    {
      "name": "SPELL_CUSTOM_NOT_REMOVED_ON_EVADE",
      "value": "0x400",
      "comment": "Aura persists after creature evades"
    },
    {
      "name": "SPELL_CUSTOM_SEND_CHANNEL_VISUAL",
      "value": "0x800",
      "comment": "Will periodically send the channeling spell visual kit"
    },
    {
      "name": "SPELL_CUSTOM_SEPARATE_AURA_PER_CASTER",
      "value": "0x1000",
      "comment": "Each caster has his own aura slot, instead of replacing others"
    },
    {
      "name": "SPELL_CUSTOM_TRIGGER_WEAPON_PROCS",
      "value": "0x2000",
      "comment": "Can trigger weapon enchants and on hit effects"
    }
  ],
  "SpellAttributesInternal": [
    {
      "name": "SPELL_INTERNAL_APPLIES_AURA",
      "value": "0x00001",
      "comment": ""
    },
    {
      "name": "SPELL_INTERNAL_APPLIES_PERIODIC_AURA",
      "value": "0x00002",
      "comment": ""
    },
    {
      "name": "SPELL_INTERNAL_PASSIVE_STACK_WITH_RANKS",
      "value": "0x00004",
      "comment": ""
    },
    {
      "name": "SPELL_INTERNAL_POSITIVE",
      "value": "0x00008",
      "comment": ""
    },
    {
      "name": "SPELL_INTERNAL_HEAL",
      "value": "0x00010",
      "comment": ""
    },
    {
      "name": "SPELL_INTERNAL_DIRECT_DAMAGE",
      "value": "0x00020",
      "comment": ""
    },
    {
      "name": "SPELL_INTERNAL_CASTER_SOURCE_TARGETS",
      "value": "0x00040",
      "comment": ""
    },
    {
      "name": "SPELL_INTERNAL_AOE",
      "value": "0x00080",
      "comment": ""
    },
    {
      "name": "SPELL_INTERNAL_AOE_AURA",
      "value": "0x00100",
      "comment": ""
    },
    {
      "name": "SPELL_INTERNAL_DISMOUNT",
      "value": "0x00200",
      "comment": ""
    },
    {
      "name": "SPELL_INTERNAL_CHARM",
      "value": "0x00400",
      "comment": ""
    },
    {
      "name": "SPELL_INTERNAL_REFLECTABLE",
      "value": "0x00800",
      "comment": ""
    },
    {
      "name": "SPELL_INTERNAL_CUSTOM",
      "value": "0x01000",
      "comment": ""
    },
    {
      "name": "SPELL_INTERNAL_DELAYABLE_EFFECTS",
      "value": "0x02000",
      "comment": ""
    },
    {
      "name": "SPELL_INTERNAL_BINARY",
      "value": "0x04000",
      "comment": ""
    },
    {
      "name": "SPELL_INTERNAL_NON_PERIODIC_DISPEL",
      "value": "0x08000",
      "comment": ""
    },
    {
      "name": "SPELL_INTERNAL_PVE_HEARTBEAT",
      "value": "0x10000",
      "comment": ""
    },
    {
      "name": "SPELL_INTERNAL_CROWD_CONTROL",
      "value": "0x20000",
      "comment": ""
    }
  ],
  "SpellCategories": [
    {
      "name": "SPELLCATEGORY_DEFAULT",
      "value": "1",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_DIRECT_DAMAGE_SPELL",
      "value": "2",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_COMBAT_CONSUMABLE_POTION",
      "value": "4",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_FOOD",
      "value": "11",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_HEALING_SPELL",
      "value": "12",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_QUICK_BUFF_RESIST_SPELL",
      "value": "17",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_DAMAGE_OVER_TIME_SPELL",
      "value": "18",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_QUICK_DAMAGE_SPELL",
      "value": "19",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_INVULNERABILITY_OTHER",
      "value": "20",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_QUICK_BUFF_SPELL",
      "value": "21",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_QUICK_DEBUFF_SPELL",
      "value": "22",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_SUMMONING",
      "value": "23",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_COMBAT_CONSUMABLE_AGGRESSIVE",
      "value": "24",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_QUICK_HEAL_SPELL",
      "value": "25",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_RESURRECTION_FULL",
      "value": "26",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_SCROLL",
      "value": "27",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_QUICK_BUFF",
      "value": "28",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_DEBUFF",
      "value": "29",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_HEALING",
      "value": "30",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_CONJURE_SHORT",
      "value": "31",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_STUN",
      "value": "32",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_MEZ",
      "value": "33",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ROOT",
      "value": "34",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_DIRECT_DAMAGE_AE_SPELL",
      "value": "35",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_DEBUFF_SPELL",
      "value": "36",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_INVULNERABILITY",
      "value": "37",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_AURA",
      "value": "38",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_SHAPESHIFT",
      "value": "39",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_MELEE_GENERIC",
      "value": "40",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_CRITICAL",
      "value": "41",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_SNARE",
      "value": "42",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_SHOUT",
      "value": "43",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_SPEED",
      "value": "44",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_TOTEM_STONECLAW",
      "value": "45",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_HEALING_GROUP_SPELL",
      "value": "46",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_COMBAT_STATES",
      "value": "47",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_DIRECT_DAMAGE_AE_ABILITY",
      "value": "49",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_DIRECT_DAMAGE_AECONE_ABILITY",
      "value": "50",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_QUICK_DEBUFF_DPS_SPELL",
      "value": "51",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_QUICK_DEBUFF_DR_SPELL",
      "value": "52",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_QUICK_BUFF_DR_SPELL",
      "value": "54",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_QUICK_BUFF_DPS_SPELL",
      "value": "55",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_INSTANT_HEAL_SPELL",
      "value": "56",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_QUICK_HEAL_GROUP_SPELL",
      "value": "57",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_INSTANT_HEAL_GROUP_SPELL",
      "value": "58",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_DRINK",
      "value": "59",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_INVULNERABILITY_TEMP",
      "value": "60",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ENERGIZE_GROUP_SPELL",
      "value": "61",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ENERGIZE_SPELL",
      "value": "62",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_BIG_DIRECT_DAMAGE_SPELL",
      "value": "63",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_MINIMAP_SPECIAL",
      "value": "64",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_MELEE_SPECIAL",
      "value": "65",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_DODGE_MANEUVER",
      "value": "66",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_BLOCK_MANEUVER",
      "value": "67",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_PARRY_MANEUVER",
      "value": "68",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_DIRECT_DAMAGE_AEPERSISTENT_SPELL",
      "value": "72",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_MARTIAL_ARTS_GENERIC",
      "value": "73",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_MARTIAL_ARTS_SPECIAL",
      "value": "74",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_DETECT",
      "value": "75",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_SHOOT_THROW",
      "value": "76",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_TRADE_HERBALISM",
      "value": "77",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_TRADE_MINING",
      "value": "78",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_POTION_NONCOMBAT",
      "value": "79",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_TAUNT_DETAUNT",
      "value": "82",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_TAMING",
      "value": "83",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_TAUNT_AE",
      "value": "84",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_DIRECT_DAMAGE_AECHAIN_ABILITY",
      "value": "85",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_PET",
      "value": "86",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_CONJURE_LONG",
      "value": "87",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_SILENCE",
      "value": "88",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_PORTAL",
      "value": "89",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_CHARM",
      "value": "93",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_SUMMONING",
      "value": "94",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_RACIAL_ABILITY",
      "value": "95",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_RACIAL_ABILITY_2",
      "value": "96",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_SECONDARY_SURVIVAL",
      "value": "97",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_BIG_DIRECT_DAMAGE_SPELL_2",
      "value": "98",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_INSTANT_SPELL",
      "value": "99",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_MANA_GEM",
      "value": "100",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_FELHUNTER",
      "value": "101",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_LONG_BUFF",
      "value": "102",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_EPIC",
      "value": "103",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_TOTEM_HEALING",
      "value": "104",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_TOTEM_SERPENT",
      "value": "105",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_TOTEM_SLOWING",
      "value": "106",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_TOTEM_MANA",
      "value": "107",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_TOTEM_INVISIBILITY",
      "value": "108",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_MELEE_DISARM",
      "value": "109",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_DISCIPLINE",
      "value": "132",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_GLOBAL",
      "value": "133",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_BANDAGE",
      "value": "150",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_FINISHING_MOVE_WEAPONSCALED",
      "value": "170",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_BANISH",
      "value": "190",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_TOTEM_GROUNDING",
      "value": "230",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_BLAST_WAVE",
      "value": "250",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_KIDNEY_SHOT",
      "value": "270",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_PYROBLAST_REUSE",
      "value": "290",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_TRANSMUTE_ALCHEMY",
      "value": "310",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_MOUNT",
      "value": "330",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_INNER_RAGE",
      "value": "350",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_RANGED_WEAPON",
      "value": "351",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_LIGHTNING_SHIELD",
      "value": "371",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_QUEST_FELCURSE",
      "value": "391",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_TRAP",
      "value": "411",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_HOLY_NOVA",
      "value": "431",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_HOLY_FIRE",
      "value": "451",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ICE_BARRIER",
      "value": "471",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ASTRAL_RECALL",
      "value": "511",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_NATURES_GRASP",
      "value": "531",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_AURA_OF_THE_PIOUS",
      "value": "551",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_HURRICANE",
      "value": "571",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_TOTEM_MANA_TIDE",
      "value": "591",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_WINGS_OF_HOPE",
      "value": "611",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_SOUL_FIRE",
      "value": "631",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_DEATH_COIL",
      "value": "633",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_HOWL_OF_TERROR",
      "value": "634",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_SHADOWBURN",
      "value": "651",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_DESPERATE_PRAYER",
      "value": "671",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_CONFLAGRATE",
      "value": "672",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_DEVOURING_PLAGUE",
      "value": "691",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_SUMMON_INFERNAL",
      "value": "731",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_TREE_FORM",
      "value": "751",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_SALT_SHAKER",
      "value": "791",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_DIVINE_INTERVENTION",
      "value": "811",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_SOULSTONE",
      "value": "831",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_RESTORATION",
      "value": "851",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_SHADOWMELD",
      "value": "871",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_INTERCEPT",
      "value": "872",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_WHIRLWIND",
      "value": "891",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_HOLY_SHOCK",
      "value": "892",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_DISTRACTING_SHOT",
      "value": "911",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_HOLY_SHIELD",
      "value": "931",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_CONSECRATION",
      "value": "932",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_PVP_BATTLEFIELD_ITEM_LONG_30_MINS",
      "value": "951",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_MORTAL_STRIKE",
      "value": "971",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_SNOWMASTER",
      "value": "991",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_FRENZIED_HEALING",
      "value": "1011",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_HALF_HOUR",
      "value": "1031",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_JUMPER_CABLES",
      "value": "1051",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_HATCH_JUBLING",
      "value": "1071",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_BATTLEGROUNDS_RECALL",
      "value": "1091",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_WYVERN_STING",
      "value": "1111",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_HAMMER_OF_VENGEANCE",
      "value": "1131",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_INTIMIDATION",
      "value": "1132",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_FAERIE_FIRE_FERAL",
      "value": "1133",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_RIPOSTE",
      "value": "1134",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_COUNTERATTACK",
      "value": "1135",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_HOLIDAY_FIREWORK_ROCKETS",
      "value": "1136",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_HOLIDAY_FIRECRACKER",
      "value": "1137",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_RC_WEAPONS",
      "value": "1138",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_QUEST_10_MINUTES",
      "value": "1139",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_QUEST_1_MIN",
      "value": "1140",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_BURST_TRINKET",
      "value": "1141",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_HOLIDAY_VALENTINE_PERFUME_COLOGNE",
      "value": "1142",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_TARGET_DUMMY",
      "value": "1143",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_PRIEST_RACIAL",
      "value": "1144",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_LIGHTWELL",
      "value": "1145",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_QUEST_1_HOUR",
      "value": "1149",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_SHADOWTHUNDERSTRIKE",
      "value": "1150",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_TALENT_DPS",
      "value": "1151",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_CREATURE_SPECIAL",
      "value": "1152",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_COMBAT_CONSUMABLE_NONAGGRESSIVE",
      "value": "1153",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ARATHI_BASIN_TRINKET",
      "value": "1155",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_CREATURE_SPECIAL_2",
      "value": "1159",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_ITEM_PRIEST_EPIC_STAFF",
      "value": "1160",
      "comment": ""
    },
    {
      "name": "SPELLCATEGORY_REINCARNATION",
      "value": "1161",
      "comment": ""
    }
  ],
  "SpellCategoryFlags": [
    {
      "name": "SCF_COOLDOWN_MODIFIES_ITEM",
      "value": "0x1",
      "comment": ""
    },
    {
      "name": "SCF_COOLDOWN_IS_GLOBAL",
      "value": "0x2",
      "comment": ""
    }
  ],
  "SpellSpecific": [
    {
      "name": "SPELL_NORMAL",
      "value": "0",
      "comment": ""
    },
    {
      "name": "SPELL_SEAL",
      "value": "1",
      "comment": ""
    },
    {
      "name": "SPELL_BLESSING",
      "value": "2",
      "comment": ""
    },
    {
      "name": "SPELL_AURA",
      "value": "3",
      "comment": ""
    },
    {
      "name": "SPELL_STING",
      "value": "4",
      "comment": ""
    },
    {
      "name": "SPELL_CURSE",
      "value": "5",
      "comment": ""
    },
    {
      "name": "SPELL_ASPECT",
      "value": "6",
      "comment": ""
    },
    {
      "name": "SPELL_TRACKER",
      "value": "7",
      "comment": ""
    },
    {
      "name": "SPELL_WARLOCK_ARMOR",
      "value": "8",
      "comment": ""
    },
    {
      "name": "SPELL_MAGE_ARMOR",
      "value": "9",
      "comment": ""
    },
    {
      "name": "SPELL_ELEMENTAL_SHIELD",
      "value": "10",
      "comment": ""
    },
    {
      "name": "SPELL_MAGE_POLYMORPH",
      "value": "11",
      "comment": ""
    },
    {
      "name": "SPELL_POSITIVE_SHOUT",
      "value": "12",
      "comment": ""
    },
    {
      "name": "SPELL_JUDGEMENT",
      "value": "13",
      "comment": ""
    },
    {
      "name": "SPELL_BATTLE_ELIXIR",
      "value": "14",
      "comment": ""
    },
    {
      "name": "SPELL_GUARDIAN_ELIXIR",
      "value": "15",
      "comment": ""
    },
    {
      "name": "SPELL_FLASK_ELIXIR",
      "value": "16",
      "comment": ""
    },
    {
      "name": "SPELL_WELL_FED",
      "value": "19",
      "comment": ""
    },
    {
      "name": "SPELL_FOOD",
      "value": "20",
      "comment": ""
    },
    {
      "name": "SPELL_DRINK",
      "value": "21",
      "comment": ""
    },
    {
      "name": "SPELL_FOOD_AND_DRINK",
      "value": "22",
      "comment": ""
    },
    {
      "name": "SPELL_NEGATIVE_HASTE",
      "value": "23",
      "comment": ""
    },
    {
      "name": "SPELL_SNARE",
      "value": "24",
      "comment": ""
    }
  ]
} as const;
