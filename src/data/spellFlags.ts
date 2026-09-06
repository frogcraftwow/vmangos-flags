import type { MaskFlag } from '../components/MaskTool';

export type SpellFlagGroup = {
  key: string;
  name: string;
  flags: readonly MaskFlag[];
  definitionScope?: string;
  presets?: readonly { name: string; decimal: string }[];
};

const bits = (rows: readonly (readonly [string, string?])[]): readonly MaskFlag[] =>
  rows.map(([name, comment], bitIndex) => ({ name, bitIndex, comment: comment ?? '' }));

export const spellFlags: readonly SpellFlagGroup[] = [
  {
    key: 'aura-interrupt-flags',
    name: 'Aura Interrupt Flags',
    definitionScope: 'spellflags:aura-interrupt',
    flags: bits([
      ['AURA_INTERRUPT_FLAG_HOSTILE_ACTION', 'removed when getting hit by a negative spell'],
      ['AURA_INTERRUPT_FLAG_DAMAGE', 'removed by any damage'],
      ['AURA_INTERRUPT_FLAG_ACTION', 'removed by any cast'],
      ['AURA_INTERRUPT_FLAG_MOVING', 'removed by any movement'],
      ['AURA_INTERRUPT_FLAG_TURNING', 'removed by any turning'],
      ['AURA_INTERRUPT_FLAG_ANIM_CANCELS', 'removed by anim'],
      ['AURA_INTERRUPT_FLAG_DISMOUNT', 'removed by unmounting'],
      ['AURA_INTERRUPT_FLAG_UNDERWATER_CANCELS', 'removed by entering water'],
      ['AURA_INTERRUPT_FLAG_ABOVEWATER_CANCELS', 'removed by leaving water'],
      ['AURA_INTERRUPT_FLAG_SHEATHING_CANCELS', 'removed by unsheathing'],
      ['AURA_INTERRUPT_FLAG_INTERACTING', 'talk to npc / loot? action on creature'],
      ['AURA_INTERRUPT_FLAG_LOOTING', 'mine/use/open action on gameobject'],
      ['AURA_INTERRUPT_FLAG_ATTACKING', 'removed by attack'],
      ['AURA_INTERRUPT_FLAG_ITEM_USE'],
      ['AURA_INTERRUPT_FLAG_DAMAGE_CHANNEL_DURATION'],
      ['AURA_INTERRUPT_FLAG_SHAPESHIFTING'],
      ['AURA_INTERRUPT_FLAG_ACTION_LATE'],
      ['AURA_INTERRUPT_FLAG_MOUNTING', 'removed by mounting'],
      ['AURA_INTERRUPT_FLAG_STANDING_CANCELS', 'removed by standing up (used by food and drink mostly and sleep/Fake Death like)'],
      ['AURA_INTERRUPT_FLAG_LEAVE_WORLD', 'leaving map/getting teleported'],
      ['AURA_INTERRUPT_FLAG_STEALTH_INVIS_CANCELS'],
      ['AURA_INTERRUPT_FLAG_INVULNERABILITY_BUFF_CANCELS'],
      ['AURA_INTERRUPT_FLAG_ENTER_WORLD'],
      ['AURA_INTERRUPT_FLAG_PVP_ACTIVE_CANCELS', 'removed by entering pvp combat'],
      ['AURA_INTERRUPT_FLAG_NON_PERIODIC_DAMAGE', 'removed by any direct damage'],
    ]),
  },
  {
    key: 'channel-interrupt-flags',
    name: 'Channel Interrupt Flags',
    definitionScope: 'spellflags:aura-interrupt',
    flags: bits([
      ['AURA_INTERRUPT_FLAG_HOSTILE_ACTION', 'removed when getting hit by a negative spell'],
      ['AURA_INTERRUPT_FLAG_DAMAGE', 'removed by any damage'],
      ['AURA_INTERRUPT_FLAG_ACTION', 'removed by any cast'],
      ['AURA_INTERRUPT_FLAG_MOVING', 'removed by any movement'],
      ['AURA_INTERRUPT_FLAG_TURNING', 'removed by any turning'],
      ['AURA_INTERRUPT_FLAG_ANIM_CANCELS', 'removed by anim'],
      ['AURA_INTERRUPT_FLAG_DISMOUNT', 'removed by unmounting'],
      ['AURA_INTERRUPT_FLAG_UNDERWATER_CANCELS', 'removed by entering water'],
      ['AURA_INTERRUPT_FLAG_ABOVEWATER_CANCELS', 'removed by leaving water'],
      ['AURA_INTERRUPT_FLAG_SHEATHING_CANCELS', 'removed by unsheathing'],
      ['AURA_INTERRUPT_FLAG_INTERACTING', 'talk to npc / loot? action on creature'],
      ['AURA_INTERRUPT_FLAG_LOOTING', 'mine/use/open action on gameobject'],
      ['AURA_INTERRUPT_FLAG_ATTACKING', 'removed by attack'],
      ['AURA_INTERRUPT_FLAG_ITEM_USE'],
      ['AURA_INTERRUPT_FLAG_DAMAGE_CHANNEL_DURATION'],
      ['AURA_INTERRUPT_FLAG_SHAPESHIFTING'],
      ['AURA_INTERRUPT_FLAG_ACTION_LATE'],
      ['AURA_INTERRUPT_FLAG_MOUNTING', 'removed by mounting'],
      ['AURA_INTERRUPT_FLAG_STANDING_CANCELS', 'removed by standing up (used by food and drink mostly and sleep/Fake Death like)'],
      ['AURA_INTERRUPT_FLAG_LEAVE_WORLD', 'leaving map/getting teleported'],
      ['AURA_INTERRUPT_FLAG_STEALTH_INVIS_CANCELS'],
      ['AURA_INTERRUPT_FLAG_INVULNERABILITY_BUFF_CANCELS'],
      ['AURA_INTERRUPT_FLAG_ENTER_WORLD'],
      ['AURA_INTERRUPT_FLAG_PVP_ACTIVE_CANCELS', 'removed by entering pvp combat'],
      ['AURA_INTERRUPT_FLAG_NON_PERIODIC_DAMAGE', 'removed by any direct damage'],
    ]),
  },
  {
    key: 'interrupt-flags',
    name: 'Interrupt Flags',
    flags: bits([
      ['SPELL_INTERRUPT_FLAG_MOVEMENT'],
      ['SPELL_INTERRUPT_FLAG_DAMAGE_PUSHBACK', 'Player only'],
      ['SPELL_INTERRUPT_FLAG_STUN', 'not implemented until more research - many creature spells miss it'],
      ['SPELL_INTERRUPT_FLAG_COMBAT'],
      ['SPELL_INTERRUPT_FLAG_DAMAGE_CANCELS', 'Player only'],
    ]),
  },
  {
    key: 'proc-flags',
    name: 'Proc Flags',
    flags: bits([
      ['PROC_FLAG_HEARTBEAT'], ['PROC_FLAG_KILL'], ['PROC_FLAG_DEAL_MELEE_SWING'], ['PROC_FLAG_TAKE_MELEE_SWING'],
      ['PROC_FLAG_DEAL_MELEE_ABILITY'], ['PROC_FLAG_TAKE_MELEE_ABILITY'], ['PROC_FLAG_DEAL_RANGED_ATTACK'], ['PROC_FLAG_TAKE_RANGED_ATTACK'],
      ['PROC_FLAG_DEAL_RANGED_ABILITY'], ['PROC_FLAG_TAKE_RANGED_ABILITY'], ['PROC_FLAG_DEAL_HELPFUL_ABILITY'], ['PROC_FLAG_TAKE_HELPFUL_ABILITY'],
      ['PROC_FLAG_DEAL_HARMFUL_ABILITY'], ['PROC_FLAG_TAKE_HARMFUL_ABILITY'], ['PROC_FLAG_DEAL_HELPFUL_SPELL'], ['PROC_FLAG_TAKE_HELPFUL_SPELL'],
      ['PROC_FLAG_DEAL_HARMFUL_SPELL'], ['PROC_FLAG_TAKE_HARMFUL_SPELL'], ['PROC_FLAG_DEAL_HARMFUL_PERIODIC'], ['PROC_FLAG_TAKE_HARMFUL_PERIODIC'],
      ['PROC_FLAG_TAKE_ANY_DAMAGE'], ['PROC_FLAG_ON_TRAP_ACTIVATION'], ['PROC_FLAG_MAIN_HAND_WEAPON_SWING'], ['PROC_FLAG_OFF_HAND_WEAPON_SWING'],
      ['PROC_FLAG_DEATH'],
    ]),
  },
  {
    key: 'proc-flags-ex',
    name: 'Proc Flags EX',
    flags: bits([
      ['PROC_EX_NORMAL_HIT'], ['PROC_EX_CRITICAL_HIT'], ['PROC_EX_MISS'], ['PROC_EX_RESIST'], ['PROC_EX_DODGE'], ['PROC_EX_PARRY'],
      ['PROC_EX_BLOCK'], ['PROC_EX_EVADE'], ['PROC_EX_IMMUNE'], ['PROC_EX_DEFLECT'], ['PROC_EX_ABSORB'], ['PROC_EX_REFLECT'],
      ['PROC_EX_INTERRUPT'], ['PROC_EX_RESERVED1'], ['PROC_EX_RESERVED2'], ['PROC_EX_RESERVED3'], ['PROC_EX_EX_TRIGGER_ALWAYS'],
      ['PROC_EX_EX_ONE_TIME_TRIGGER'], ['PROC_EX_PERIODIC_POSITIVE'], ['PROC_EX_CAST_END'], ['PROC_EX_MAGNET'],
    ]),
  },
  {
    key: 'school-mask',
    name: 'School Mask',
    flags: bits([
      ['SPELL_SCHOOL_MASK_NORMAL', 'Physical, Armor'], ['SPELL_SCHOOL_MASK_HOLY'], ['SPELL_SCHOOL_MASK_FIRE'], ['SPELL_SCHOOL_MASK_NATURE'],
      ['SPELL_SCHOOL_MASK_FROST'], ['SPELL_SCHOOL_MASK_SHADOW'], ['SPELL_SCHOOL_MASK_ARCANE'],
    ]),
    presets: [
      { name: 'SPELL_SCHOOL_MASK_MAGIC', decimal: '126' },
      { name: 'SPELL_SCHOOL_MASK_ALL', decimal: '127' },
    ],
  },
  {
    key: 'target-flags',
    name: 'Target Flags',
    flags: bits([
      ['TARGET_FLAG_UNUSED1'],
      ['TARGET_FLAG_UNIT', 'pguid'],
      ['TARGET_FLAG_UNIT_RAID', 'raid member'],
      ['TARGET_FLAG_UNIT_PARTY', 'party member'],
      ['TARGET_FLAG_ITEM', 'pguid'],
      ['TARGET_FLAG_SOURCE_LOCATION', '3xfloat'],
      ['TARGET_FLAG_DEST_LOCATION', '3xfloat'],
      ['TARGET_FLAG_UNIT_ENEMY', 'CanAttack == true'],
      ['TARGET_FLAG_UNIT_ALLY', 'CanAssist == true'],
      ['TARGET_FLAG_CORPSE_ENEMY', 'pguid, CanAssist == false'],
      ['TARGET_FLAG_UNIT_DEAD', 'skinning-like effects'],
      ['TARGET_FLAG_GAMEOBJECT', 'pguid'],
      ['TARGET_FLAG_TRADE_ITEM', 'pguid'],
      ['TARGET_FLAG_STRING', 'string'],
      ['TARGET_FLAG_LOCKED'],
      ['TARGET_FLAG_CORPSE_ALLY', 'pguid, CanAssist == true'],
      ['TARGET_FLAG_UNIT_MINIPET', 'pguid'],
    ]),
  },
] as const;
