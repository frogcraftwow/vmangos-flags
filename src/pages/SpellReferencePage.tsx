import { Navigate, useParams } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { ReferenceTool } from '../components/ReferenceTool';
import { spellReferenceGroups } from '../data/spellTemplateReferences';

export default function SpellReferencePage() {
  const { group } = useParams();
  const config = group && group in spellReferenceGroups ? spellReferenceGroups[group as keyof typeof spellReferenceGroups] : null;
  if (!config) return <Navigate to="/" replace />;
  return <>
    <PageHeader title={config.title} />
    <ReferenceTool title={config.title} rows={config.rows} definitionScope={config.scope} />
  </>;
}
