import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import './index.css';
import { HomePage } from './pages/HomePage';
import { DashboardPage } from './pages/DashboardPage';
import { ColheitaPage } from './pages/ColheitaPage';
import { VendasPage } from './pages/VendasPage';
import { NotasPage } from './pages/NotasPage';
import { FerramentasPage } from './pages/FerramentasPage';

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
        <Route path="/notas" element={<NotasPage />} />
        <Route path="/ferramentas" element={<FerramentasPage />} />
      </Routes>
    </Router>
  );
}

export default App;
