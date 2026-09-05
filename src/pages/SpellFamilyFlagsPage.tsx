import { useMemo, useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { spellFamilyFlags } from '../data/spellFamilyFlags';
import { useProfiles } from '../context/ProfileContext';
import { hasBit, parseMask, setBit, toHex } from '../lib/masks';
import { useQueryParam } from '../lib/url';

const families = [
  ['Mage', 3],
  ['Warrior', 4],
  ['Warlock', 5],
  ['Priest', 6],
  ['Druid', 7],
  ['Rogue', 8],
  ['Hunter', 9],
  ['Paladin', 10],
  ['Shaman', 11],
] as const;

const CLIENT_MAX_BIT_INDEX = 50;
const visibleBits = Array.from({ length: CLIENT_MAX_BIT_INDEX + 1 }, (_, bitIndex) => bitIndex);

export default function SpellFamilyFlagsPage() {
  const requested = Number(useQueryParam('family'));
  const [familyId, setFamilyId] = useState(families.some((x) => x[1] === requested) ? requested : 3);
  const [input, setInput] = useState('0');
  const [original, setOriginal] = useState(0n);
  const [working, setWorking] = useState(0n);
  const [error, setError] = useState('');
  const p = useProfiles();

  const className = families.find((x) => x[1] === familyId)?.[0] ?? '';
  const baselineRows = spellFamilyFlags.filter((row) => row.familyId === familyId);
  const baselineByBit = useMemo(() => new Map(baselineRows.map((row) => [row.bitIndex, row])), [familyId]);
  const presets = p.activeProfile.presets[`family:${familyId}`] || [];

  const load = () => {
    try {
      const mask = parseMask(input);
      setOriginal(mask);
      setWorking(mask);
      setError('');
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  const added = working & ~original;
  const removed = original & ~working;
  const xor = original ^ working;

  return <>
    <PageHeader title="Spell Family Flags" />

    <div className="source-strip">
      <span>Baseline</span>
      <code>vMaNGOS SpellClassMask.h</code>
      <span>Bits</span>
      <code>0–50</code>
    </div>

    <div className="family-tabs">
      {families.map(([name, id]) => <button className={id === familyId ? 'active' : ''} key={id} onClick={() => {
        setFamilyId(id);
        setInput('0');
        setOriginal(0n);
        setWorking(0n);
        setError('');
      }}>{name} <span>{id}</span></button>)}
    </div>

    <section className="panel">
      <div className="section-head">
        <h2>{className} — family {familyId}</h2>
        <span className="badge">{baselineRows.length} original mappings</span>
      </div>

      <div className="mask-input-row">
        <label>Input Mask
          <input className="mono" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && load()} />
        </label>
        <button className="btn primary" onClick={load}>Load</button>
        <button className="btn" onClick={() => { setInput('0'); setOriginal(0n); setWorking(0n); setError(''); }}>Clear</button>
        <button className="btn" onClick={() => { const name = prompt('Preset name'); if (name) p.savePreset(`family:${familyId}`, name, working); }}>Save preset</button>
      </div>

      {error && <div className="alert error">{error}</div>}

      <div className="mask-result-hero sticky-results">
        <div className="result-heading">Working Mask</div>
        <div className="result-values">
          <div><span>Decimal</span><strong className="mono">{working.toString()}</strong></div>
          <div><span>Hex</span><strong className="mono">{toHex(working, 16)}</strong></div>
        </div>
      </div>

      <div className="mask-results compact-results">
        <Metric label="Input Decimal" value={original.toString()} />
        <Metric label="Input Hex" value={toHex(original, 16)} />
        <Metric label="Added" value={`${added} / ${toHex(added, 16)}`} />
        <Metric label="Removed" value={`${removed} / ${toHex(removed, 16)}`} />
        <Metric label="XOR" value={`${xor} / ${toHex(xor, 16)}`} />
      </div>

      {presets.length > 0 && <div className="preset-row">
        {presets.map((preset) => <span className="preset" key={preset.id}>
          <button onClick={() => { const mask = BigInt(preset.mask); setInput(preset.mask); setOriginal(mask); setWorking(mask); }}>{preset.name}</button>
          <button aria-label={`Delete ${preset.name}`} onClick={() => p.deletePreset(`family:${familyId}`, preset.id)}>×</button>
        </span>)}
      </div>}

      <div className="table-wrap family-table">
        <table>
          <thead><tr>
            <th className="xcol">X</th>
            <th>Bit</th>
            <th>Decimal</th>
            <th>Hex</th>
            <th>Original Ability / Description</th>
            <th>Custom Ability</th>
            <th>Custom Comment</th>
            <th>Status</th>
          </tr></thead>
          <tbody>{visibleBits.map((bitIndex) => {
            const row = baselineByBit.get(bitIndex);
            const key = `${familyId}:${bitIndex}`;
            const override = p.activeProfile.overrides.spellFamilyFlags[key] || {};
            const overridden = Boolean(override.customAbility || override.comment);
            const bitMask = 1n << BigInt(bitIndex);

            return <tr key={key} className={overridden ? 'overridden' : ''}>
              <td className="xcol"><label className="xcheck">
                <input type="checkbox" checked={hasBit(working, bitIndex)} onChange={(e) => setWorking((mask) => setBit(mask, bitIndex, e.target.checked))} aria-label={`Select bit ${bitIndex}`} />
                <span>×</span>
              </label></td>
              <td className="mono bit-cell">{bitIndex}</td>
              <td className="mono">{bitMask.toString()}</td>
              <td className="mono">{toHex(bitMask, 16)}</td>
              <td className="definition-cell">
                {row ? <>
                  <code className="enum">{row.ability}</code>
                  {row.comment && <div className="comment">{row.comment}</div>}
                </> : <span className="unassigned">—</span>}
              </td>
              <td><input aria-label={`Custom ability for ${key}`} value={override.customAbility || ''} onChange={(e) => p.setFamilyOverride(key, { ...override, customAbility: e.target.value })} /></td>
              <td><input aria-label={`Custom comment for ${key}`} value={override.comment || ''} onChange={(e) => p.setFamilyOverride(key, { ...override, comment: e.target.value })} /></td>
              <td>
                <span className={`badge ${overridden ? 'warn' : 'subtle'}`}>{overridden ? 'Overridden' : row ? 'Inherited' : 'Unassigned'}</span>
                {overridden && <button className="link-btn" onClick={() => p.resetFamilyOverride(key)}>Reset Override</button>}
              </td>
            </tr>;
          })}</tbody>
        </table>
      </div>
    </section>
  </>;
}

function Metric({ label, value }: { label: string; value: string }) {
  return <div><span>{label}</span><strong className="mono">{value}</strong></div>;
}
