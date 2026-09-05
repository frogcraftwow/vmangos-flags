import { useMemo, useState } from 'react';
import { activeBits, hasBit, parseMask, setBit, toHex } from '../lib/masks';
import { useProfiles } from '../context/ProfileContext';

export type MaskFlag = {
  name: string;
  bitIndex: number;
  description?: string;
  decimal?: string;
  hex?: string;
};

export function MaskTool({ title, flags, presetScope, maxBits = 64, bitLabel = 'Bit', nameLabel = 'Name / Definition' }: {
  title: string;
  flags: readonly MaskFlag[];
  presetScope: string;
  maxBits?: number;
  bitLabel?: string;
  nameLabel?: string;
}) {
  const { activeProfile, savePreset, deletePreset } = useProfiles();
  const [input, setInput] = useState('0');
  const [original, setOriginal] = useState(0n);
  const [working, setWorking] = useState(0n);
  const [error, setError] = useState('');

  const load = () => {
    try {
      const m = parseMask(input);
      setOriginal(m);
      setWorking(m);
      setError('');
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  const added = working & ~original;
  const removed = original & ~working;
  const xor = original ^ working;
  const presets = activeProfile.presets[presetScope] || [];
  const hexDigits = maxBits > 32 ? 16 : 8;
  const selectedCount = useMemo(() => flags.filter((f) => hasBit(working, f.bitIndex)).length, [flags, working]);

  return <section className="panel mask-tool">
    <div className="section-head">
      <h2>{title}</h2>
      <span className="badge">{selectedCount} selected</span>
    </div>

    <div className="mask-input-row">
      <label>Input Mask
        <input className="mono" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') load(); }} placeholder="Decimal or hex" />
      </label>
      <button className="btn primary" onClick={load}>Load</button>
      <button className="btn" onClick={() => { setInput('0'); setOriginal(0n); setWorking(0n); setError(''); }}>Clear</button>
    </div>

    {error && <div className="alert error">{error}</div>}

    <div className="mask-result-hero sticky-results">
      <div className="result-heading">Working Mask</div>
      <div className="result-values">
        <div><span>Decimal</span><strong className="mono">{working.toString()}</strong></div>
        <div><span>Hex</span><strong className="mono">{toHex(working, hexDigits)}</strong></div>
      </div>
    </div>

    <div className="mask-results compact-results">
      <Metric label="Input Decimal" value={original.toString()} />
      <Metric label="Input Hex" value={toHex(original, hexDigits)} />
      <Metric label="Added" value={`${added} / ${toHex(added, hexDigits)}`} />
      <Metric label="Removed" value={`${removed} / ${toHex(removed, hexDigits)}`} />
      <Metric label="XOR" value={`${xor} / ${toHex(xor, hexDigits)}`} />
    </div>

    <div className="preset-row">
      <button className="btn small" onClick={() => { const n = prompt('Preset name'); if (n) savePreset(presetScope, n, working); }}>Save preset</button>
      {presets.map((p) => <span className="preset" key={p.id}>
        <button onClick={() => { const m = BigInt(p.mask); setOriginal(m); setWorking(m); setInput(p.mask); }}>{p.name}</button>
        <button aria-label={`Delete ${p.name}`} onClick={() => deletePreset(presetScope, p.id)}>×</button>
      </span>)}
    </div>

    <div className="table-wrap">
      <table>
        <thead><tr><th className="xcol">X</th><th>{bitLabel}</th><th>Decimal</th><th>Hex</th><th>{nameLabel}</th></tr></thead>
        <tbody>{flags.map((f) => <tr key={`${f.bitIndex}:${f.name}`} className={hasBit(working, f.bitIndex) ? 'selected-row' : ''}>
          <td className="xcol"><label className="xcheck">
            <input aria-label={`Select ${f.name}`} type="checkbox" checked={hasBit(working, f.bitIndex)} onChange={(e) => setWorking((m) => setBit(m, f.bitIndex, e.target.checked))} />
            <span>×</span>
          </label></td>
          <td className="mono bit-cell">{f.bitIndex}</td>
          <td className="mono">{f.decimal ?? (1n << BigInt(f.bitIndex)).toString()}</td>
          <td className="mono">{f.hex ?? toHex(1n << BigInt(f.bitIndex))}</td>
          <td className="definition-cell">
            <div className="mono enum">{f.name}</div>
            {f.description && <div className="comment">{f.description}</div>}
          </td>
        </tr>)}</tbody>
      </table>
    </div>

    <div className="active-bits">Active bits: <span className="mono">{activeBits(working, maxBits).join(', ') || 'none'}</span></div>
  </section>;
}

function Metric({ label, value }: { label: string; value: string }) {
  return <div><span>{label}</span><strong className="mono">{value}</strong></div>;
}
