import { useMemo, useState } from 'react';
import { CopyButton } from './CopyButton';
import type { ReferenceRow } from '../data/spellTemplateReferences';
import { toHex } from '../lib/masks';

export function DbcReferencePicker({ rows, selectorLabel }: {
  rows: readonly ReferenceRow[];
  selectorLabel: string;
}) {
  const [selectedId, setSelectedId] = useState(rows[0]?.value);
  const selected = rows.find((row) => row.value === selectedId);
  const options = useMemo(() => [...rows].sort((a, b) =>
    (a.sortValue ?? a.value) - (b.sortValue ?? b.value) || a.value - b.value,
  ), [rows]);

  return <section className="panel dbc-reference-picker">
    <label className="dbc-selector">{selectorLabel}
      <select value={selectedId ?? ''} onChange={(event) => setSelectedId(Number(event.currentTarget.value))}>
        {options.map((row) => <option key={row.value} value={row.value}>
          {row.selectionLabel ?? row.name} — ID {row.value}
        </option>)}
      </select>
    </label>
    {selected && <div className="dbc-id-results" aria-live="polite" aria-atomic="true">
        <div className="dbc-id-value">
          <span>Decimal ID</span>
          <output className="mono" aria-label="Decimal ID">{selected.value}</output>
          <CopyButton key={`decimal:${selected.value}`} value={String(selected.value)} label="Copy" />
        </div>
        <div className="dbc-id-value">
          <span>Hex ID</span>
          <output className="mono" aria-label="Hex ID">{toHex(BigInt(selected.value))}</output>
          <CopyButton key={`hex:${selected.value}`} value={toHex(BigInt(selected.value))} label="Copy" />
        </div>
    </div>}
  </section>;
}
