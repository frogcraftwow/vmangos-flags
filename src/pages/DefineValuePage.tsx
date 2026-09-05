import { useMemo, useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { CopyButton } from '../components/CopyButton';
import { spellDefines } from '../data/spellDefines';
import { parseMask, toHex } from '../lib/masks';
import { useQueryParam } from '../lib/url';

type ValueDefineName = 'SpellCategories' | 'SpellSpecific';

export default function DefineValuePage({ enumName }: { enumName: ValueDefineName }) {
  const [query, setQuery] = useState(useQueryParam('q'));
  const [input, setInput] = useState('');
  const [value, setValue] = useState<bigint | null>(null);
  const [error, setError] = useState('');

  const rows = useMemo(() => spellDefines[enumName].filter((row) => {
    const q = query.trim().toLowerCase();
    return !q || `${row.name} ${row.value} ${row.comment}`.toLowerCase().includes(q);
  }), [enumName, query]);

  const matches = value === null ? [] : spellDefines[enumName].filter((row) => BigInt(row.value) === value);
  const lookup = () => {
    try {
      const parsed = parseMask(input);
      setValue(parsed);
      setError('');
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setValue(null);
    }
  };

  return <>
    <PageHeader title={enumName} />
    <section className="panel enum-lookup">
      <div className="mask-input-row">
        <label>Value<input className="mono" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && lookup()} placeholder="Decimal or hex" /></label>
        <button className="btn primary" onClick={lookup}>Lookup</button>
        <button className="btn" onClick={() => { setInput(''); setValue(null); setError(''); }}>Clear</button>
      </div>
      {error && <div className="alert error">{error}</div>}
      {value !== null && <div className="mask-result-hero">
        <div className="result-heading">Value</div>
        <div className="result-values">
          <div><span>Decimal</span><strong className="mono">{value.toString()}</strong></div>
          <div><span>Hex</span><strong className="mono">{toHex(value, 1)}</strong></div>
        </div>
        <div className="lookup-matches">
          {matches.length ? matches.map((row) => <code key={row.name}>{row.name}</code>) : <span>No enum entry</span>}
        </div>
      </div>}
    </section>

    <div className="table-toolbar">
      <input placeholder="Search name or value" value={query} onChange={(e) => setQuery(e.target.value)} />
      <span>{rows.length} entries</span>
    </div>
    <div className="panel table-wrap">
      <table>
        <thead><tr><th>Name</th><th>Decimal</th><th>Hex</th><th>Comment</th><th>Copy</th></tr></thead>
        <tbody>{rows.map((row) => {
          const n = BigInt(row.value);
          return <tr key={row.name} onDoubleClick={() => { setInput(row.value); setValue(n); setError(''); }}>
            <td className="mono enum">{row.name}</td>
            <td className="mono">{n.toString()}</td>
            <td className="mono">{toHex(n, 1)}</td>
            <td>{row.comment}</td>
            <td><CopyButton value={row.value} /></td>
          </tr>;
        })}</tbody>
      </table>
    </div>
  </>;
}
