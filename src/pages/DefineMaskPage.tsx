import { PageHeader } from '../components/PageHeader';
import { MaskTool, type MaskFlag } from '../components/MaskTool';
import { spellDefines } from '../data/spellDefines';

type BitmaskDefineName = 'SpellAttributesCustom' | 'SpellAttributesInternal' | 'SpellCategoryFlags';

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

export default function DefineMaskPage({ enumName }: { enumName: BitmaskDefineName }) {
  const rows = spellDefines[enumName];
  const flags: MaskFlag[] = rows
    .map((row) => ({
      name: row.name,
      bitIndex: bitIndexFromValue(row.value),
      decimal: BigInt(row.value).toString(),
      hex: row.value,
      description: row.comment,
    }))
    .filter((row) => row.bitIndex >= 0);

  const zeroRows = rows.filter((row) => BigInt(row.value) === 0n);
  const maxBit = flags.reduce((m, f) => Math.max(m, f.bitIndex), 0);

  return <>
    <PageHeader title={enumName} />
    {zeroRows.length > 0 && <div className="panel compact-reference">
      {zeroRows.map((row) => <div key={row.name}><code>{row.name}</code><span className="mono">{row.value}</span></div>)}
    </div>}
    <MaskTool title={enumName} flags={flags} presetScope={`defines:${enumName}`} maxBits={Math.max(8, maxBit + 1)} />
  </>;
}
