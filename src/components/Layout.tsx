import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useProfiles } from '../context/ProfileContext';
import { GlobalSearch } from './GlobalSearch';

import { navigationSections } from '../lib/navigation';



export function Layout() {
  const p = useProfiles();
  const [profileMenu, setProfileMenu] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => setMobileNav(false), [location.pathname, location.search]);

  const create = () => {
    const name = prompt('New profile name', 'My Profile');
    if (name) p.newProfile(name);
  };
  const rename = () => {
    const name = prompt('Rename profile', p.activeProfile.name);
    if (name) p.renameProfile(p.activeProfile.id, name);
  };

  const nav = <nav>
    <Link to="/" className={location.pathname === '/' ? 'active nav-primary' : 'nav-primary'}>Overview</Link>
    <Link to="/mask-calculator" className={location.pathname === '/mask-calculator' ? 'active nav-primary' : 'nav-primary'}>Generic Mask</Link>
    {navigationSections.map((section) => <div className="nav-section" key={section.label}>
      <div className="nav-section-label">{section.label}</div>
      {section.links.map(([label, path]) => {
        const current = `${location.pathname}${location.search}`;
        const active = current === path;
        return <Link key={path} to={path} className={active ? 'active' : undefined}>{label}</Link>;
      })}
    </div>)}
    <div className="nav-footer-link"><Link to="/profiles" className={location.pathname === '/profiles' ? 'active' : undefined}>Profile Manager</Link></div>
  </nav>;

  return <div className="app-shell">
    <header className="topbar">
      <button className="mobile-menu-button" aria-label="Open navigation" aria-expanded={mobileNav} onClick={() => setMobileNav((v) => !v)}>☰</button>
      <div className="brand">
        <span className="brand-mark">SD</span>
        <strong>Spell Dev Toolkit</strong>
      </div>
      <GlobalSearch />
      <div className="profile-menu">
        <button className="profile-trigger" onClick={() => setProfileMenu((v) => !v)}>
          <span>Profile:</span> {p.activeProfile.name} <b>▾</b>
        </button>
        {profileMenu && <div className="dropdown">
          <div className="dropdown-label">Switch profile</div>
          {p.profiles.map((x) => <button key={x.id} className={x.id === p.activeProfile.id ? 'active' : ''} onClick={() => { p.setActiveProfile(x.id); setProfileMenu(false); }}>{x.name}</button>)}
          <hr />
          <button onClick={() => { create(); setProfileMenu(false); }}>New Profile</button>
          <button onClick={() => { p.duplicateProfile(); setProfileMenu(false); }}>Duplicate Profile</button>
          <button onClick={() => { rename(); setProfileMenu(false); }}>Rename Profile</button>
          <button onClick={() => { p.downloadActiveProfile(); setProfileMenu(false); }}>Download Profile</button>
          <button onClick={() => { navigate('/profiles'); setProfileMenu(false); }}>Open Profile Manager</button>
        </div>}
      </div>
      <span className={`save-state ${p.saveState}`}>{p.saveState === 'saved' ? '● Saved locally' : '○ Saving…'}</span>
    </header>

    <aside className="sidebar">
      {nav}
      <div className="local-note">localStorage only<br />No cloud sync</div>
    </aside>

    {mobileNav && <div className="mobile-nav-backdrop" onMouseDown={() => setMobileNav(false)}>
      <aside className="mobile-nav" onMouseDown={(e) => e.stopPropagation()}>
        <div className="mobile-nav-head"><strong>Navigation</strong><button aria-label="Close navigation" onClick={() => setMobileNav(false)}>×</button></div>
        {nav}
      </aside>
    </div>}

    <main className="content"><Outlet /></main>
  </div>;
}
