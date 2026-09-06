import { PageHeader } from '../components/PageHeader';
import { MaskTool } from '../components/MaskTool';
import { spellFlags } from '../data/spellFlags';

export default function ProcFlagsPage() {
  const groups = ['proc-flags', 'proc-flags-ex'].map((key) => spellFlags.find((group) => group.key === key)!).filter(Boolean);
  return <>
    <PageHeader title="Proc Flags" />
    <div className="multi-mask-workbench proc-workbench">
      {groups.map((group) => <MaskTool key={group.key} title={group.name} flags={group.flags} presetScope={`spellflags:${group.key}`} definitionScope={group.definitionScope ?? `spellflags:${group.key}`} maxBits={32} />)}
    </div>
  </>;
}
