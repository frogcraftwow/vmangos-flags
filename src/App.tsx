import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Dashboard from './pages/Dashboard';
import SpellFamilyFlagsPage from './pages/SpellFamilyFlagsPage';
import SpellAttributePage from './pages/SpellAttributePage';
import DefineMaskPage from './pages/DefineMaskPage';
import DefineValuePage from './pages/DefineValuePage';
import SpellFlagsPage from './pages/SpellFlagsPage';
import ShapeshiftPage from './pages/ShapeshiftPage';
import GenericMaskPage from './pages/GenericMaskPage';
import SkillLinesPage from './pages/SkillLinesPage';
import WeaponsPage from './pages/WeaponsPage';
import ProfileManagerPage from './pages/ProfileManagerPage';

export default function App() {
  return <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/spell-family-flags" element={<SpellFamilyFlagsPage />} />

      <Route path="/spell-attributes" element={<SpellAttributePage enumName="SpellAttributes" />} />
      <Route path="/spell-attributes-ex" element={<SpellAttributePage enumName="SpellAttributesEx" />} />
      <Route path="/spell-attributes-ex2" element={<SpellAttributePage enumName="SpellAttributesEx2" />} />
      <Route path="/spell-attributes-ex3" element={<SpellAttributePage enumName="SpellAttributesEx3" />} />
      <Route path="/spell-attributes-ex4" element={<SpellAttributePage enumName="SpellAttributesEx4" />} />

      <Route path="/spell-attributes-custom" element={<DefineMaskPage enumName="SpellAttributesCustom" />} />
      <Route path="/spell-attributes-internal" element={<DefineMaskPage enumName="SpellAttributesInternal" />} />
      <Route path="/spell-category-flags" element={<DefineMaskPage enumName="SpellCategoryFlags" />} />
      <Route path="/spell-categories" element={<DefineValuePage enumName="SpellCategories" />} />
      <Route path="/spell-specific" element={<DefineValuePage enumName="SpellSpecific" />} />

      <Route path="/spell-flags" element={<SpellFlagsPage />} />
      <Route path="/shapeshift" element={<ShapeshiftPage />} />
      <Route path="/weapons" element={<WeaponsPage />} />
      <Route path="/skill-lines" element={<SkillLinesPage />} />
      <Route path="/mask-calculator" element={<GenericMaskPage />} />
      <Route path="/profiles" element={<ProfileManagerPage />} />
    </Route>
  </Routes>;
}
