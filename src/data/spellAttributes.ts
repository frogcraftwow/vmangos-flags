// VMaNGOS spell attribute bit definitions from src/game/Spells/SpellDefines.h.
// Names, bit positions, and source comments follow the current development branch.
export const spellAttributes = {
  "SpellAttributes": [
    {
      "name": "SPELL_ATTR_PROC_FAILURE_BURNS_CHARGE",
      "value": "0x00000001",
      "comment": "0"
    },
    {
      "name": "SPELL_ATTR_USES_RANGED_SLOT",
      "value": "0x00000002",
      "comment": "1 All ranged abilites have this flag"
    },
    {
      "name": "SPELL_ATTR_ON_NEXT_SWING_NO_DAMAGE",
      "value": "0x00000004",
      "comment": "2"
    },
    {
      "name": "SPELL_ATTR_NEED_EXOTIC_AMMO",
      "value": "0x00000008",
      "comment": "3 Vanilla only attribute removed in TBC"
    },
    {
      "name": "SPELL_ATTR_IS_ABILITY",
      "value": "0x00000010",
      "comment": "4 Client puts 'ability' instead of 'spell' in game strings for these spells"
    },
    {
      "name": "SPELL_ATTR_IS_TRADESKILL",
      "value": "0x00000020",
      "comment": "5 Trade spells, will be added by client to a sublist of profession spell"
    },
    {
      "name": "SPELL_ATTR_PASSIVE",
      "value": "0x00000040",
      "comment": "6"
    },
    {
      "name": "SPELL_ATTR_DO_NOT_DISPLAY",
      "value": "0x00000080",
      "comment": "7 Spells with this attribute are not visible in spellbook or aura bar"
    },
    {
      "name": "SPELL_ATTR_DO_NOT_LOG",
      "value": "0x00000100",
      "comment": "8 This attributes controls whether spell appears in combat logs"
    },
    {
      "name": "SPELL_ATTR_HELD_ITEM_ONLY",
      "value": "0x00000200",
      "comment": "9 Client automatically selects item from mainhand slot as a cast target"
    },
    {
      "name": "SPELL_ATTR_ON_NEXT_SWING",
      "value": "0x00000400",
      "comment": "10"
    },
    {
      "name": "SPELL_ATTR_WEARER_CASTS_PROC_TRIGGER",
      "value": "0x00000800",
      "comment": "11"
    },
    {
      "name": "SPELL_ATTR_DAYTIME_ONLY",
      "value": "0x00001000",
      "comment": "12 Only useable at daytime, not set in 2.4.2"
    },
    {
      "name": "SPELL_ATTR_NIGHT_ONLY",
      "value": "0x00002000",
      "comment": "13 Only useable at night, not set in 2.4.2"
    },
    {
      "name": "SPELL_ATTR_ONLY_INDOORS",
      "value": "0x00004000",
      "comment": "14 Only useable indoors, not set in 2.4.2"
    },
    {
      "name": "SPELL_ATTR_ONLY_OUTDOORS",
      "value": "0x00008000",
      "comment": "15 Only useable outdoors"
    },
    {
      "name": "SPELL_ATTR_NOT_SHAPESHIFT",
      "value": "0x00010000",
      "comment": "16 Not while shapeshifted"
    },
    {
      "name": "SPELL_ATTR_ONLY_STEALTHED",
      "value": "0x00020000",
      "comment": "17 Must be in stealth"
    },
    {
      "name": "SPELL_ATTR_DO_NOT_SHEATH",
      "value": "0x00040000",
      "comment": "18 Client won't hide unit weapons in sheath on cast/channel"
    },
    {
      "name": "SPELL_ATTR_SCALES_WITH_CREATURE_LEVEL",
      "value": "0x00080000",
      "comment": "19 Spell damage depends on caster level"
    },
    {
      "name": "SPELL_ATTR_CANCELS_AUTO_ATTACK_COMBAT",
      "value": "0x00100000",
      "comment": "20 Stop attack after use this spell (and not begin attack if use)"
    },
    {
      "name": "SPELL_ATTR_NO_ACTIVE_DEFENSE",
      "value": "0x00200000",
      "comment": "21 Cannot be dodged/parried/blocked"
    },
    {
      "name": "SPELL_ATTR_TRACK_TARGET_IN_CAST_PLAYER_ONLY",
      "value": "0x00400000",
      "comment": "22 SetTrackingTarget"
    },
    {
      "name": "SPELL_ATTR_ALLOW_CAST_WHILE_DEAD",
      "value": "0x00800000",
      "comment": "23 Castable while dead"
    },
    {
      "name": "SPELL_ATTR_ALLOW_WHILE_MOUNTED",
      "value": "0x01000000",
      "comment": "24 Castable while mounted"
    },
    {
      "name": "SPELL_ATTR_COOLDOWN_ON_EVENT",
      "value": "0x02000000",
      "comment": "25 Activate and start cooldown after aura fade or remove summoned creature or go"
    },
    {
      "name": "SPELL_ATTR_AURA_IS_DEBUFF",
      "value": "0x04000000",
      "comment": "26 Almost all negative spells have it"
    },
    {
      "name": "SPELL_ATTR_ALLOW_WHILE_SITTING",
      "value": "0x08000000",
      "comment": "27 Castable while sitting"
    },
    {
      "name": "SPELL_ATTR_NOT_IN_COMBAT_ONLY_PEACEFUL",
      "value": "0x10000000",
      "comment": "28 Cannot be used in combat"
    },
    {
      "name": "SPELL_ATTR_NO_IMMUNITIES",
      "value": "0x20000000",
      "comment": "29 Unaffected by invulnerability"
    },
    {
      "name": "SPELL_ATTR_HEARTBEAT_RESIST",
      "value": "0x40000000",
      "comment": "30 Chance for spell effects to break early (heartbeat resist)"
    },
    {
      "name": "SPELL_ATTR_NO_AURA_CANCEL",
      "value": "0x80000000",
      "comment": "31 Positive aura can't be canceled"
    }
  ],
  "SpellAttributesEx": [
    {
      "name": "SPELL_ATTR_EX_DISMISS_PET_FIRST",
      "value": "0x00000001",
      "comment": "0 For spells without this flag client doesn't allow to summon pet if caster has a pet"
    },
    {
      "name": "SPELL_ATTR_EX_USE_ALL_MANA",
      "value": "0x00000002",
      "comment": "1 Use all power (Only paladin Lay of Hands and Bunyanize)"
    },
    {
      "name": "SPELL_ATTR_EX_IS_CHANNELED",
      "value": "0x00000004",
      "comment": "2"
    },
    {
      "name": "SPELL_ATTR_EX_NO_REDIRECTION",
      "value": "0x00000008",
      "comment": "3"
    },
    {
      "name": "SPELL_ATTR_EX_NO_SKILL_INCREASE",
      "value": "0x00000010",
      "comment": "4 Only assigned to stealth spells for some reason"
    },
    {
      "name": "SPELL_ATTR_EX_ALLOW_WHILE_STEALTHED",
      "value": "0x00000020",
      "comment": "5 Does not break stealth"
    },
    {
      "name": "SPELL_ATTR_EX_IS_SELF_CHANNELED",
      "value": "0x00000040",
      "comment": "6"
    },
    {
      "name": "SPELL_ATTR_EX_NO_REFLECTION",
      "value": "0x00000080",
      "comment": "7"
    },
    {
      "name": "SPELL_ATTR_EX_ONLY_PEACEFUL_TARGETS",
      "value": "0x00000100",
      "comment": "8 Target must not be in combat"
    },
    {
      "name": "SPELL_ATTR_EX_INITIATES_COMBAT",
      "value": "0x00000200",
      "comment": "9 Enables Auto-Attack"
    },
    {
      "name": "SPELL_ATTR_EX_NO_THREAT",
      "value": "0x00000400",
      "comment": "10"
    },
    {
      "name": "SPELL_ATTR_EX_AURA_UNIQUE",
      "value": "0x00000800",
      "comment": "11"
    },
    {
      "name": "SPELL_ATTR_EX_FAILURE_BREAKS_STEALTH",
      "value": "0x00001000",
      "comment": "12"
    },
    {
      "name": "SPELL_ATTR_EX_TOGGLE_FARSIGHT",
      "value": "0x00002000",
      "comment": "13"
    },
    {
      "name": "SPELL_ATTR_EX_TRACK_TARGET_IN_CHANNEL",
      "value": "0x00004000",
      "comment": "14 Client automatically forces player to face target when channeling"
    },
    {
      "name": "SPELL_ATTR_EX_IMMUNITY_PURGES_EFFECT",
      "value": "0x00008000",
      "comment": "15 Remove auras on immunity"
    },
    {
      "name": "SPELL_ATTR_EX_IMMUNITY_TO_HOSTILE_AND_FRIENDLY_EFFECTS",
      "value": "0x00010000",
      "comment": "16 Aura that provides immunity prevents positive effects too"
    },
    {
      "name": "SPELL_ATTR_EX_NO_AUTOCAST_AI",
      "value": "0x00020000",
      "comment": "17"
    },
    {
      "name": "SPELL_ATTR_EX_PREVENTS_ANIM",
      "value": "0x00040000",
      "comment": "18 Stun, polymorph, daze, sleep"
    },
    {
      "name": "SPELL_ATTR_EX_EXCLUDE_CASTER",
      "value": "0x00080000",
      "comment": "19"
    },
    {
      "name": "SPELL_ATTR_EX_FINISHING_MOVE_DAMAGE",
      "value": "0x00100000",
      "comment": "20 Uses combo points"
    },
    {
      "name": "SPELL_ATTR_EX_THREAT_ONLY_ON_MISS",
      "value": "0x00200000",
      "comment": "21"
    },
    {
      "name": "SPELL_ATTR_EX_FINISHING_MOVE_DURATION",
      "value": "0x00400000",
      "comment": "22 Uses combo points (in 4.x not required combo point target selected)"
    },
    {
      "name": "SPELL_ATTR_EX_IGNORE_CASTER_AND_TARGET_RESTRICTIONS",
      "value": "0x00800000",
      "comment": "23 Skips all cast checks, moved to AttributesEx3 after 1.10 (100% correlation)"
    },
    {
      "name": "SPELL_ATTR_EX_SPECIAL_SKILLUP",
      "value": "0x01000000",
      "comment": "24 Only fishing spells"
    },
    {
      "name": "SPELL_ATTR_EX_UNK25",
      "value": "0x02000000",
      "comment": "25 Different in vanilla"
    },
    {
      "name": "SPELL_ATTR_EX_REQUIRE_ALL_TARGETS",
      "value": "0x04000000",
      "comment": "26"
    },
    {
      "name": "SPELL_ATTR_EX_DISCOUNT_POWER_ON_MISS",
      "value": "0x08000000",
      "comment": "27 All these spells refund power on parry or deflect"
    },
    {
      "name": "SPELL_ATTR_EX_NO_AURA_ICON",
      "value": "0x10000000",
      "comment": "28 Client doesn't display these spells in aura bar"
    },
    {
      "name": "SPELL_ATTR_EX_NAME_IN_CHANNEL_BAR",
      "value": "0x20000000",
      "comment": "29 Spell name is displayed in cast bar instead of 'channeling' text"
    },
    {
      "name": "SPELL_ATTR_EX_COMBO_ON_BLOCK",
      "value": "0x40000000",
      "comment": "30 Overpower"
    },
    {
      "name": "SPELL_ATTR_EX_CAST_WHEN_LEARNED",
      "value": "0x80000000",
      "comment": "31"
    }
  ],
  "SpellAttributesEx2": [
    {
      "name": "SPELL_ATTR_EX2_ALLOW_DEAD_TARGET",
      "value": "0x00000001",
      "comment": "0 Can target dead unit or corpse"
    },
    {
      "name": "SPELL_ATTR_EX2_NO_SHAPESHIFT_UI",
      "value": "0x00000002",
      "comment": "1"
    },
    {
      "name": "SPELL_ATTR_EX2_IGNORE_LINE_OF_SIGHT",
      "value": "0x00000004",
      "comment": "2"
    },
    {
      "name": "SPELL_ATTR_EX2_ALLOW_LOW_LEVEL_BUFF",
      "value": "0x00000008",
      "comment": "3"
    },
    {
      "name": "SPELL_ATTR_EX2_USE_SHAPESHIFT_BAR",
      "value": "0x00000010",
      "comment": "4 Client displays icon in stance bar when learned, even if not shapeshift"
    },
    {
      "name": "SPELL_ATTR_EX2_AUTO_REPEAT",
      "value": "0x00000020",
      "comment": "5"
    },
    {
      "name": "SPELL_ATTR_EX2_CANNOT_CAST_ON_TAPPED",
      "value": "0x00000040",
      "comment": "6 Target must be tapped by caster"
    },
    {
      "name": "SPELL_ATTR_EX2_DO_NOT_REPORT_SPELL_FAILURE",
      "value": "0x00000080",
      "comment": "7"
    },
    {
      "name": "SPELL_ATTR_EX2_INCLUDE_IN_ADVANCED_COMBAT_LOG",
      "value": "0x00000100",
      "comment": ""
    },
    {
      "name": "SPELL_ATTR_EX2_ALWAYS_CAST_AS_UNIT",
      "value": "0x00000200",
      "comment": ""
    },
    {
      "name": "SPELL_ATTR_EX2_SPECIAL_TAMING_FLAG",
      "value": "0x00000400",
      "comment": "10"
    },
    {
      "name": "SPELL_ATTR_EX2_NO_TARGET_PER_SECOND_COSTS",
      "value": "0x00000800",
      "comment": "11"
    },
    {
      "name": "SPELL_ATTR_EX2_CHAIN_FROM_CASTER",
      "value": "0x00001000",
      "comment": "12"
    },
    {
      "name": "SPELL_ATTR_EX2_ENCHANT_OWN_ITEM_ONLY",
      "value": "0x00002000",
      "comment": "13"
    },
    {
      "name": "SPELL_ATTR_EX2_ALLOW_WHILE_INVISIBLE",
      "value": "0x00004000",
      "comment": "14"
    },
    {
      "name": "SPELL_ATTR_EX2_UNK15",
      "value": "0x00008000",
      "comment": ""
    },
    {
      "name": "SPELL_ATTR_EX2_NO_ACTIVE_PETS",
      "value": "0x00010000",
      "comment": "16"
    },
    {
      "name": "SPELL_ATTR_EX2_DO_NOT_RESET_COMBAT_TIMERS",
      "value": "0x00020000",
      "comment": "17 Don't reset timers for melee autoattacks (swings) or ranged autoattacks (autoshoots)"
    },
    {
      "name": "SPELL_ATTR_EX2_REQ_DEAD_PET",
      "value": "0x00040000",
      "comment": "18 Only Revive pet has it"
    },
    {
      "name": "SPELL_ATTR_EX2_ALLOW_WHILE_NOT_SHAPESHIFTED",
      "value": "0x00080000",
      "comment": "19 Does not necessary need shapeshift (pre-3.x not have passive spells with this attribute)"
    },
    {
      "name": "SPELL_ATTR_EX2_INITIATE_COMBAT_POST_CAST",
      "value": "0x00100000",
      "comment": "20 Client will send CMSG_ATTACK_SWING after SMSG_SPELL_GO"
    },
    {
      "name": "SPELL_ATTR_EX2_FAIL_ON_ALL_TARGETS_IMMUNE",
      "value": "0x00200000",
      "comment": "21 For ice blocks, pala immunity buffs, priest absorb shields"
    },
    {
      "name": "SPELL_ATTR_EX2_NO_INITIAL_THREAT",
      "value": "0x00400000",
      "comment": "22"
    },
    {
      "name": "SPELL_ATTR_EX2_PROC_COOLDOWN_ON_FAILURE",
      "value": "0x00800000",
      "comment": "23"
    },
    {
      "name": "SPELL_ATTR_EX2_ITEM_CAST_WITH_OWNER_SKILL",
      "value": "0x01000000",
      "comment": "24 NYI"
    },
    {
      "name": "SPELL_ATTR_EX2_DONT_BLOCK_MANA_REGEN",
      "value": "0x02000000",
      "comment": "25"
    },
    {
      "name": "SPELL_ATTR_EX2_NO_SCHOOL_IMMUNITIES",
      "value": "0x04000000",
      "comment": "26"
    },
    {
      "name": "SPELL_ATTR_EX2_IGNORE_WEAPONSKILL",
      "value": "0x08000000",
      "comment": "27 NYI (only fishing has it)"
    },
    {
      "name": "SPELL_ATTR_EX2_NOT_AN_ACTION",
      "value": "0x10000000",
      "comment": "28"
    },
    {
      "name": "SPELL_ATTR_EX2_CANT_CRIT",
      "value": "0x20000000",
      "comment": "29"
    },
    {
      "name": "SPELL_ATTR_EX2_ACTIVE_THREAT",
      "value": "0x40000000",
      "comment": "30 Caster is put in combat for 5.5 seconds on cast at enemy unit"
    },
    {
      "name": "SPELL_ATTR_EX2_RETAIN_ITEM_CAST",
      "value": "0x80000000",
      "comment": "31 Food or Drink Buff (like Well Fed)"
    }
  ],
  "SpellAttributesEx3": [
    {
      "name": "SPELL_ATTR_EX3_PVP_ENABLING",
      "value": "0x00000001",
      "comment": "0 Spell landed counts as hostile action against enemy even if it doesn't trigger combat state, propagates PvP flags"
    },
    {
      "name": "SPELL_ATTR_EX3_NO_PROC_EQUIP_REQUIREMENT",
      "value": "0x00000002",
      "comment": "1"
    },
    {
      "name": "SPELL_ATTR_EX3_NO_CASTING_BAR_TEXT",
      "value": "0x00000004",
      "comment": "2"
    },
    {
      "name": "SPELL_ATTR_EX3_COMPLETELY_BLOCKED",
      "value": "0x00000008",
      "comment": "3 All effects prevented on block"
    },
    {
      "name": "SPELL_ATTR_EX3_NO_RES_TIMER",
      "value": "0x00000010",
      "comment": "4 Corpse reclaim delay does not apply to accepting resurrection (only Rebirth has it)"
    },
    {
      "name": "SPELL_ATTR_EX3_NO_DURABILITY_LOSS",
      "value": "0x00000020",
      "comment": "5"
    },
    {
      "name": "SPELL_ATTR_EX3_NO_AVOIDANCE",
      "value": "0x00000040",
      "comment": "6 Persistent Area Aura not removed on leaving radius"
    },
    {
      "name": "SPELL_ATTR_EX3_DOT_STACKING_RULE",
      "value": "0x00000080",
      "comment": "7 Create a separate (de)buff stack for each caster"
    },
    {
      "name": "SPELL_ATTR_EX3_ONLY_ON_PLAYER",
      "value": "0x00000100",
      "comment": "8 Can target only players"
    },
    {
      "name": "SPELL_ATTR_EX3_NOT_A_PROC",
      "value": "0x00000200",
      "comment": "9 Aura periodic trigger is not evaluated as triggered"
    },
    {
      "name": "SPELL_ATTR_EX3_REQUIRES_MAIN_HAND_WEAPON",
      "value": "0x00000400",
      "comment": "10"
    },
    {
      "name": "SPELL_ATTR_EX3_ONLY_BATTLEGROUNDS",
      "value": "0x00000800",
      "comment": "11"
    },
    {
      "name": "SPELL_ATTR_EX3_ONLY_ON_GHOSTS",
      "value": "0x00001000",
      "comment": "12"
    },
    {
      "name": "SPELL_ATTR_EX3_HIDE_CHANNEL_BAR",
      "value": "0x00002000",
      "comment": "13 Client will not display channeling bar"
    },
    {
      "name": "SPELL_ATTR_EX3_HIDE_IN_RAID_FILTER",
      "value": "0x00004000",
      "comment": "14 Only \"Honorless Target\" has this flag"
    },
    {
      "name": "SPELL_ATTR_EX3_NORMAL_RANGED_ATTACK",
      "value": "0x00008000",
      "comment": "15 Spells with this attribute are processed as ranged attacks in client"
    },
    {
      "name": "SPELL_ATTR_EX3_SUPPRESS_CASTER_PROCS",
      "value": "0x00010000",
      "comment": "16"
    },
    {
      "name": "SPELL_ATTR_EX3_SUPPRESS_TARGET_PROCS",
      "value": "0x00020000",
      "comment": "17"
    },
    {
      "name": "SPELL_ATTR_EX3_ALWAYS_HIT",
      "value": "0x00040000",
      "comment": "18 Spell should always hit its target"
    },
    {
      "name": "SPELL_ATTR_EX3_INSTANT_TARGET_PROCS",
      "value": "0x00080000",
      "comment": "19 Related to spell batching"
    },
    {
      "name": "SPELL_ATTR_EX3_ALLOW_AURA_WHILE_DEAD",
      "value": "0x00100000",
      "comment": "20 Death persistent spells"
    },
    {
      "name": "SPELL_ATTR_EX3_ONLY_PROC_OUTDOORS",
      "value": "0x00200000",
      "comment": "21"
    },
    {
      "name": "SPELL_ATTR_EX3_CASTING_CANCELS_AUTOREPEAT",
      "value": "0x00400000",
      "comment": "22 NYI (only Shoot with Wand has it)"
    },
    {
      "name": "SPELL_ATTR_EX3_NO_DAMAGE_HISTORY",
      "value": "0x00800000",
      "comment": "23 NYI"
    },
    {
      "name": "SPELL_ATTR_EX3_REQUIRES_OFFHAND_WEAPON",
      "value": "0x01000000",
      "comment": "24"
    },
    {
      "name": "SPELL_ATTR_EX3_TREAT_AS_PERIODIC",
      "value": "0x02000000",
      "comment": "25 Does not cause spell pushback"
    },
    {
      "name": "SPELL_ATTR_EX3_CAN_PROC_FROM_PROCS",
      "value": "0x04000000",
      "comment": "26 Auras with this attribute can proc off procced spells (periodic triggers etc)"
    },
    {
      "name": "SPELL_ATTR_EX3_ONLY_PROC_ON_CASTER",
      "value": "0x08000000",
      "comment": "27"
    },
    {
      "name": "SPELL_ATTR_EX3_IGNORE_CASTER_AND_TARGET_RESTRICTIONS",
      "value": "0x10000000",
      "comment": "28 Skips all cast checks, moved from AttributesEx after 1.10 (100% correlation)"
    },
    {
      "name": "SPELL_ATTR_EX3_IGNORE_CASTER_MODIFIERS",
      "value": "0x20000000",
      "comment": "29"
    },
    {
      "name": "SPELL_ATTR_EX3_DO_NOT_DISPLAY_RANGE",
      "value": "0x40000000",
      "comment": "30"
    },
    {
      "name": "SPELL_ATTR_EX3_NOT_ON_AOE_IMMUNE",
      "value": "0x80000000",
      "comment": "31"
    }
  ],
  "SpellAttributesEx4": [
    {
      "name": "SPELL_ATTR_EX4_IGNORE_RESISTANCES",
      "value": "0x00000001",
      "comment": ""
    },
    {
      "name": "SPELL_ATTR_EX4_CLASS_TRIGGER_ONLY_ON_TARGET",
      "value": "0x00000002",
      "comment": "1"
    },
    {
      "name": "SPELL_ATTR_EX4_AURA_EXPIRES_OFFLINE",
      "value": "0x00000004",
      "comment": "2 Aura continues to expire while player is offline"
    },
    {
      "name": "SPELL_ATTR_EX4_NO_HELPFUL_THREAT",
      "value": "0x00000008",
      "comment": "3"
    },
    {
      "name": "SPELL_ATTR_EX4_NO_HARMFUL_THREAT",
      "value": "0x00000010",
      "comment": "4"
    },
    {
      "name": "SPELL_ATTR_EX4_ALLOW_CLIENT_TARGETING",
      "value": "0x00000020",
      "comment": "5 NYI"
    },
    {
      "name": "SPELL_ATTR_EX4_CANNOT_BE_STOLEN",
      "value": "0x00000040",
      "comment": "6 Unused"
    },
    {
      "name": "SPELL_ATTR_EX4_CAN_CAST_WHILE_CASTING",
      "value": "0x00000080",
      "comment": "7 NYI (does not seem to work client side either)"
    },
    {
      "name": "SPELL_ATTR_EX4_IGNORE_DAMAGE_TAKEN_MODIFIERS",
      "value": "0x00000100",
      "comment": "8"
    },
    {
      "name": "SPELL_ATTR_EX4_COMBAT_FEEDBACK_WHEN_USABLE",
      "value": "0x00000200",
      "comment": "9 Initially disabled / Trigger activate from event (Execute, Riposte, Deep Freeze...)"
    }
  ]
} as const;
