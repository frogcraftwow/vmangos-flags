export type NavLink = readonly [label: string, path: string];
export type NavGroup = { label: string; links: readonly NavLink[] };
export type NavSection = { label: string; links?: readonly NavLink[]; groups?: readonly NavGroup[] };

const alpha = (a: NavLink, b: NavLink) => a[0].localeCompare(b[0], undefined, { sensitivity: 'base' });
const links = (...items: NavLink[]) => items.sort(alpha);

export const sectionLinks = (section: NavSection): readonly NavLink[] =>
  section.links ?? section.groups?.flatMap((group) => group.links) ?? [];

export const navigationSections: readonly NavSection[] = [
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
    groups: [
      {
        label: 'Core fields',
        links: links(
          ['Damage Class', '/spells/reference/damage-class'],
          ['Dispel Type', '/spells/reference/dispel-type'],
          ['Mechanic', '/spells/reference/mechanic'],
          ['Power Type', '/spells/reference/power-type'],
          ['Prevention Type', '/spells/reference/prevention-type'],
          ['Spell School', '/spells/reference/spell-school'],
        ),
      },
      {
        label: 'Flags & targeting',
        links: links(
          ['Aura Interrupt Flags', '/spell-flags?group=aura-interrupt-flags'],
          ['Channel Interrupt Flags', '/spell-flags?group=channel-interrupt-flags'],
          ['Interrupt Flags', '/spell-flags?group=interrupt-flags'],
          ['Proc Flags', '/spells/proc-flags'],
          ['Spell School Mask', '/spell-flags?group=school-mask'],
          ['Target Creature Type', '/spells/target-creature-type'],
          ['Target Flags', '/spell-flags?group=target-flags'],
        ),
      },
      {
        label: 'Requirements',
        links: links(
          ['Equipped Item Requirements', '/spells/equipped-item-requirements'],
          ['Shapeshift', '/shapeshift'],
        ),
      },
      {
        label: 'Effects & auras',
        links: links(
          ['Spell Aura References', '/spells/spell-aura'],
          ['Spell Effect References', '/spells/spell-effect'],
        ),
      },
      {
        label: 'Attributes & family',
        links: links(
          ['Spell Attributes', '/spells/spell-attributes'],
          ['Spell Family Flags', '/spell-family-flags'],
        ),
      },
    ],
  },
];
