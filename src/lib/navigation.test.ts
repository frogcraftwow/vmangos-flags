import { describe, expect, it } from 'vitest';
import { navigationSections } from './navigation';

describe('navigation structure', () => {
  it('keeps top-level sections alphabetically sorted by owned data', () => {
    const labels = navigationSections.map((section) => section.label);
    expect(labels).toEqual(['Creatures', 'Skill Lines', 'Spells']);
  });

  it('keeps spell tools alphabetically sorted and consolidated', () => {
    const spells = navigationSections.find((section) => section.label === 'Spells');
    const labels = spells?.links.map(([label]) => label) ?? [];
    expect(labels).toEqual([...labels].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })));
    expect(labels).toContain('Equipped Item Requirements');
    expect(labels).toContain('Spell Attributes');
    expect(labels).toContain('Proc Flags');
    expect(labels).toContain('Spell Aura');
    expect(labels).toContain('Spell Effect');
    expect(labels).toContain('Target Creature Type');
    expect(labels).not.toContain('Proc Flags EX');
    expect(labels).not.toContain('SpellAttributesEx');
    expect(labels).not.toContain('Weapons');
  });
});
