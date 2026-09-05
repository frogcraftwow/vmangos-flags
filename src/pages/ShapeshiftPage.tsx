import { PageHeader } from '../components/PageHeader';
import { MaskTool } from '../components/MaskTool';
import { shapeshift } from '../data/shapeshift';
export default function ShapeshiftPage(){return <><PageHeader title="Shapeshift Mask" description="All supplied shapeshift rows, including unnamed/reserved forms, with build and decode controls."/><MaskTool title="Shapeshift Forms" flags={shapeshift.map(r=>({name:`${r.id} · ${r.form}`,bitIndex:r.bitIndex,decimal:r.decimal,hex:r.hex,description:r.form==='—'?'Unnamed / reserved row preserved from source.':''}))} presetScope="shapeshift" maxBits={32}/></>}
