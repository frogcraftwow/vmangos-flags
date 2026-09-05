import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useProfiles } from '../context/ProfileContext';
import { GlobalSearch } from './GlobalSearch';
const nav=[
 ['Overview','/'],['Spell Family Flags','/spell-family-flags'],['Spell Attributes','/spell-attributes'],['Spell Defines','/spell-defines'],['Spell Flags','/spell-flags'],['Shapeshift Mask','/shapeshift'],['Generic Mask','/mask-calculator'],['DBC & IDs','/dbc'],['Spell Effects','/spell-effects'],['Auras','/auras'],['Coordinates','/coordinates'],['CLS Calculator','/cls-calculator'],['Skill Lines','/skill-lines'],['Weapons','/weapons'],['Unused Creatures','/unused-creatures'],['HP Compare','/hp-compare'],['Profile Manager','/profiles']
] as const;
export function Layout(){
 const p=useProfiles(); const [menu,setMenu]=useState(false); const navigate=useNavigate();
 const create=()=>{const name=prompt('New profile name','My Profile');if(name)p.newProfile(name)};
 const rename=()=>{const name=prompt('Rename profile',p.activeProfile.name);if(name)p.renameProfile(p.activeProfile.id,name)};
 return <div className="app-shell"><header className="topbar"><div className="brand"><span className="brand-mark">SD</span><div><strong>Spell &amp; DBC Toolkit</strong><small>static developer reference</small></div></div><GlobalSearch/><div className="profile-menu"><button className="profile-trigger" onClick={()=>setMenu(v=>!v)}><span>Profile:</span> {p.activeProfile.name} <b>▾</b></button>{menu&&<div className="dropdown"><div className="dropdown-label">Switch profile</div>{p.profiles.map(x=><button key={x.id} className={x.id===p.activeProfile.id?'active':''} onClick={()=>{p.setActiveProfile(x.id);setMenu(false)}}>{x.name}</button>)}<hr/><button onClick={()=>{create();setMenu(false)}}>New Profile</button><button onClick={()=>{p.duplicateProfile();setMenu(false)}}>Duplicate Profile</button><button onClick={()=>{rename();setMenu(false)}}>Rename Profile</button><button onClick={()=>{p.downloadActiveProfile();setMenu(false)}}>Download Profile</button><button onClick={()=>{navigate('/profiles');setMenu(false)}}>Open Profile Manager</button></div>}</div><span className={`save-state ${p.saveState}`}>{p.saveState==='saved'?'● Saved locally':'○ Saving…'}</span></header><aside className="sidebar"><nav>{nav.map(([label,path])=><NavLink key={path} to={path} end={path==='/'?true:undefined}>{label}</NavLink>)}</nav><div className="local-note">Browser localStorage only<br/>No cloud sync</div></aside><main className="content"><Outlet/></main></div>
}
