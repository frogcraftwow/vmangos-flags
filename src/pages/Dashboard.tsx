import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { spellFamilyFlags } from '../data/spellFamilyFlags';
import { spellAttributes } from '../data/spellAttributes';
import { useProfiles } from '../context/ProfileContext';

const tools = [
  ['Generic Mask', '/mask-calculator'],
  ['Spell Family Flags', '/spell-family-flags'],
  ['School Mask', '/spell-flags?group=school-mask'],
  ['SpellAttributes', '/spell-flags?group=spell-attributes'],
  ['SpellAttributesEx', '/spell-flags?group=spell-attributes-ex'],
  ['SpellAttributesEx2', '/spell-flags?group=spell-attributes-ex2'],
  ['SpellAttributesEx3', '/spell-flags?group=spell-attributes-ex3'],
  ['SpellAttributesEx4', '/spell-flags?group=spell-attributes-ex4'],
  ['Proc Flags', '/spell-flags?group=proc-flags'],
  ['Proc Flags EX', '/spell-flags?group=proc-flags-ex'],
  ['Shapeshift', '/shapeshift'],
  ['Weapons', '/weapons'],
  ['Creatures', '/creatures'],
  ['Skill Lines', '/skill-lines'],
  ['Profile Manager', '/profiles'],
] as const;

export default function Dashboard() {
  const { activeProfile } = useProfiles();
  const overrideCount = Object.keys(activeProfile.overrides.spellFamilyFlags).length;
  const attributeCount = Object.values(spellAttributes).reduce((total, rows) => total + rows.length, 0);

  return <>
    <PageHeader title="Spell Dev Toolkit" />

    <section className="panel">
      <div className="mask-results dashboard-results">
        <Stat label="Profile" value={activeProfile.name} />
        <Stat label="Family Overrides" value={String(overrideCount)} />
        <Stat label="Original Family Mappings" value={String(spellFamilyFlags.length)} />
        <Stat label="Attribute Flags" value={String(attributeCount)} />
      </div>
    </section>

    <section className="panel">
      <div className="section-head"><h2>Tools</h2></div>
      <div className="tool-list">
        {tools.map(([name, path]) => <Link key={path} to={path}>{name}<span>→</span></Link>)}
      </div>
    </section>
  </>;
}

function Stat({ label, value }: { label: string; value: string }) {
  return <div><span>{label}</span><strong className="mono">{value}</strong></div>;
}
