import { PageHeader } from '../components/PageHeader';
import { ReferenceTool } from '../components/ReferenceTool';
import { auraStates } from '../data/spellTemplateReferences';

export default function AuraStatePage() {
  return <>
    <PageHeader title="Aura State" />
    <ReferenceTool title="Aura State" rows={auraStates} definitionScope="auras:aura-state" />
  </>;
}
