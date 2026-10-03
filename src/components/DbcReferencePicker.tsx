import { useMemo, useState } from 'react';
import { CopyButton } from './CopyButton';
import type { ReferenceRow } from '../data/spellTemplateReferences';
import { toHex } from '../lib/masks';

export function DbcReferencePicker({ rows, fields, selectorLabel }: {
  rows: readonly ReferenceRow[];
  fields: readonly string[];
  selectorLabel: string;
}) {
  const [selectedId, setSelectedId] = useState('');
  const selected = rows.find((row) => String(row.value) === selectedId);
  const options = useMemo(() => [...rows].sort((a, b) =>
    (a.sortValue ?? a.value) - (b.sortValue ?? b.value) || a.value - b.value,
  ), [rows]);

  return <section className="panel dbc-reference-picker">
    <label className="dbc-selector">{selectorLabel}
      <select value={selectedId} onChange={(event) => setSelectedId(event.target.value)}>
        <option value="">Select {selectorLabel.toLowerCase()}</option>
        {options.map((row) => <option key={row.value} value={row.value}>
          {row.selectionLabel ?? row.name} — ID {row.value}
        </option>)}
      </select>
    </label>
    {selected ? <>
      <div className="mask-result-hero dbc-selected-id" aria-live="polite" aria-atomic="true">
        <div className="result-heading">ID for {fields.join(' / ')}</div>
        <div className="result-values">
          <div><span>Decimal</span><strong className="mono">{selected.value}</strong></div>
          <div><span>Hex</span><strong className="mono">{toHex(BigInt(selected.value))}</strong></div>
        </div>
      </div>
      <div className="dbc-copy-actions">
        <CopyButton value={String(selected.value)} label="Copy decimal ID" />
        <CopyButton value={toHex(BigInt(selected.value))} label="Copy hex ID" />
      </div>
      <p className="dbc-selection-details">{selected.comment}</p>
    </> : <p className="muted">Choose a value to see its ID for {fields.join(', ')}.</p>}
  </section>;
}
