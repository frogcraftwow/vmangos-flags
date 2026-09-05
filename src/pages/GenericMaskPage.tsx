import { PageHeader } from '../components/PageHeader';
import { MaskTool } from '../components/MaskTool';

const flags = Array.from({ length: 64 }, (_, bitIndex) => ({
  name: `BIT_${bitIndex}`,
  bitIndex,
  decimal: (1n << BigInt(bitIndex)).toString(),
  hex: `0x${(1n << BigInt(bitIndex)).toString(16).toUpperCase().padStart(16, '0')}`,
}));

export default function GenericMaskPage() {
  return <>
    <PageHeader title="Generic Mask Calculator" />
    <MaskTool title="64-bit Mask" flags={flags} presetScope="generic-mask" maxBits={64} />
  </>;
}
