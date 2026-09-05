import { PageHeader } from '../components/PageHeader';
import { MaskTool } from '../components/MaskTool';
import { creatureImmunities } from '../data/creatures';

export default function CreaturesPage() {
  return <>
    <PageHeader title="Creatures" />
    <MaskTool
      title="Creature Immunities"
      flags={creatureImmunities}
      presetScope="creatures:immunities"
      maxBits={32}
    />
  </>;
}
