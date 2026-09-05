import { PageHeader } from '../components/PageHeader';
import { MaskTool, type MaskFlag } from '../components/MaskTool';
import { spellAttributes } from '../data/spellAttributes';

type SpellAttributeName = keyof typeof spellAttributes;

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

export default function SpellAttributePage({ enumName }: { enumName: SpellAttributeName }) {
  const rows = spellAttributes[enumName];
  const seenBits = new Set<number>();
  const flags: MaskFlag[] = [];

  for (const row of rows) {
    const bitIndex = bitIndexFromValue(row.value);
    if (bitIndex < 0 || seenBits.has(bitIndex)) continue;
    seenBits.add(bitIndex);
    flags.push({
      name: row.name,
      bitIndex,
      decimal: BigInt(row.value).toString(),
      hex: row.value,
      description: cleanComment(row.comment),
    });
  }

  const maxBit = flags.reduce((m, f) => Math.max(m, f.bitIndex), 0);

  return <>
    <PageHeader title={enumName} />
    <MaskTool title={enumName} flags={flags} presetScope={`attributes:${enumName}`} maxBits={Math.max(8, maxBit + 1)} />
  </>;
}
