import { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { MaskTool } from '../components/MaskTool';
import { spellFlags } from '../data/spellFlags';
import { useQueryParam } from '../lib/url';
export default function SpellFlagsPage(){const req=useQueryParam('group');const [key,setKey]=useState(spellFlags.some(g=>g.key===req)?req:spellFlags[0].key);const group=spellFlags.find(g=>g.key===key)!;return <><PageHeader title="Spell Flags" description="Independent bitmask groups from the SPELLFLAGS worksheet. Unrelated mask domains remain separate."/><div className="family-tabs">{spellFlags.map(g=><button key={g.key} className={g.key===key?'active':''} onClick={()=>setKey(g.key)}>{g.name}</button>)}</div>{'presets' in group&&group.presets?.length?<div className="panel source-note"><b>Supplied aggregate references:</b> {group.presets.map(p=><span key={p.name} className="mono"> {p.name} = {p.decimal}</span>)}</div>:null}<MaskTool title={group.name} flags={group.flags} presetScope={`spellflags:${group.key}`} maxBits={64}/></>}
