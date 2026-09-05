import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { MaskTool, type MaskFlag } from '../components/MaskTool';
import { spellFlags } from '../data/spellFlags';
import { spellAttributes } from '../data/spellAttributes';

function bitIndexFromValue(value: string): number {
  const n = BigInt(value);
  if (n <= 0n || (n & (n - 1n)) !== 0n) return -1;
  let bit = 0;
  let v = n;
  while (v > 1n) {
    v >>= 1n;
    bit += 1;
  }
  return bit;
}

function cleanComment(comment: string): string {
  return comment.replace(/^\s*\d+\s*/, '').trim();
}

const attributeGroups = Object.entries(spellAttributes).map(([name, rows]) => {
  const seen = new Set<number>();
  const flags: MaskFlag[] = [];
  for (const row of rows) {
    const bitIndex = bitIndexFromValue(row.value);
    if (bitIndex < 0 || seen.has(bitIndex)) continue;
    seen.add(bitIndex);
    flags.push({
      name: row.name,
      bitIndex,
      decimal: BigInt(row.value).toString(),
      hex: row.value,
      description: cleanComment(row.comment),
    });
  }
  return {
    key: name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
    name,
    flags,
  };
});

const schoolMask = spellFlags.find((group) => group.key === 'school-mask')!;
const procFlags = spellFlags.filter((group) => group.key === 'proc-flags' || group.key === 'proc-flags-ex');
const groups = [schoolMask, ...attributeGroups, ...procFlags];

export default function SpellFlagsPage() {
  const [params, setParams] = useSearchParams();
  const requested = params.get('group');
  const group = useMemo(
    () => groups.find((item) => item.key === requested) ?? groups[0],
    [requested],
  );
  const maxBit = group.flags.reduce((max, flag) => Math.max(max, flag.bitIndex), 0);
  const presets = 'presets' in group ? group.presets : undefined;

  return <>
    <PageHeader title="Spell Flags" />
    <div className="family-tabs">
      {groups.map((item) => <button
        key={item.key}
        className={item.key === group.key ? 'active' : ''}
        onClick={() => setParams({ group: item.key })}
      >{item.name}</button>)}
    </div>
    {presets?.length ? <div className="panel source-note">
      {presets.map((preset) => <span key={preset.name} className="mono">{preset.name} = {preset.decimal}</span>)}
    </div> : null}
    <MaskTool
      title={group.name}
      flags={group.flags}
      presetScope={`spellflags:${group.key}`}
      maxBits={Math.max(8, maxBit + 1)}
    />
  </>;
}
