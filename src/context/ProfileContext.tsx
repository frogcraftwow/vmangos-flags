import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ALL_PROFILES_FORMAT, SCHEMA_VERSION, downloadJson, emptyProfile, exportProfile, fromExport, type FamilyOverride, type Profile, type ProfileExport, slugify, uuid } from '../lib/profiles';

type StoreState = { activeProfileId: string; profiles: Profile[] };
type ContextValue = {
  activeProfile: Profile;
  profiles: Profile[];
  saveState: 'saved' | 'saving';
  setActiveProfile: (id: string) => void;
  newProfile: (name?: string) => Profile;
  duplicateProfile: (id?: string) => Profile;
  renameProfile: (id: string, name: string) => void;
  updateProfileMeta: (id: string, patch: Partial<Pick<Profile,'name'|'author'|'description'>>) => void;
  deleteProfile: (id: string) => void;
  setFamilyOverride: (key: string, patch: FamilyOverride) => void;
  resetFamilyOverride: (key: string) => void;
  resetAllOverrides: () => void;
  savePreset: (scope: string, name: string, mask: bigint) => void;
  deletePreset: (scope: string, presetId: string) => void;
  downloadActiveProfile: () => void;
  exportAllProfiles: () => void;
  importProfile: (data: ProfileExport, strategy: 'replace'|'copy') => void;
};

const KEY='spell-dev-toolkit:v1';
const ProfileContext=createContext<ContextValue|null>(null);

function loadStore(): StoreState {
  try {
    const raw=localStorage.getItem(KEY);
    if (raw) {
      const parsed=JSON.parse(raw) as StoreState;
      if (Array.isArray(parsed.profiles) && parsed.profiles.length && parsed.profiles.some(p=>p.id===parsed.activeProfileId)) return parsed;
    }
  } catch { /* start clean */ }
  const p=emptyProfile('Default'); return {activeProfileId:p.id,profiles:[p]};
}

export function ProfileProvider({children}:{children:React.ReactNode}) {
  const [store,setStore]=useState<StoreState>(()=>loadStore());
  const [saveState,setSaveState]=useState<'saved'|'saving'>('saved');
  useEffect(()=>{
    setSaveState('saving');
    localStorage.setItem(KEY,JSON.stringify(store));
    const t=setTimeout(()=>setSaveState('saved'),180); return ()=>clearTimeout(t);
  },[store]);
  const activeProfile=store.profiles.find(p=>p.id===store.activeProfileId) ?? store.profiles[0];
  const touch=(p:Profile):Profile=>({...p,modifiedAt:new Date().toISOString()});
  const update=(id:string,fn:(p:Profile)=>Profile)=>setStore(s=>({...s,profiles:s.profiles.map(p=>p.id===id?touch(fn(p)):p)}));
  const newProfile=(name='New Profile')=>{ const p=emptyProfile(name); setStore(s=>({...s,activeProfileId:p.id,profiles:[...s.profiles,p]})); return p; };
  const duplicateProfile=(id=activeProfile.id)=>{ const src=store.profiles.find(p=>p.id===id) ?? activeProfile; const now=new Date().toISOString(); const p:Profile={...JSON.parse(JSON.stringify(src)),id:uuid(),name:`${src.name} (copy)`,createdAt:now,modifiedAt:now}; setStore(s=>({...s,activeProfileId:p.id,profiles:[...s.profiles,p]})); return p; };
  const renameProfile=(id:string,name:string)=>update(id,p=>({...p,name:name.trim()||p.name}));
  const updateProfileMeta=(id:string,patch:Partial<Pick<Profile,'name'|'author'|'description'>>)=>update(id,p=>({...p,...patch,name:(patch.name?.trim()||p.name)}));
  const deleteProfile=(id:string)=>setStore(s=>{
    if (s.profiles.length<=1) return s;
    const profiles=s.profiles.filter(p=>p.id!==id); return {profiles,activeProfileId:s.activeProfileId===id?profiles[0].id:s.activeProfileId};
  });
  const setFamilyOverride=(key:string,patch:FamilyOverride)=>update(activeProfile.id,p=>{
    const clean:FamilyOverride={}; if (patch.customAbility?.trim()) clean.customAbility=patch.customAbility; if (patch.comment?.trim()) clean.comment=patch.comment;
    const next={...p.overrides.spellFamilyFlags}; if (Object.keys(clean).length) next[key]=clean; else delete next[key];
    return {...p,overrides:{...p.overrides,spellFamilyFlags:next}};
  });
  const resetFamilyOverride=(key:string)=>update(activeProfile.id,p=>{ const next={...p.overrides.spellFamilyFlags}; delete next[key]; return {...p,overrides:{...p.overrides,spellFamilyFlags:next}}; });
  const resetAllOverrides=()=>update(activeProfile.id,p=>({...p,overrides:{spellFamilyFlags:{}}}));
  const savePreset=(scope:string,name:string,mask:bigint)=>update(activeProfile.id,p=>({...p,presets:{...p.presets,[scope]:[...(p.presets[scope]||[]),{id:uuid(),name:name.trim()||'Preset',mask:mask.toString(),createdAt:new Date().toISOString()}]}}));
  const deletePreset=(scope:string,presetId:string)=>update(activeProfile.id,p=>({...p,presets:{...p.presets,[scope]:(p.presets[scope]||[]).filter(x=>x.id!==presetId)}}));
  const downloadActiveProfile=()=>downloadJson(`spell-toolkit-profile-${slugify(activeProfile.name)}.json`,exportProfile(activeProfile));
  const exportAllProfiles=()=>downloadJson('spell-toolkit-all-profiles.json',{format:ALL_PROFILES_FORMAT,schemaVersion:SCHEMA_VERSION,activeProfileId:store.activeProfileId,profiles:store.profiles.map(exportProfile)});
  const importProfile=(data:ProfileExport,strategy:'replace'|'copy')=>setStore(s=>{
    const incoming=fromExport(data,strategy==='copy');
    if (strategy==='replace') {
      const exists=s.profiles.some(p=>p.id===incoming.id); const profiles=exists?s.profiles.map(p=>p.id===incoming.id?incoming:p):[...s.profiles,incoming]; return {profiles,activeProfileId:incoming.id};
    }
    return {profiles:[...s.profiles,incoming],activeProfileId:incoming.id};
  });
  const value=useMemo<ContextValue>(()=>({activeProfile,profiles:store.profiles,saveState,setActiveProfile:(id)=>setStore(s=>({...s,activeProfileId:id})),newProfile,duplicateProfile,renameProfile,updateProfileMeta,deleteProfile,setFamilyOverride,resetFamilyOverride,resetAllOverrides,savePreset,deletePreset,downloadActiveProfile,exportAllProfiles,importProfile}),[activeProfile,store.profiles,saveState]);
  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}
export function useProfiles(){ const ctx=useContext(ProfileContext); if(!ctx) throw new Error('ProfileProvider missing'); return ctx; }
