// Generated once from the supplied source files. Runtime does not read XLSX/TXT.
export const spellDefines = {
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
    },
    {
      "name": "SPELL_ATTR_CAN_BREAK_ON_DAMAGE",
      "value": "0x80000000",
      "comment": "31 Taking damage has chance to remove the aura"
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
      "name": "SPELL_ATTR_EX2_UNK8",
      "value": "0x00000100",
      "comment": "8 Unused"
    },
    {
      "name": "SPELL_ATTR_EX2_UNK9",
      "value": "0x00000200",
      "comment": "9 Unused"
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
      "name": "SPELL_ATTR_EX2_ENABLE_AFTER_PARRY",
      "value": "0x00008000",
      "comment": "15 Deprecated in patch 1.8 and moved to CasterAuraState"
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
      "comment": "0 From TC 3.3.5, but not present in 1.12 native DBCs. Add it with spell_mod to prevent a spell from being resisted."
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
  ],
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
