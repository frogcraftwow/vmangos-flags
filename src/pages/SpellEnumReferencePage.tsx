import { Link } from 'react-router-dom';
import { useMemo, useState, type ReactNode } from 'react';
import { PageHeader } from '../components/PageHeader';
import { MaskTool } from '../components/MaskTool';
import { ReferenceTool } from '../components/ReferenceTool';
import { auraModifierMiscValues } from '../data/auraModifiers';
import { targetCreatureTypes } from '../data/creatures';
import { skillLines } from '../data/skillLines';
import { auraTypeRows, spellEffectRows } from '../data/coreSpellEnums';
import { shapeshift } from '../data/shapeshift';
import { spellFlags } from '../data/spellFlags';
import { dispelTypes, mechanics, powerTypes, resourcePowerTypes, type ReferenceRow } from '../data/spellTemplateReferences';
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
  const creatureTypeRows: readonly ReferenceRow[] = targetCreatureTypes.map((row) => ({ value: row.bitIndex + 1, name: row.name }));
  const skillLineRows: readonly ReferenceRow[] = skillLines.map((row) => ({ value: row.id, name: row.name }));
  const refs: Record<AuxReferenceKey, ReactNode> = {
    'creature-type': <ReferenceTool title="Creature Type" rows={creatureTypeRows} definitionScope="spells:creature-type" />,
    'creature-type-mask': <MaskTool title="Creature Type Mask" flags={targetCreatureTypes} presetScope="reference:creature-type-mask" definitionScope="spells:target-creature-type" maxBits={32} />,
    'dispel-type': <ReferenceTool title="Dispel Type" rows={dispelTypes} definitionScope="spells:dispel-type" />,
    'equipped-item': <div className="panel linked-reference"><strong>Reference</strong><Link to="/spells/equipped-item-requirements">Open Equipped Item Requirements</Link></div>,
    mechanic: <ReferenceTool title="Mechanic" rows={mechanics} definitionScope="spells:mechanic" />,
    'mechanic-mask': <MaskTool title="Mechanic Mask" flags={mechanicMask} presetScope="reference:mechanic-mask" definitionScope="spells:mechanic" maxBits={32} />,
    'power-type': <ReferenceTool title="Power Type" rows={powerTypes} definitionScope="spells:power-type" />,
    'resource-power-type': <ReferenceTool title="Power Type (resource pools)" rows={resourcePowerTypes} definitionScope="spells:resource-power-type" />,
    'school-mask': <MaskTool title="Spell School Mask" flags={school.flags} presetScope="reference:school-mask" definitionScope="spellflags:school-mask" maxBits={8} />,
    shapeshift: <div className="panel linked-reference"><strong>Reference</strong><Link to="/shapeshift">Open Shapeshift</Link></div>,
    'spell-aura': <ReferenceTool title="AuraType" rows={auraTypeRows} definitionScope="spells:aura-type" valueLabel="ID" />,
    'spell-effect': <ReferenceTool title="SpellEffect" rows={spellEffectRows} definitionScope="spells:spell-effect-enum" valueLabel="ID" />,
    'skill-line': <ReferenceTool title="SkillLine" rows={skillLineRows} definitionScope="spells:skill-line" valueLabel="ID" />,
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
  return <><PageHeader title="Spell Aura References" description="Only AuraTypes whose auxiliary field needs an enum, mask, or external reference." /><Selector entries={enumBackedSpellAuras} selected={selected} onChange={setSelected} /><Reference entry={entry} /></>;
}

export function SpellEffectPage() {
  const [selected, setSelected] = useState(enumBackedSpellEffects[0].id);
  const entry = useMemo(() => enumBackedSpellEffects.find((item) => item.id === selected) ?? enumBackedSpellEffects[0], [selected]);
  return <><PageHeader title="Spell Effect References" description="Only SpellEffects whose auxiliary field needs an enum, mask, or external reference." /><Selector entries={enumBackedSpellEffects} selected={selected} onChange={setSelected} /><Reference entry={entry} /></>;
}
