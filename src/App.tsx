import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Dashboard from './pages/Dashboard';
import SpellFamilyFlagsPage from './pages/SpellFamilyFlagsPage';
import SpellFlagsPage from './pages/SpellFlagsPage';
import SpellReferencePage from './pages/SpellReferencePage';
import EquippedItemRequirementsPage from './pages/EquippedItemRequirementsPage';
import ShapeshiftPage from './pages/ShapeshiftPage';
import GenericMaskPage from './pages/GenericMaskPage';
import SkillLinesPage from './pages/SkillLinesPage';
import CreaturesPage from './pages/CreaturesPage';
import ProfileManagerPage from './pages/ProfileManagerPage';
import AuraStatePage from './pages/AuraStatePage';
import SpellAttributesPage from './pages/SpellAttributesPage';
import ProcFlagsPage from './pages/ProcFlagsPage';
import TargetCreatureTypePage from './pages/TargetCreatureTypePage';
import { SpellAuraPage, SpellEffectPage } from './pages/SpellEnumReferencePage';

export default function App() {
  return <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/mask-calculator" element={<GenericMaskPage />} />
      <Route path="/spell-family-flags" element={<SpellFamilyFlagsPage />} />
      <Route path="/spell-flags" element={<SpellFlagsPage />} />
      <Route path="/spells/reference/:group" element={<SpellReferencePage />} />
      <Route path="/spells/equipped-item-requirements" element={<EquippedItemRequirementsPage />} />
      <Route path="/spells/aura-state" element={<AuraStatePage />} />
      <Route path="/spells/spell-attributes" element={<SpellAttributesPage />} />
      <Route path="/spells/proc-flags" element={<ProcFlagsPage />} />
      <Route path="/spells/target-creature-type" element={<TargetCreatureTypePage />} />
      <Route path="/spells/spell-aura" element={<SpellAuraPage />} />
      <Route path="/spells/spell-effect" element={<SpellEffectPage />} />
      <Route path="/shapeshift" element={<ShapeshiftPage />} />
      <Route path="/creatures" element={<CreaturesPage />} />
      <Route path="/skill-lines" element={<SkillLinesPage />} />
      <Route path="/profiles" element={<ProfileManagerPage />} />
    </Route>
  </Routes>;
}
