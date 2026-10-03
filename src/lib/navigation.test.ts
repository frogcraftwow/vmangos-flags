import { describe, expect, it } from 'vitest';
import { navigationSections, sectionLinks } from './navigation';

describe('navigation structure', () => {
  it('keeps the main domains stable', () => {
    expect(navigationSections.map((section) => section.label)).toEqual(['Creatures', 'Skill Lines', 'Spells']);
  });

  it('places DBC lookups under Core fields using spell_template column names', () => {
    const spells = navigationSections.find((section) => section.label === 'Spells');
    const core = spells?.groups?.find((group) => group.label === 'Core fields');
    expect(core?.links).toEqual(expect.arrayContaining([
      ['castingTimeIndex', '/spells/reference/spell-cast-times'],
      ['category', '/spells/reference/spell-category'],
      ['durationIndex', '/spells/reference/spell-duration'],
      ['effectRadiusIndex1 / 2 / 3', '/spells/reference/spell-radius'],
      ['rangeIndex', '/spells/reference/spell-range'],
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
