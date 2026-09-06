import { useMemo, useState } from 'react';
import { useProfiles } from '../context/ProfileContext';
import type { DefinitionOverride } from '../lib/profiles';
import type { ReferenceRow } from '../data/spellTemplateReferences';

const owns = (value: object, key: string) => Object.prototype.hasOwnProperty.call(value, key);

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
  const [query, setQuery] = useState('');
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
    <div className="table-toolbar reference-toolbar">
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
