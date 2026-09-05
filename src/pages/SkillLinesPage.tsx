import { useMemo, useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { skillLines } from '../data/skillLines';
import { CopyButton } from '../components/CopyButton';
import { useQueryParam } from '../lib/url';

export default function SkillLinesPage() {
  const [q, setQ] = useState(useQueryParam('q'));
  const rows = useMemo(() => [...skillLines]
    .sort((a, b) => a.id - b.id)
    .filter((r) => !q || `${r.id} ${r.name}`.toLowerCase().includes(q.toLowerCase())), [q]);

  return <>
    <PageHeader title="Skill Lines" />
    <div className="table-toolbar"><input placeholder="Search skill line" value={q} onChange={(e) => setQ(e.target.value)} /><span>{rows.length} rows</span></div>
    <div className="panel table-wrap"><table><thead><tr><th>Skill Line ID</th><th>Name</th><th>Copy</th></tr></thead><tbody>{rows.map((r) => <tr key={r.id}><td className="mono">{r.id}</td><td>{r.name}</td><td><CopyButton value={String(r.id)} /></td></tr>)}</tbody></table></div>
  </>;
}
