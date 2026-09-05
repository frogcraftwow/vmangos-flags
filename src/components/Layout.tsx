import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useProfiles } from '../context/ProfileContext';
import { GlobalSearch } from './GlobalSearch';

const sections = [
  {
    label: 'Core',
    links: [
      ['Overview', '/'],
      ['Generic Mask', '/mask-calculator'],
      ['Spell Family Flags', '/spell-family-flags'],
    ],
  },
  {
    label: 'Spell Flags',
    links: [
      ['School Mask', '/spell-flags?group=school-mask'],
      ['SpellAttributes', '/spell-flags?group=spell-attributes'],
      ['SpellAttributesEx', '/spell-flags?group=spell-attributes-ex'],
      ['SpellAttributesEx2', '/spell-flags?group=spell-attributes-ex2'],
      ['SpellAttributesEx3', '/spell-flags?group=spell-attributes-ex3'],
      ['SpellAttributesEx4', '/spell-flags?group=spell-attributes-ex4'],
      ['Proc Flags', '/spell-flags?group=proc-flags'],
      ['Proc Flags EX', '/spell-flags?group=proc-flags-ex'],
    ],
  },
  {
    label: 'Masks',
    links: [
      ['Shapeshift', '/shapeshift'],
      ['Weapons', '/weapons'],
      ['Creatures', '/creatures'],
    ],
  },
  {
    label: 'Reference',
    links: [['Skill Lines', '/skill-lines']],
  },
  {
    label: 'Local Data',
    links: [['Profile Manager', '/profiles']],
  },
] as const;

export function Layout() {
  const p = useProfiles();
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const create = () => {
    const name = prompt('New profile name', 'My Profile');
    if (name) p.newProfile(name);
  };
  const rename = () => {
    const name = prompt('Rename profile', p.activeProfile.name);
    if (name) p.renameProfile(p.activeProfile.id, name);
  };

  return <div className="app-shell">
    <header className="topbar">
      <div className="brand">
        <span className="brand-mark">SD</span>
        <strong>Spell Dev Toolkit</strong>
      </div>
      <GlobalSearch />
      <div className="profile-menu">
        <button className="profile-trigger" onClick={() => setMenu((v) => !v)}>
          <span>Profile:</span> {p.activeProfile.name} <b>▾</b>
        </button>
        {menu && <div className="dropdown">
          <div className="dropdown-label">Switch profile</div>
          {p.profiles.map((x) => <button key={x.id} className={x.id === p.activeProfile.id ? 'active' : ''} onClick={() => { p.setActiveProfile(x.id); setMenu(false); }}>{x.name}</button>)}
          <hr />
          <button onClick={() => { create(); setMenu(false); }}>New Profile</button>
          <button onClick={() => { p.duplicateProfile(); setMenu(false); }}>Duplicate Profile</button>
          <button onClick={() => { rename(); setMenu(false); }}>Rename Profile</button>
          <button onClick={() => { p.downloadActiveProfile(); setMenu(false); }}>Download Profile</button>
          <button onClick={() => { navigate('/profiles'); setMenu(false); }}>Open Profile Manager</button>
        </div>}
      </div>
      <span className={`save-state ${p.saveState}`}>{p.saveState === 'saved' ? '● Saved locally' : '○ Saving…'}</span>
    </header>

    <aside className="sidebar">
      <nav>
        {sections.map((section) => <div className="nav-section" key={section.label}>
          <div className="nav-section-label">{section.label}</div>
          {section.links.map(([label, path]) => {
            const current = `${location.pathname}${location.search}`;
            const active = path === '/' ? location.pathname === '/' : current === path;
            return <Link key={path} to={path} className={active ? 'active' : undefined}>{label}</Link>;
          })}
        </div>)}
      </nav>
      <div className="local-note">localStorage only<br />No cloud sync</div>
    </aside>

    <main className="content"><Outlet /></main>
  </div>;
}
