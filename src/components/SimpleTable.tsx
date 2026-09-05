import { useMemo, useState } from 'react';
import { Pager } from './Pager';
export function SimpleTable({rows,columns,pageSize=50,initialQuery=''}:{rows:Record<string,unknown>[];columns:{key:string;label:string;mono?:boolean}[];pageSize?:number;initialQuery?:string}){
  const [q,setQ]=useState(initialQuery); const [page,setPage]=useState(1);
  const filtered=useMemo(()=>{const n=q.trim().toLowerCase();return n?rows.filter(r=>columns.some(c=>String(r[c.key]??'').toLowerCase().includes(n))):rows},[rows,columns,q]);
  const pages=Math.max(1,Math.ceil(filtered.length/pageSize)); const safe=Math.min(page,pages); const slice=filtered.slice((safe-1)*pageSize,safe*pageSize);
  return <><div className="table-toolbar"><input placeholder="Search this table…" value={q} onChange={e=>{setQ(e.target.value);setPage(1)}}/><span>{filtered.length.toLocaleString()} rows</span></div><div className="table-wrap"><table><thead><tr>{columns.map(c=><th key={c.key}>{c.label}</th>)}</tr></thead><tbody>{slice.map((r,i)=><tr key={i}>{columns.map(c=><td key={c.key} className={c.mono?'mono':''}>{String(r[c.key]??'')}</td>)}</tr>)}</tbody></table></div><Pager page={safe} pages={pages} onPage={setPage}/></>
}
