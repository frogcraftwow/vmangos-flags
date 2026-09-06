import { useMemo, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { MaskTool } from '../components/MaskTool';
import { ReferenceTool } from '../components/ReferenceTool';
import { auraModifierMiscValues } from '../data/auraModifiers';
import { targetCreatureTypes } from '../data/creatures';
import { shapeshift } from '../data/shapeshift';
import { spellFlags } from '../data/spellFlags';
import { auraStates, dispelTypes, mechanics, powerTypes } from '../data/spellTemplateReferences';
import { enumBackedSpellAuras, enumBackedSpellEffects, mechanicsAsMask, stats, type AuxReferenceKey, type EnumBackedEntry } from '../data/spellAuxiliaryEnums';

function Selector({ entries, selected, onChange }: { entries: readonly EnumBackedEntry[]; selected: number; onChange: (id: number) => void }) {
  return <section className="panel enum-backed-selector">
    <label>Entry
      <select value={selected} onChange={(e: any) => onChange(Number(e.target.value))}>
        {entries.map((entry) => <option key={entry.id} value={entry.id}>{entry.id} — {entry.name}</option>)}
      </select>
    </label>
  </section>;
}

function Reference({ entry }: { entry: EnumBackedEntry }) {
  const school = spellFlags.find((group) => group.key === 'school-mask')!;
  const mechanicMask = mechanicsAsMask(mechanics);
  const refs: Record<AuxReferenceKey, ReactNode> = {
    'aura-state': <ReferenceTool title="Aura State" rows={auraStates} definitionScope="spells:aura-state" />,
    'creature-type-mask': <MaskTool title="Creature Type Mask" flags={targetCreatureTypes} presetScope="reference:creature-type-mask" definitionScope="spells:target-creature-type" maxBits={32} />,
    'dispel-type': <ReferenceTool title="Dispel Type" rows={dispelTypes} definitionScope="spells:dispel-type" />,
    'equipped-item': <div className="panel linked-reference"><strong>Reference</strong><Link to="/spells/equipped-item-requirements">Open Equipped Item Requirements</Link></div>,
    mechanic: <ReferenceTool title="Mechanic" rows={mechanics} definitionScope="spells:mechanic" />,
    'mechanic-mask': <MaskTool title="Mechanic Mask" flags={mechanicMask} presetScope="reference:mechanic-mask" definitionScope="spells:mechanic" maxBits={32} />,
    'power-type': <ReferenceTool title="Power Type" rows={powerTypes} definitionScope="spells:power-type" />,
    'school-mask': <MaskTool title="School Mask" flags={school.flags} presetScope="reference:school-mask" definitionScope="spellflags:school-mask" maxBits={8} />,
    shapeshift: <div className="panel linked-reference"><strong>Reference</strong><Link to="/shapeshift">Open Shapeshift</Link></div>,
    'spell-aura': <div className="panel linked-reference"><strong>Reference</strong><Link to="/spells/spell-aura">Open Spell Aura</Link></div>,
    'spell-effect': <div className="panel linked-reference"><strong>Reference</strong><Link to="/spells/spell-effect">Open Spell Effect</Link></div>,
    'spellmod-op': <ReferenceTool title="SpellModOp" rows={auraModifierMiscValues} definitionScope="spells:spellmod-op" valueLabel="MiscValue" />,
    stat: <ReferenceTool title="Stats" rows={stats} definitionScope="spells:stats" />,
  };
  return <>
    <section className="panel enum-explanation">
      <div><span>ID</span><strong className="mono">{entry.id}</strong></div>
      <div><span>Name</span><strong className="mono">{entry.name}</strong></div>
      <div><span>Field</span><strong className="mono">{entry.field}</strong></div>
      <p>{entry.explanation}</p>
    </section>
    {refs[entry.reference]}
  </>;
}

export function SpellAuraPage() {
  const [selected, setSelected] = useState(enumBackedSpellAuras[0].id);
  const entry = useMemo(() => enumBackedSpellAuras.find((item) => item.id === selected) ?? enumBackedSpellAuras[0], [selected]);
  return <><PageHeader title="Spell Aura" /><Selector entries={enumBackedSpellAuras} selected={selected} onChange={setSelected} /><Reference entry={entry} /></>;
}

export function SpellEffectPage() {
  const [selected, setSelected] = useState(enumBackedSpellEffects[0].id);
  const entry = useMemo(() => enumBackedSpellEffects.find((item) => item.id === selected) ?? enumBackedSpellEffects[0], [selected]);
  return <><PageHeader title="Spell Effect" /><Selector entries={enumBackedSpellEffects} selected={selected} onChange={setSelected} /><Reference entry={entry} /></>;
}
