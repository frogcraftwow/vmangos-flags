import { spellFamilyFlags } from '../data/spellFamilyFlags';
import { spellAttributes } from '../data/spellAttributes';
import { skillLines } from '../data/skillLines';
import { shapeshift } from '../data/shapeshift';
import { spellFlags } from '../data/spellFlags';
import { creatureImmunities, targetCreatureTypes } from '../data/creatures';
import { auraModifierMiscValues } from '../data/auraModifiers';
import { auraStates, spellReferenceGroups } from '../data/spellTemplateReferences';
import { inventoryTypes, itemClasses, itemSubclassesByClass } from '../data/equippedItems';
import { enumBackedSpellAuras, enumBackedSpellEffects, stats } from '../data/spellAuxiliaryEnums';

export type SearchResult = { title: string; subtitle: string; path: string; kind: string };
function text(...parts: unknown[]) { return parts.map((part) => String(part ?? '')).join(' ').toLowerCase(); }

export function globalSearch(query: string, limit = 80): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const out: SearchResult[] = [];
  const seen = new Set<string>();
  const add = (result: SearchResult) => {
    const key = `${result.path}|${result.title}|${result.subtitle}`;
    if (out.length < limit && !seen.has(key)) { seen.add(key); out.push(result); }
  };

  for (const row of spellFamilyFlags) if (text(row.ability, row.comment, row.className, row.familyId, row.bitIndex).includes(q)) add({ title: row.ability, subtitle: `${row.className} · SpellFamily ${row.familyId} · bit ${row.bitIndex}`, path: `/spell-family-flags?family=${row.familyId}`, kind: 'Spell Family Flag' });

  for (const [enumName, rows] of Object.entries(spellAttributes)) for (const row of rows) if (text(enumName, row.name, row.value, row.comment).includes(q)) add({ title: row.name, subtitle: `${enumName} = ${row.value}`, path: '/spells/spell-attributes', kind: 'Spell Attributes' });

  for (const group of spellFlags) for (const row of group.flags) if (text(group.name, row.name, row.comment, row.bitIndex, row.decimal, row.hex).includes(q)) {
    const path = group.key === 'proc-flags' || group.key === 'proc-flags-ex' ? '/spells/proc-flags' : `/spell-flags?group=${group.key}`;
    add({ title: row.name, subtitle: `${group.name} · bit ${row.bitIndex}`, path, kind: group.name });
  }

  for (const [groupKey, config] of Object.entries(spellReferenceGroups)) for (const row of config.rows) if (text(config.title, row.value, row.name, row.comment).includes(q)) add({ title: row.name, subtitle: `${config.title} · ${row.value}`, path: `/spells/reference/${groupKey}`, kind: config.title });

  for (const row of itemClasses) if (text('Equipped Item Requirements', row.value, row.name, row.comment).includes(q)) add({ title: row.name, subtitle: `EquippedItemClass · ${row.value}`, path: '/spells/equipped-item-requirements', kind: 'Equipped Item' });
  for (const row of inventoryTypes) if (text('EquippedItemInventoryTypeMask', row.bitIndex, row.name, row.comment).includes(q)) add({ title: row.name, subtitle: `InventoryTypeMask · bit ${row.bitIndex}`, path: '/spells/equipped-item-requirements', kind: 'Equipped Item' });
  for (const [classId, rows] of Object.entries(itemSubclassesByClass)) for (const row of rows) if (text(classId, row.bitIndex, row.name, row.comment).includes(q)) add({ title: row.name, subtitle: `SubClassMask · class ${classId} · bit ${row.bitIndex}`, path: '/spells/equipped-item-requirements', kind: 'Equipped Item' });

  for (const row of enumBackedSpellAuras) if (text(row.id, row.name, row.field, row.explanation).includes(q)) add({ title: row.name, subtitle: `Aura ${row.id} · ${row.field}`, path: '/spells/spell-aura', kind: 'Spell Aura' });
  for (const row of enumBackedSpellEffects) if (text(row.id, row.name, row.field, row.explanation).includes(q)) add({ title: row.name, subtitle: `Effect ${row.id} · ${row.field}`, path: '/spells/spell-effect', kind: 'Spell Effect' });
  for (const row of auraModifierMiscValues) if (text(row.value, row.name, row.comment).includes(q)) add({ title: row.name, subtitle: `SpellModOp ${row.value}`, path: '/spells/spell-aura', kind: 'SpellModOp' });
  for (const row of auraStates) if (text(row.value, row.name, row.comment).includes(q)) add({ title: row.name, subtitle: `Aura State · ${row.value}`, path: '/spells/aura-state', kind: 'Aura State' });
  for (const row of stats) if (text(row.value, row.name, row.comment).includes(q)) add({ title: row.name, subtitle: `Stat · ${row.value}`, path: '/spells/spell-aura', kind: 'Stat' });

  for (const row of creatureImmunities) if (text(row.name, row.bitIndex, row.decimal, row.hex).includes(q)) add({ title: row.name, subtitle: `Creature Immunities · bit ${row.bitIndex}`, path: '/creatures', kind: 'Creature Mask' });
  for (const row of targetCreatureTypes) if (text(row.name, row.bitIndex).includes(q)) add({ title: row.name, subtitle: `Target Creature Type · bit ${row.bitIndex}`, path: '/spells/target-creature-type', kind: 'Spell Mask' });

  for (const row of shapeshift) if (text(row.id, row.form, row.bitIndex, row.decimal, row.hex).includes(q)) add({ title: row.form, subtitle: `Shapeshift · ID ${row.id} · bit ${row.bitIndex}`, path: '/shapeshift', kind: 'Shapeshift' });
  for (const row of skillLines) if (text(row.id, row.name).includes(q)) add({ title: row.name, subtitle: `Skill Line ${row.id}`, path: `/skill-lines?q=${encodeURIComponent(query)}`, kind: 'Skill Line' });

  return out;
}
