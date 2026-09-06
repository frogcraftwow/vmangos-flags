import { PageHeader } from '../components/PageHeader';
import { MaskTool, type MaskFlag } from '../components/MaskTool';
import { spellAttributes } from '../data/spellAttributes';

function bitIndexFromValue(value: string): number {
  const n = BigInt(value);
  if (n <= 0n || (n & (n - 1n)) !== 0n) return -1;
  let bit = 0; let v = n;
  while (v > 1n) { v >>= 1n; bit += 1; }
  return bit;
}

function cleanComment(comment: string): string { return comment.replace(/^\s*\d+\s*/, '').trim(); }

export default function SpellAttributesPage() {
  const groups = Object.entries(spellAttributes).map(([name, rows]) => {
    const flags: MaskFlag[] = rows
      .map((row): MaskFlag => ({ name: row.name, bitIndex: bitIndexFromValue(row.value), decimal: BigInt(row.value).toString(), hex: row.value, comment: cleanComment(row.comment) }))
      .filter((row) => row.bitIndex >= 0);
    return { name, flags };
  });
  return <>
    <PageHeader title="Spell Attributes" />
    <div className="multi-mask-workbench attributes-workbench">
      {groups.map((group) => <MaskTool key={group.name} title={group.name} flags={group.flags} presetScope={`spell-attributes:${group.name}`} definitionScope={`spell-attributes:${group.name}`} maxBits={32} />)}
    </div>
  </>;
}
