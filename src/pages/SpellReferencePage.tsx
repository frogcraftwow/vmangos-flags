import { Navigate, useParams } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { ReferenceTool } from '../components/ReferenceTool';
import { DbcReferencePicker } from '../components/DbcReferencePicker';
import { spellReferenceGroups } from '../data/spellTemplateReferences';

export default function SpellReferencePage() {
  const { group } = useParams();
  const config = group && group in spellReferenceGroups ? spellReferenceGroups[group as keyof typeof spellReferenceGroups] : null;
  if (!config) return <Navigate to="/" replace />;
  const dbcConfig = 'fields' in config ? config : null;
  return <>
    <PageHeader title={config.title} />
    {dbcConfig
      ? <DbcReferencePicker key={`dbc:${group}`} rows={dbcConfig.rows} selectorLabel={dbcConfig.selectorLabel} showOptionId={group !== 'spell-category'} />
      : <ReferenceTool key={`reference:${group}`} title={config.title} rows={config.rows} definitionScope={config.scope} />}
  </>;
}
