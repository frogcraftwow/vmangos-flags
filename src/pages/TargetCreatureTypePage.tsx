import { PageHeader } from '../components/PageHeader';
import { MaskTool } from '../components/MaskTool';
import { targetCreatureTypes } from '../data/creatures';

export default function TargetCreatureTypePage() {
  return <>
    <PageHeader title="Target Creature Type" />
    <MaskTool title="targetCreatureType" flags={targetCreatureTypes} presetScope="spells:target-creature-type" definitionScope="spells:target-creature-type" maxBits={32} />
  </>;
}
