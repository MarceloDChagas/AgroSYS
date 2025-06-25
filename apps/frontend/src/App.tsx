import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import './index.css';
import { HomePage } from './pages/HomePage';
import { DashboardPage } from './pages/DashboardPage';
import ColheitaPage from './pages/ColheitaPage';
import VendasPage from './pages/VendasPage';
import FerramentasPage from './pages/FerramentasPage';
import NovaColheitaPage from './pages/NovaColheitaPage';
import SolicitarFerramentaPage from "./pages/SolicitarFerramentaPage";
import DevolverFerramentaPage from "./pages/DevolverFerramentaPage";
import EditarFerramentaPage from "./pages/EditarFerramentaPage";
import ExcluirFerramentaPage from "./pages/ExcluirFerramentaPage";
import VendaCadastroPage from './pages/VendaCadastroPage';
import NotaFiscalPage from './pages/NotaFiscalPage';
import GerarNotaPage from './pages/GerarNotaPage';
import VisualizarNotaPage from './pages/VisualizarNotaPage';
import NotasFiscaisPage from './pages/NotasFiscaisPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/colheita" element={<ColheitaPage />} />
        <Route path="/vendas" element={<VendasPage />} />
        <Route path="/ferramentas" element={<FerramentasPage />} />
        <Route path="/colheita/nova" element={<NovaColheitaPage />} />
        <Route path="/ferramentas/solicitar" element={<SolicitarFerramentaPage />} />
        <Route path="/ferramentas/devolver" element={<DevolverFerramentaPage />} />
        <Route path="/ferramentas/editar" element={<EditarFerramentaPage />} />
        <Route path="/ferramentas/excluir" element={<ExcluirFerramentaPage />} />
        <Route path="/vendas/registrar" element={<VendaCadastroPage />} />
        <Route path="/vendas/nota" element={<NotaFiscalPage />} />
        <Route path="/notas/gerar" element={<GerarNotaPage />} />
        <Route path="/notas/visualizar" element={<VisualizarNotaPage />} />
        <Route path="/notas" element={<NotasFiscaisPage />} />
      </Routes>
    </Router>
  );
}

export default App;
