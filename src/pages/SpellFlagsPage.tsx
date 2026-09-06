import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { MaskTool } from '../components/MaskTool';
import { spellFlags } from '../data/spellFlags';

const hidden = new Set(['proc-flags', 'proc-flags-ex']);
const groups = spellFlags.filter((group) => !hidden.has(group.key))
  .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));

export default function SpellFlagsPage() {
  const [params, setParams] = useSearchParams();
  const requested = params.get('group');
  const group = useMemo(() => groups.find((item) => item.key === requested) ?? groups[0], [requested]);
  const maxBit = group.flags.reduce((max, flag) => Math.max(max, flag.bitIndex), 0);
  return <>
    <PageHeader title={group.name} />
    <div className="family-tabs">
      {groups.map((item) => <button key={item.key} className={item.key === group.key ? 'active' : ''} onClick={() => setParams({ group: item.key })}>{item.name}</button>)}
    </div>
    {group.presets?.length ? <div className="panel source-note preset-definitions">
      {group.presets.map((preset) => <span key={preset.name} className="mono">{preset.name} = {preset.decimal}</span>)}
    </div> : null}
    <MaskTool title={group.name} flags={group.flags} presetScope={`spellflags:${group.key}`} definitionScope={group.definitionScope ?? `spellflags:${group.key}`} maxBits={Math.max(8, maxBit + 1)} />
  </>;
}
