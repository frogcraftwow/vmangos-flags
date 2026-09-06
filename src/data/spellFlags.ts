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

const auraInterruptFlags = bits([
  ['AURA_INTERRUPT_HOSTILE_ACTION_RECEIVED_CANCELS', 'on being hit by spell from hostile caster'],
  ['AURA_INTERRUPT_DAMAGE_CANCELS'],
  ['AURA_INTERRUPT_ACTION_CANCELS', 'removed at the beginning of an action'],
  ['AURA_INTERRUPT_MOVING_CANCELS'],
  ['AURA_INTERRUPT_TURNING_CANCELS'],
  ['AURA_INTERRUPT_ANIM_CANCELS', 'used by Feign Death'],
  ['AURA_INTERRUPT_DISMOUNT_CANCELS'],
  ['AURA_INTERRUPT_UNDER_WATER_CANCELS', 'removed by entering water'],
  ['AURA_INTERRUPT_ABOVE_WATER_CANCELS', 'removed by leaving water'],
  ['AURA_INTERRUPT_SHEATHING_CANCELS'],
  ['AURA_INTERRUPT_INTERACTING_CANCELS', 'interact with NPC'],
  ['AURA_INTERRUPT_LOOTING_CANCELS', 'interact with gameobject or looting'],
  ['AURA_INTERRUPT_ATTACKING_CANCELS'],
  ['AURA_INTERRUPT_ITEM_USE_CANCELS'],
  ['AURA_INTERRUPT_DAMAGE_CHANNEL_DURATION', 'only assigned in channel flags'],
  ['AURA_INTERRUPT_SHAPESHIFTING_CANCELS'],
  ['AURA_INTERRUPT_ACTION_CANCELS_LATE', 'removed at the completion of an action'],
  ['AURA_INTERRUPT_MOUNT_CANCELS'],
  ['AURA_INTERRUPT_STANDING_CANCELS', 'used by food/drink and sleep/Feign Death-like spells'],
  ['AURA_INTERRUPT_LEAVE_WORLD_CANCELS'],
  ['AURA_INTERRUPT_STEALTH_INVIS_CANCELS'],
  ['AURA_INTERRUPT_INVULNERABILITY_BUFF_CANCELS'],
  ['AURA_INTERRUPT_ENTER_WORLD_CANCELS'],
]);

export const spellFlags: readonly SpellFlagGroup[] = [
  { key: 'aura-interrupt-flags', name: 'Aura Interrupt Flags', definitionScope: 'spellflags:aura-interrupt', flags: auraInterruptFlags },
  { key: 'channel-interrupt-flags', name: 'Channel Interrupt Flags', definitionScope: 'spellflags:aura-interrupt', flags: auraInterruptFlags },
  {
    key: 'interrupt-flags', name: 'Interrupt Flags', flags: bits([
      ['SPELL_INTERRUPT_FLAG_MOVEMENT', 'Movement'],
      ['SPELL_INTERRUPT_FLAG_DAMAGE_PUSHBACK', 'Damage pushback (Player)'],
      ['SPELL_INTERRUPT_FLAG_STUN', 'Stun'],
      ['SPELL_INTERRUPT_FLAG_COMBAT', 'Combat'],
      ['SPELL_INTERRUPT_FLAG_DAMAGE_CANCELS', 'Damage cancels (Player)'],
    ]),
  },
  {
    key: 'proc-flags', name: 'Proc Flags', flags: bits([
      ['PROC_FLAG_HEARTBEAT', 'On tick'], ['PROC_FLAG_KILL'], ['PROC_FLAG_DEAL_MELEE_SWING'], ['PROC_FLAG_TAKE_MELEE_SWING'],
      ['PROC_FLAG_DEAL_MELEE_ABILITY'], ['PROC_FLAG_TAKE_MELEE_ABILITY'], ['PROC_FLAG_DEAL_RANGED_ATTACK'], ['PROC_FLAG_TAKE_RANGED_ATTACK'],
      ['PROC_FLAG_DEAL_RANGED_ABILITY'], ['PROC_FLAG_TAKE_RANGED_ABILITY'], ['PROC_FLAG_DEAL_HELPFUL_ABILITY'], ['PROC_FLAG_TAKE_HELPFUL_ABILITY'],
      ['PROC_FLAG_DEAL_HARMFUL_ABILITY'], ['PROC_FLAG_TAKE_HARMFUL_ABILITY'], ['PROC_FLAG_DEAL_HELPFUL_SPELL'], ['PROC_FLAG_TAKE_HELPFUL_SPELL'],
      ['PROC_FLAG_DEAL_HARMFUL_SPELL'], ['PROC_FLAG_TAKE_HARMFUL_SPELL'], ['PROC_FLAG_DEAL_HARMFUL_PERIODIC'], ['PROC_FLAG_TAKE_HARMFUL_PERIODIC'],
      ['PROC_FLAG_TAKEN_ANY_DAMAGE'], ['PROC_FLAG_ON_TRAP_ACTIVATION'], ['PROC_FLAG_MAIN_HAND_WEAPON_SWING'], ['PROC_FLAG_OFF_HAND_WEAPON_SWING'],
    ]),
  },
  {
    key: 'proc-flags-ex', name: 'Proc Flags EX', flags: bits([
      ['PROC_EX_NORMAL_HIT'], ['PROC_EX_CRITICAL_HIT'], ['PROC_EX_MISS'], ['PROC_EX_RESIST'], ['PROC_EX_DODGE'], ['PROC_EX_PARRY'],
      ['PROC_EX_BLOCK'], ['PROC_EX_EVADE'], ['PROC_EX_IMMUNE'], ['PROC_EX_DEFLECT'], ['PROC_EX_ABSORB'], ['PROC_EX_REFLECT'],
      ['PROC_EX_INTERRUPT'], ['PROC_EX_RESERVED1'], ['PROC_EX_RESERVED2'], ['PROC_EX_RESERVED3'], ['PROC_EX_EX_TRIGGER_ALWAYS'],
      ['PROC_EX_NO_PERIODIC'], ['PROC_EX_PERIODIC_POSITIVE'], ['PROC_EX_CAST_END'],
    ]),
  },
  {
    key: 'school-mask', name: 'Spell School Mask', flags: bits([
      ['SPELL_SCHOOL_MASK_NORMAL', 'Physical, Armor'], ['SPELL_SCHOOL_MASK_HOLY'], ['SPELL_SCHOOL_MASK_FIRE'], ['SPELL_SCHOOL_MASK_NATURE'],
      ['SPELL_SCHOOL_MASK_FROST'], ['SPELL_SCHOOL_MASK_SHADOW'], ['SPELL_SCHOOL_MASK_ARCANE'],
    ]),
    presets: [
      { name: 'SPELL_SCHOOL_MASK_MAGIC', decimal: '126' },
      { name: 'SPELL_SCHOOL_MASK_ALL', decimal: '127' },
    ],
  },
  {
    key: 'target-flags', name: 'Target Flags', flags: bits([
      ['TARGET_FLAG_UNUSED1', 'not used in spells; can be set dynamically'],
      ['TARGET_FLAG_UNIT', 'pguid'], ['TARGET_FLAG_UNIT_RAID'], ['TARGET_FLAG_UNIT_PARTY'], ['TARGET_FLAG_ITEM', 'pguid'],
      ['TARGET_FLAG_SOURCE_LOCATION', '3 floats'], ['TARGET_FLAG_DEST_LOCATION', '3 floats'], ['TARGET_FLAG_UNIT_ENEMY', 'CanAttack == true'],
      ['TARGET_FLAG_UNIT_ALLY', 'CanAssist == true'], ['TARGET_FLAG_CORPSE_ENEMY', 'pguid, CanAssist == false'], ['TARGET_FLAG_UNIT_DEAD', 'skinning-like effects'],
      ['TARGET_FLAG_GAMEOBJECT', 'pguid'], ['TARGET_FLAG_TRADE_ITEM', 'pguid'], ['TARGET_FLAG_STRING', 'string'], ['TARGET_FLAG_LOCKED'],
      ['TARGET_FLAG_CORPSE_ALLY', 'pguid, CanAssist == true'], ['TARGET_FLAG_UNIT_MINIPET', 'pguid'],
    ]),
  },
] as const;
