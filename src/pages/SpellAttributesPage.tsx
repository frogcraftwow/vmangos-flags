import { useMemo, useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { MaskTool, type MaskFlag } from '../components/MaskTool';
import { spellAttributes } from '../data/spellAttributes';
import { spellDefines } from '../data/spellDefines';
import { useQueryParam } from '../lib/url';
const groups=['Attr0','Attr1','Attr2','Attr3','Attr4'] as const;
const enumMap={Attr0:'SpellAttributes',Attr1:'SpellAttributesEx',Attr2:'SpellAttributesEx2',Attr3:'SpellAttributesEx3',Attr4:'SpellAttributesEx4'} as const;
function valueToBigInt(v:string){try{return BigInt(v)}catch{return 0n}}
export default function SpellAttributesPage(){
 const requested=useQueryParam('group'); const [group,setGroup]=useState<(typeof groups)[number]>(groups.includes(requested as never)?requested as (typeof groups)[number]:'Attr0');
 const flags=useMemo<MaskFlag[]>(()=>{const alt=spellDefines[enumMap[group]];return spellAttributes.filter(r=>r.groupKey===group).map(r=>{const a=alt.find(x=>valueToBigInt(x.value)===BigInt(r.decimal));return {name:r.name,bitIndex:r.bitIndex,description:r.description,decimal:r.decimal,hex:r.hex,secondary:a?.name,secondaryDescription:a?.comment};})},[group]);
 return <><PageHeader title="Spell Attributes" description="Attr0–Attr4 mask builders from the supplied Native Builder, with spelldefines.txt definitions preserved as a separate alternate reference rather than merged or treated as user customization."/><div className="family-tabs">{groups.map(g=><button className={g===group?'active':''} onClick={()=>setGroup(g)} key={g}>{g}</button>)}</div><MaskTool title={`${group} — ${spellAttributes.find(r=>r.groupKey===group)?.groupName||group}`} flags={flags} presetScope={`attributes:${group}`} maxBits={32}/></>}
