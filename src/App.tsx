import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Dashboard from './pages/Dashboard';
import SpellFamilyFlagsPage from './pages/SpellFamilyFlagsPage';
import SpellFlagsPage from './pages/SpellFlagsPage';
import ShapeshiftPage from './pages/ShapeshiftPage';
import GenericMaskPage from './pages/GenericMaskPage';
import SkillLinesPage from './pages/SkillLinesPage';
import WeaponsPage from './pages/WeaponsPage';
import CreaturesPage from './pages/CreaturesPage';
import ProfileManagerPage from './pages/ProfileManagerPage';

export default function App() {
  return <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/mask-calculator" element={<GenericMaskPage />} />
      <Route path="/spell-family-flags" element={<SpellFamilyFlagsPage />} />
      <Route path="/spell-flags" element={<SpellFlagsPage />} />
      <Route path="/shapeshift" element={<ShapeshiftPage />} />
      <Route path="/weapons" element={<WeaponsPage />} />
      <Route path="/creatures" element={<CreaturesPage />} />
      <Route path="/skill-lines" element={<SkillLinesPage />} />
      <Route path="/profiles" element={<ProfileManagerPage />} />

      <Route path="/spell-attributes" element={<Navigate to="/spell-flags?group=spell-attributes" replace />} />
      <Route path="/spell-attributes-ex" element={<Navigate to="/spell-flags?group=spell-attributes-ex" replace />} />
      <Route path="/spell-attributes-ex2" element={<Navigate to="/spell-flags?group=spell-attributes-ex2" replace />} />
      <Route path="/spell-attributes-ex3" element={<Navigate to="/spell-flags?group=spell-attributes-ex3" replace />} />
      <Route path="/spell-attributes-ex4" element={<Navigate to="/spell-flags?group=spell-attributes-ex4" replace />} />
    </Route>
  </Routes>;
}
