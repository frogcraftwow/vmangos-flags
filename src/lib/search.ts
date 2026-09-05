import { spellFamilyFlags } from '../data/spellFamilyFlags';
import { spellAttributes } from '../data/spellAttributes';
import { skillLines } from '../data/skillLines';
import { weapons } from '../data/weapons';
import { shapeshift } from '../data/shapeshift';
import { spellFlags } from '../data/spellFlags';
import { creatureImmunities } from '../data/creatures';

export type SearchResult = { title: string; subtitle: string; path: string; kind: string };

const attributeRoutes: Record<keyof typeof spellAttributes, string> = {
  SpellAttributes: '/spell-flags?group=spell-attributes',
  SpellAttributesEx: '/spell-flags?group=spell-attributes-ex',
  SpellAttributesEx2: '/spell-flags?group=spell-attributes-ex2',
  SpellAttributesEx3: '/spell-flags?group=spell-attributes-ex3',
  SpellAttributesEx4: '/spell-flags?group=spell-attributes-ex4',
};

function text(...parts: unknown[]) {
  return parts.map((part) => String(part ?? '')).join(' ').toLowerCase();
}

export function globalSearch(query: string, limit = 80): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const out: SearchResult[] = [];
  const add = (result: SearchResult) => { if (out.length < limit) out.push(result); };

  for (const row of spellFamilyFlags) {
    if (text(row.ability, row.comment, row.className, row.familyId, row.bitIndex).includes(q)) {
      add({
        title: row.ability,
        subtitle: `${row.className} ${row.familyId}:${row.bitIndex}${row.comment ? ` · ${row.comment}` : ''}`,
        path: `/spell-family-flags?family=${row.familyId}`,
        kind: 'Family flag',
      });
    }
  }

  for (const [enumName, rows] of Object.entries(spellAttributes) as [keyof typeof spellAttributes, (typeof spellAttributes)[keyof typeof spellAttributes]][]) {
    for (const row of rows) {
      if (text(enumName, row.name, row.value, row.comment).includes(q)) {
        add({
          title: row.name,
          subtitle: `${enumName} = ${row.value}${row.comment ? ` · ${row.comment}` : ''}`,
          path: attributeRoutes[enumName],
          kind: enumName,
        });
      }
    }
  }

  for (const group of spellFlags) {
    for (const row of group.flags) {
      if (text(group.name, row.name, row.bitIndex, row.decimal, row.hex).includes(q)) {
        add({ title: row.name, subtitle: `${group.name} · bit ${row.bitIndex}`, path: `/spell-flags?group=${group.key}`, kind: 'Spell flag' });
      }
    }
  }

  for (const row of creatureImmunities) {
    if (text(row.name, row.bitIndex, row.decimal, row.hex).includes(q)) {
      add({ title: row.name, subtitle: `Creature Immunities · bit ${row.bitIndex}`, path: '/creatures', kind: 'Creature mask' });
    }
  }

  for (const row of shapeshift) {
    if (text(row.id, row.form, row.bitIndex, row.decimal, row.hex).includes(q)) {
      add({ title: row.form, subtitle: `ID ${row.id} · bit ${row.bitIndex}`, path: '/shapeshift', kind: 'Shapeshift' });
    }
  }

  for (const row of skillLines) {
    if (text(row.id, row.name).includes(q)) {
      add({ title: row.name, subtitle: `Skill line ${row.id}`, path: `/skill-lines?q=${encodeURIComponent(query)}`, kind: 'Skill line' });
    }
  }

  for (const row of weapons) {
    if (text(row.weaponType, row.subClass, row.bitmask, row.hex).includes(q)) {
      add({ title: row.weaponType, subtitle: `SubClass ${row.subClass} · ${row.hex}`, path: '/weapons', kind: 'Weapon' });
    }
  }

  return out;
}
