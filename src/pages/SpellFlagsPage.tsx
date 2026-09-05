import { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { MaskTool } from '../components/MaskTool';
import { spellFlags } from '../data/spellFlags';
import { useQueryParam } from '../lib/url';

export default function SpellFlagsPage() {
  const requested = useQueryParam('group');
  const [key, setKey] = useState(spellFlags.some((group) => group.key === requested) ? requested : spellFlags[0].key);
  const group = spellFlags.find((item) => item.key === key)!;

  return <>
    <PageHeader title="Spell Flags" />
    <div className="family-tabs">
      {spellFlags.map((item) => <button key={item.key} className={item.key === key ? 'active' : ''} onClick={() => setKey(item.key)}>{item.name}</button>)}
    </div>
    {'presets' in group && group.presets?.length ? <div className="panel source-note">
      {group.presets.map((preset) => <span key={preset.name} className="mono">{preset.name} = {preset.decimal}</span>)}
    </div> : null}
    <MaskTool title={group.name} flags={group.flags} presetScope={`spellflags:${group.key}`} maxBits={64} />
  </>;
}
