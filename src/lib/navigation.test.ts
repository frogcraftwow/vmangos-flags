import { describe, expect, it } from 'vitest';
import { navigationSections, sectionLinks } from './navigation';

describe('navigation structure', () => {
  it('keeps the main domains stable', () => {
    expect(navigationSections.map((section) => section.label)).toEqual(['Creatures', 'Skill Lines', 'Spells']);
  });

  it('places DBC lookups under Core fields using readable labels', () => {
    const spells = navigationSections.find((section) => section.label === 'Spells');
    const core = spells?.groups?.find((group) => group.label === 'Core fields');
    expect(core?.links).toEqual(expect.arrayContaining([
      ['Casting Time Index', '/spells/reference/spell-cast-times'],
      ['Category', '/spells/reference/spell-category'],
      ['Duration Index', '/spells/reference/spell-duration'],
      ['Effect Radius Index 1 / 2 / 3', '/spells/reference/spell-radius'],
      ['Range Index', '/spells/reference/spell-range'],
    ]));
    expect(spells?.groups?.some((group) => group.label === 'DBC references')).toBe(false);
  });

  it('groups spell tools without obsolete Aura State / Spell Family Name entries', () => {
    const spells = navigationSections.find((section) => section.label === 'Spells');
    const labels = spells ? sectionLinks(spells).map(([label]) => label) : [];
    expect(labels).toContain('Equipped Item Requirements');
    expect(labels).toContain('Spell Attributes');
    expect(labels).toContain('Proc Flags');
    expect(labels).toContain('Spell Aura References');
    expect(labels).toContain('Spell Effect References');
    expect(labels).toContain('Spell Family Flags');
    expect(labels).toContain('Spell School');
    expect(labels).toContain('Spell School Mask');
    expect(labels).not.toContain('Aura State');
    expect(labels).not.toContain('Spell Family Name');
  });
});
