import { spellFamilyFlags } from '../data/spellFamilyFlags';
import { spellFamilyHelperOnly } from '../data/spellFamilyHelperOnly';
import { spellAttributes } from '../data/spellAttributes';
import { spellDefines } from '../data/spellDefines';
import { skillLines } from '../data/skillLines';
import { weapons } from '../data/weapons';
import { shapeshift } from '../data/shapeshift';
import { spellFlags } from '../data/spellFlags';
import { spellEffects } from '../data/spellEffects';
import { auras } from '../data/auras';
import { dbc } from '../data/dbc';
import { creatures } from '../data/creatures';
import { hpCompare } from '../data/hpCompare';
import { spellFamiliesWorkbookReference } from '../data/spellFamiliesWorkbookReference';

export type SearchResult={title:string;subtitle:string;path:string;kind:string};
function text(...parts:unknown[]){return parts.map(x=>String(x??'')).join(' ').toLowerCase()}
export function globalSearch(query:string,limit=80):SearchResult[]{
  const q=query.trim().toLowerCase(); if(!q) return []; const out:SearchResult[]=[];
  const add=(r:SearchResult)=>{if(out.length<limit)out.push(r)};
  for(const r of spellFamilyFlags) if(text(r.ability,r.comment,r.className,r.familyId,r.bitIndex).includes(q)) add({title:r.ability,subtitle:`${r.className} family ${r.familyId}, bit ${r.bitIndex} · ${r.comment}`,path:`/spell-family-flags?q=${encodeURIComponent(query)}&family=${r.familyId}`,kind:'Family flag'});
  for(const r of spellFamilyHelperOnly) if(text(r.helperAbility,r.className,r.familyId,r.bitIndex).includes(q)) add({title:r.helperAbility,subtitle:`Helper-only · ${r.className} ${r.familyId}:${r.bitIndex}`,path:`/spell-family-flags?q=${encodeURIComponent(query)}&family=${r.familyId}`,kind:'Helper flag'});
  for(const r of spellAttributes) if(text(r.name,r.description,r.groupKey,r.bitIndex).includes(q)) add({title:r.name,subtitle:`${r.groupKey} bit ${r.bitIndex} · ${r.description}`,path:`/spell-attributes?q=${encodeURIComponent(query)}&group=${r.groupKey}`,kind:'Spell attribute'});
  for(const [enumName,items] of Object.entries(spellDefines)) for(const r of items) if(text(r.name,r.value,r.comment,enumName).includes(q)) add({title:r.name,subtitle:`${enumName} = ${r.value} · ${r.comment}`,path:`/spell-defines?q=${encodeURIComponent(query)}`,kind:'Spell define'});
  for(const g of spellFlags) for(const r of g.flags) if(text(r.name,g.name,r.bitIndex).includes(q)) add({title:r.name,subtitle:`${g.name} bit ${r.bitIndex}`,path:`/spell-flags?group=${g.key}`,kind:'Spell flag'});
  for(const r of shapeshift) if(text(r.id,r.form,r.bitIndex).includes(q)) add({title:r.form,subtitle:`Shapeshift ID ${r.id}, bit ${r.bitIndex}`,path:'/shapeshift',kind:'Shapeshift'});
  for(const r of skillLines) if(text(r.id,r.name).includes(q)) add({title:r.name,subtitle:`Skill line ${r.id}`,path:`/skill-lines?q=${encodeURIComponent(query)}`,kind:'Skill line'});
  for(const r of weapons) if(text(r.weaponType,r.subClass,r.bitmask,r.hex).includes(q)) add({title:r.weaponType,subtitle:`Subclass ${r.subClass} · ${r.hex}`,path:`/weapons?q=${encodeURIComponent(query)}`,kind:'Weapon'});
  for(const r of spellEffects) if(text(...Object.values(r)).includes(q)) add({title:`${r.id} · ${r.name}`,subtitle:text(r.points,r.mechanics,r.targetB,r.miscValueA).slice(0,180),path:`/spell-effects?q=${encodeURIComponent(query)}`,kind:'Spell effect'});
  for(const r of auras.listOfSpellAuras) if(text(r.id,r.symbol,r.description).includes(q)) add({title:`${r.id} · ${r.symbol}`,subtitle:r.description,path:`/auras?q=${encodeURIComponent(query)}`,kind:'Aura'});
  for(const r of auras.aurasList) if(text(r.id,r.symbol,r.miscValueA,r.miscValueB,r.comment,r.extra).includes(q)) add({title:`${r.id} · ${r.symbol}`,subtitle:`${r.miscValueA} ${r.miscValueB} ${r.comment}`.trim(),path:`/auras?q=${encodeURIComponent(query)}`,kind:'Aura misc'});
  for(const r of auras.comparisonRows) if(text(...Object.values(r)).includes(q)) add({title:`${r.id} · ${r.referenceSymbol||r.sourceSymbol}`,subtitle:`${r.sourceName} · ${r.status} · ${r.referenceName}`,path:`/auras?q=${encodeURIComponent(query)}`,kind:'Aura comparison'});
  for(const r of auras.comparisonRows) if(text(...Object.values(r)).includes(q)) add({title:`${r.id} · ${r.referenceSymbol||r.sourceSymbol}`,subtitle:`${r.sourceName} · ${r.status} · ${r.referenceName}`,path:`/auras?q=${encodeURIComponent(query)}`,kind:'Aura comparison'});
  for(const d of dbc.maskDomains) for(const r of d.flags) if(text(d.name,r.name,r.bitIndex).includes(q)) add({title:r.name,subtitle:`${d.name} bit ${r.bitIndex}`,path:`/dbc?domain=${d.key}`,kind:'DBC flag'});
  for(const [sheet,rows] of Object.entries(dbc.rawSheets)) for(const r of rows) if(text(r.row,...r.values).includes(q)){add({title:`${sheet} row ${r.row}`,subtitle:r.values.filter(Boolean).join(' · ').slice(0,220),path:'/dbc',kind:'DBC / IDs'});if(out.length>=limit)return out;}
  for(const r of spellFamiliesWorkbookReference) if(text(...Object.values(r)).includes(q)) add({title:`${r.className} bit ${r.bitIndex}`,subtitle:`vmangos: ${r.vmangos||'—'} · Vanilla Reforged reference: ${r.vanillaReforged||'—'}`,path:`/spell-family-flags?family=${r.familyId}`,kind:'Workbook family ref'});
  for(const r of creatures) if(text(...Object.values(r)).includes(q)){add({title:`${r.entry} · ${r.name}`,subtitle:`${r.subname} · levels ${r.level_min}-${r.level_max}`,path:`/unused-creatures?q=${encodeURIComponent(query)}`,kind:'Creature'});if(out.length>=limit)return out;}
  for(const r of hpCompare) if(text(...Object.values(r)).includes(q)){add({title:`${r.entry} · ${r.name}`,subtitle:`${r.healthmodSniff} vs ${r.healthmodAC} · ${r.status}`,path:`/hp-compare?q=${encodeURIComponent(query)}`,kind:'HP compare'});if(out.length>=limit)return out;}
  return out;
}
