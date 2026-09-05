import { PageHeader } from '../components/PageHeader';
import { MaskTool } from '../components/MaskTool';
const flags=Array.from({length:64},(_,bitIndex)=>({name:`Bit ${bitIndex}`,bitIndex,decimal:(1n<<BigInt(bitIndex)).toString(),hex:`0x${(1n<<BigInt(bitIndex)).toString(16).toUpperCase()}`}));
export default function GenericMaskPage(){return <><PageHeader title="Generic Mask Calculator" description="A BigInt replacement for MASK_CALCULATOR with decimal/hex input, active-bit decoding, X selection, and exact values beyond 32 bits."/><MaskTool title="64-bit Generic Mask" flags={flags} presetScope="generic-mask" maxBits={64}/></>}
