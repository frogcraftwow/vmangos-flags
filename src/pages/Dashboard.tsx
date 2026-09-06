import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';

import { navigationSections, sectionLinks } from '../lib/navigation';



export default function Dashboard() {
  return <>
    <PageHeader title="Spell Dev Toolkit" />

    <section className="panel overview-generic">
      <Link className="overview-primary-link" to="/mask-calculator">Generic Mask <span>→</span></Link>
    </section>

    {navigationSections.map((section) => <section className="panel overview-group" key={section.label}>
      <div className="section-head"><h2>{section.label}</h2></div>
      {section.groups ? <div className="overview-subgroups">
        {section.groups.map((group) => <div className="overview-subgroup" key={group.label}>
          <h3>{group.label}</h3>
          <div className="tool-list">{group.links.map(([name, path]) => <Link key={path} to={path}>{name}<span>→</span></Link>)}</div>
        </div>)}
      </div> : <div className="tool-list">
        {sectionLinks(section).map(([name, path]) => <Link key={path} to={path}>{name}<span>→</span></Link>)}
      </div>}
    </section>)}
  </>;
}
