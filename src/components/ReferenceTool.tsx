import { useMemo, useState } from 'react';
import { useProfiles } from '../context/ProfileContext';
import type { DefinitionOverride } from '../lib/profiles';
import type { ReferenceRow } from '../data/spellTemplateReferences';

const owns = (value: object, key: string) => Object.prototype.hasOwnProperty.call(value, key);

function parseValue(raw: string): number | null {
  const input = raw.trim();
  if (!input) return null;
  try {
    if (/^0x[0-9a-f]+$/i.test(input)) {
      const unsigned = BigInt(input);
      const signed = BigInt.asIntN(32, unsigned);
      return Number(signed);
    }
    if (/^-?\d+$/.test(input)) return Number(input);
  } catch { /* invalid */ }
  return null;
}

function toHex32(value: number): string {
  return `0x${BigInt.asUintN(32, BigInt(value)).toString(16).toUpperCase().padStart(8, '0')}`;
}

export function ReferenceTool({ title, rows, definitionScope, valueLabel = 'Value' }: {
  title: string;
  rows: readonly ReferenceRow[];
  definitionScope: string;
  valueLabel?: string;
}) {
  const { activeProfile, setMaskDefinitionOverride } = useProfiles();
  const [input, setInput] = useState('0');
  const [query, setQuery] = useState('');
  const parsed = parseValue(input);
  const matches = parsed === null ? [] : rows.filter((row) => row.value === parsed);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((row) => `${row.value} ${toHex32(row.value)} ${row.name} ${row.comment ?? ''}`.toLowerCase().includes(q));
  }, [query, rows]);

  const updateName = (key: string, baseline: string, override: DefinitionOverride, value: string) => {
    const next = { ...override };
    if (value === baseline) delete next.name; else next.name = value;
    setMaskDefinitionOverride(key, next);
  };
  const updateComment = (key: string, baseline: string, override: DefinitionOverride, value: string) => {
    const next = { ...override };
    if (value === baseline) delete next.comment; else next.comment = value;
    setMaskDefinitionOverride(key, next);
  };

  return <section className="panel reference-tool">
    <div className="section-head"><h2>{title}</h2><span className="badge">{rows.length} entries</span></div>
    <div className="mask-input-row">
      <label>{valueLabel}
        <input className="mono" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Decimal or hex" />
      </label>
    </div>
    <div className="lookup-result reference-lookup">
      <span>{parsed === null ? 'Invalid value' : `${valueLabel} ${parsed} · ${toHex32(parsed)}`}</span>
      <strong className="mono">{matches.length ? matches.map((row) => {
        const key = `${definitionScope}:${row.key ?? `${row.value}:${row.name}`}`;
        return activeProfile.overrides.maskDefinitions[key]?.name ?? row.name;
      }).join(' / ') : 'No defined value'}</strong>
    </div>

    <div className="table-toolbar">
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={`Search ${title}`} />
      <span>{filtered.length} entries</span>
    </div>
    <div className="table-wrap editable-mask-table reference-table">
      <table>
        <thead><tr><th>{valueLabel}</th><th>Hex</th><th>Name</th><th>Comment</th></tr></thead>
        <tbody>{filtered.map((row) => {
          const stable = row.key ?? `${row.value}:${row.name}`;
          const key = `${definitionScope}:${stable}`;
          const override = activeProfile.overrides.maskDefinitions[key] || {};
          const baselineComment = row.comment || '';
          const nameOverridden = owns(override, 'name');
          const commentOverridden = owns(override, 'comment');
          const effectiveName = nameOverridden ? (override.name ?? '') : row.name;
          const effectiveComment = commentOverridden ? (override.comment ?? '') : baselineComment;
          return <tr key={stable} className={nameOverridden || commentOverridden ? 'overridden' : ''}>
            <td className="mono bit-cell">{row.value}</td>
            <td className="mono">{toHex32(row.value)}</td>
            <td className="editable-cell">
              <div className="inline-edit">
                <input className={`mono enum-input${nameOverridden ? ' edited' : ''}`} value={effectiveName} onChange={(e) => updateName(key, row.name, override, e.target.value)} />
                {nameOverridden && <button className="reset-inline" title="Restore original name" onClick={() => updateName(key, row.name, override, row.name)}>↺</button>}
              </div>
              <div className="original-value"><span>Original</span><code>{row.name}</code></div>
            </td>
            <td className="editable-cell comment-edit-cell">
              <div className="inline-edit">
                <input className={commentOverridden ? 'edited' : ''} value={effectiveComment} onChange={(e) => updateComment(key, baselineComment, override, e.target.value)} />
                {commentOverridden && <button className="reset-inline" title="Restore original comment" onClick={() => updateComment(key, baselineComment, override, baselineComment)}>↺</button>}
              </div>
              <div className="original-value"><span>Original</span><code>{baselineComment || '—'}</code></div>
            </td>
          </tr>;
        })}</tbody>
      </table>
    </div>
  </section>;
}
