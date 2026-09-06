import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';

import { navigationSections } from '../lib/navigation';



export default function Dashboard() {
  return <>
    <PageHeader title="Spell Dev Toolkit" />

    <section className="panel overview-generic">
      <Link className="overview-primary-link" to="/mask-calculator">Generic Mask <span>→</span></Link>
    </section>

    {navigationSections.map((group) => <section className="panel overview-group" key={group.label}>
      <div className="section-head"><h2>{group.label}</h2></div>
      <div className="tool-list">
        {group.links.map(([name, path]) => <Link key={path} to={path}>{name}<span>→</span></Link>)}
      </div>
    </section>)}
  </>;
}
