export type NavLink = readonly [label: string, path: string];
export type NavSection = { label: string; links: readonly NavLink[] };

const alpha = (a: NavLink, b: NavLink) => a[0].localeCompare(b[0], undefined, { sensitivity: 'base' });
const links = (...items: NavLink[]) => items.sort(alpha);

const sections: NavSection[] = [
  {
    label: 'Creatures',
    links: links(['Creature Immunities', '/creatures']),
  },
  {
    label: 'Skill Lines',
    links: links(['Skill Lines', '/skill-lines']),
  },
  {
    label: 'Spells',
    links: links(
      ['Aura Interrupt Flags', '/spell-flags?group=aura-interrupt-flags'],
      ['Aura State', '/spells/aura-state'],
      ['Channel Interrupt Flags', '/spell-flags?group=channel-interrupt-flags'],
      ['Damage Class', '/spells/reference/damage-class'],
      ['Dispel Type', '/spells/reference/dispel-type'],
      ['Equipped Item Requirements', '/spells/equipped-item-requirements'],
      ['Interrupt Flags', '/spell-flags?group=interrupt-flags'],
      ['Mechanic', '/spells/reference/mechanic'],
      ['Power Type', '/spells/reference/power-type'],
      ['Prevention Type', '/spells/reference/prevention-type'],
      ['Proc Flags', '/spells/proc-flags'],
      ['School', '/spells/reference/school'],
      ['School Mask', '/spell-flags?group=school-mask'],
      ['Shapeshift', '/shapeshift'],
      ['Spell Attributes', '/spells/spell-attributes'],
      ['Spell Aura', '/spells/spell-aura'],
      ['Spell Effect', '/spells/spell-effect'],
      ['Spell Family Flags', '/spell-family-flags'],
      ['Spell Family Name', '/spells/reference/spell-family-name'],
      ['Target Creature Type', '/spells/target-creature-type'],
      ['Target Flags', '/spell-flags?group=target-flags'],
    ),
  },
];

export const navigationSections = sections.sort((a, b) => a.label.localeCompare(b.label, undefined, { sensitivity: 'base' }));
