import { PageHeader } from '../components/PageHeader';
import { MaskTool } from '../components/MaskTool';
import { shapeshift } from '../data/shapeshift';

export default function ShapeshiftPage() {
  return <>
    <PageHeader title="Shapeshift" />
    <MaskTool
      title="Shapeshift Forms"
      flags={shapeshift.map((row) => ({
        name: `${row.id} · ${row.form}`,
        bitIndex: row.bitIndex,
        decimal: row.decimal,
        hex: row.hex,
      }))}
      presetScope="shapeshift"
      maxBits={32}
    />
  </>;
}
