import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { spellFamilyFlags } from '../data/spellFamilyFlags';
import { spellAttributes } from '../data/spellAttributes';
import { spellDefines } from '../data/spellDefines';
import { useProfiles } from '../context/ProfileContext';

const tools = [
  ['Spell Family Flags', '/spell-family-flags'],
  ['Spell Flags', '/spell-flags'],
  ['Shapeshift', '/shapeshift'],
  ['Weapons', '/weapons'],
  ['Generic Mask', '/mask-calculator'],
  ['SpellAttributes', '/spell-attributes'],
  ['SpellAttributesEx', '/spell-attributes-ex'],
  ['SpellAttributesEx2', '/spell-attributes-ex2'],
  ['SpellAttributesEx3', '/spell-attributes-ex3'],
  ['SpellAttributesEx4', '/spell-attributes-ex4'],
  ['SpellAttributesCustom', '/spell-attributes-custom'],
  ['SpellAttributesInternal', '/spell-attributes-internal'],
  ['SpellCategories', '/spell-categories'],
  ['SpellCategoryFlags', '/spell-category-flags'],
  ['SpellSpecific', '/spell-specific'],
  ['Skill Lines', '/skill-lines'],
  ['Profile Manager', '/profiles'],
] as const;

export default function Dashboard() {
  const { activeProfile } = useProfiles();
  const overrideCount = Object.keys(activeProfile.overrides.spellFamilyFlags).length;
  const enumCount = [...Object.values(spellAttributes), ...Object.values(spellDefines)].reduce((total, rows) => total + rows.length, 0);

  return <>
    <PageHeader title="Spell Dev Toolkit" />

    <section className="panel">
      <div className="mask-results dashboard-results">
        <Stat label="Profile" value={activeProfile.name} />
        <Stat label="Family Overrides" value={String(overrideCount)} />
        <Stat label="Original Family Mappings" value={String(spellFamilyFlags.length)} />
        <Stat label="Enum Entries" value={String(enumCount)} />
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
