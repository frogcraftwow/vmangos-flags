import { useMemo, useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { spellFamilyFlags } from '../data/spellFamilyFlags';
import { useProfiles } from '../context/ProfileContext';
import { hasBit, parseMask, setBit, toHex } from '../lib/masks';
import { useQueryParam } from '../lib/url';
import type { FamilyOverride } from '../lib/profiles';

const families = [
  ['Druid', 7],
  ['Hunter', 9],
  ['Mage', 3],
  ['Paladin', 10],
  ['Priest', 6],
  ['Rogue', 8],
  ['Shaman', 11],
  ['Warlock', 5],
  ['Warrior', 4],
] as const;

const CLIENT_MAX_BIT_INDEX = 50;
const visibleBits = Array.from({ length: CLIENT_MAX_BIT_INDEX + 1 }, (_, bitIndex) => bitIndex);
const owns = (value: object, key: string) => Object.prototype.hasOwnProperty.call(value, key);

export default function SpellFamilyFlagsPage() {
  const requested = Number(useQueryParam('family'));
  const [familyId, setFamilyId] = useState(families.some((x) => x[1] === requested) ? requested : 7);
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


  const updateAbility = (key: string, baseline: string, override: FamilyOverride, value: string) => {
    const next: FamilyOverride = { ...override };
    if (value === baseline) delete next.customAbility;
    else next.customAbility = value;
    p.setFamilyOverride(key, next);
  };

  const updateComment = (key: string, baseline: string, override: FamilyOverride, value: string) => {
    const next: FamilyOverride = { ...override };
    if (value === baseline) delete next.comment;
    else next.comment = value;
    p.setFamilyOverride(key, next);
  };

  return <>
    <PageHeader title="Spell Family Flags" />


    <div className="family-tabs">
      {families.map(([name, id]) => <button className={id === familyId ? 'active' : ''} key={id} onClick={() => {
        setFamilyId(id);
        setInput('0');
        setOriginal(0n);
        setWorking(0n);
        setError('');
      }}>{name}</button>)}
    </div>

    <section className="panel">
      <div className="section-head">
        <h2>{className} — SpellFamilyFlag {familyId}</h2>
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
            <th>Ability</th>
            <th>Comment</th>
          </tr></thead>
          <tbody>{visibleBits.map((bitIndex) => {
            const row = baselineByBit.get(bitIndex);
            const key = `${familyId}:${bitIndex}`;
            const override = p.activeProfile.overrides.spellFamilyFlags[key] || {};
            const baselineAbility = row?.ability ?? '';
            const baselineComment = row?.comment ?? '';
            const abilityOverridden = owns(override, 'customAbility');
            const commentOverridden = owns(override, 'comment');
            const overridden = abilityOverridden || commentOverridden;
            const effectiveAbility = abilityOverridden ? (override.customAbility ?? '') : baselineAbility;
            const effectiveComment = commentOverridden ? (override.comment ?? '') : baselineComment;
            const bitMask = 1n << BigInt(bitIndex);

            return <tr key={key} className={overridden ? 'overridden' : ''}>
              <td className="xcol"><label className="xcheck">
                <input type="checkbox" checked={hasBit(working, bitIndex)} onChange={(e) => setWorking((mask) => setBit(mask, bitIndex, e.target.checked))} aria-label={`Select bit ${bitIndex}`} />
                <span>×</span>
              </label></td>
              <td className="mono bit-cell">{bitIndex}</td>
              <td className="mono">{bitMask.toString()}</td>
              <td className="mono">{toHex(bitMask, 16)}</td>
              <td className="editable-cell">
                <div className="inline-edit">
                  <input
                    className={`mono enum-input${abilityOverridden ? ' edited' : ''}`}
                    aria-label={`Ability for ${key}`}
                    value={effectiveAbility}
                    placeholder="Unassigned"
                    title={abilityOverridden ? `Original: ${baselineAbility || 'unassigned'}` : undefined}
                    onChange={(e) => updateAbility(key, baselineAbility, override, e.target.value)}
                  />
                  {abilityOverridden && <button className="reset-inline" title={`Restore ${baselineAbility || 'unassigned'}`} aria-label={`Reset ability for ${key}`} onClick={() => updateAbility(key, baselineAbility, override, baselineAbility)}>↺</button>}
                </div>
                <div className="original-value"><span>Original</span><code>{baselineAbility || '—'}</code></div>
              </td>
              <td className="editable-cell comment-edit-cell">
                <div className="inline-edit">
                  <input
                    className={commentOverridden ? 'edited' : ''}
                    aria-label={`Comment for ${key}`}
                    value={effectiveComment}
                    placeholder=""
                    title={commentOverridden ? `Original: ${baselineComment || 'empty'}` : undefined}
                    onChange={(e) => updateComment(key, baselineComment, override, e.target.value)}
                  />
                  {commentOverridden && <button className="reset-inline" title="Restore original comment" aria-label={`Reset comment for ${key}`} onClick={() => updateComment(key, baselineComment, override, baselineComment)}>↺</button>}
                </div>
                <div className="original-value"><span>Original</span><code>{baselineComment || '—'}</code></div>
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
