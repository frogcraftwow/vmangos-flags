import { useMemo, useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { weapons } from '../data/weapons';
import { CopyButton } from '../components/CopyButton';
import { useQueryParam } from '../lib/url';
export default function WeaponsPage(){const [q,setQ]=useState(useQueryParam('q'));const rows=useMemo(()=>weapons.filter(r=>!q||Object.values(r).join(' ').toLowerCase().includes(q.toLowerCase())),[q]);return <><PageHeader title="Weapons" description="Weapon subclass and correct bitmask reference from weapons.txt."/><div className="table-toolbar"><input placeholder="Search weapon type…" value={q} onChange={e=>setQ(e.target.value)}/><span>{rows.length} rows</span></div><div className="panel table-wrap"><table><thead><tr><th>Weapon Type</th><th>VMangos SubClass</th><th>Correct Bitmask</th><th>Hex</th><th>Copy</th></tr></thead><tbody>{rows.map(r=><tr key={r.weaponType}><td>{r.weaponType}</td><td className="mono">{r.subClass}</td><td className="mono">{r.bitmask}</td><td className="mono">{r.hex}</td><td><CopyButton value={r.bitmask}/></td></tr>)}</tbody></table></div></>}
