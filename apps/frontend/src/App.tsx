import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./features/auth/pages/LoginPage";
import { RegisterPage } from "./features/auth/pages/RegisterPage";
import "./index.css";
import { HomePage } from "./features/auth/pages/HomePage";
import { DashboardPage } from "./features/dashboard/pages/DashboardPage";
import ColheitaPage from "./features/colheitas/pages/ColheitaPage";
import VendasPage from "./features/vendas/pages/VendasPage";
import FerramentasPage from "./features/ferramentas/pages/FerramentasPage";
import NovaColheitaPage from "./features/colheitas/pages/NovaColheitaPage";
import SolicitarFerramentaPage from "./features/ferramentas/pages/SolicitarFerramentaPage";
import DevolverFerramentaPage from "./features/ferramentas/pages/DevolverFerramentaPage";
import EditarFerramentaPage from "./features/ferramentas/pages/EditarFerramentaPage";
import ExcluirFerramentaPage from "./features/ferramentas/pages/ExcluirFerramentaPage";
import VendaCadastroPage from "./features/vendas/pages/VendaCadastroPage";
import NotaFiscalPage from "./features/notas/pages/NotaFiscalPage";
import GerarNotaPage from "./features/notas/pages/GerarNotaPage";
import VisualizarNotaPage from "./features/notas/pages/VisualizarNotaPage";
import NotasFiscaisPage from "./features/notas/pages/NotasFiscaisPage";
import UapPage from "./features/uaps/pages/UapPage";
import CadastroUapPage from "./features/uaps/pages/CadastroUapPage";
import InsumosPage from "./features/insumos/pages/InsumosPage";
import ProdutosPage from "./features/produtos/pages/ProdutosPage";
import CadastroInsumoPage from "./features/insumos/pages/CadastroInsumoPage";
import CadastroProdutoPage from "./features/produtos/pages/CadastroProdutoPage";
import EditarProdutoPage from "./features/produtos/pages/EditarProdutoPage";
<<<<<<< HEAD
=======
import PerfilPage from "./features/usuarios/pages/PerfilPage";
import ListaUsuariosPage from "./features/usuarios/pages/ListaUsuariosPage";
import PerfilAdminPage from "./features/usuarios/pages/PerfilAdminPage";
import CadastroUsuarioPage from "./features/usuarios/pages/CadastroUsuarioPage";
import EditarPermissaoPage from "./features/usuarios/pages/EditarPermissaoPage";
>>>>>>> 30a273d (chore: remove todos os console.log/console.error e corrige erros de linter relacionados a variáveis não usadas em catch)

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
        <Route
          path="/ferramentas/solicitar"
          element={<SolicitarFerramentaPage />}
        />
        <Route
          path="/ferramentas/devolver"
          element={<DevolverFerramentaPage />}
        />
        <Route path="/ferramentas/editar" element={<EditarFerramentaPage />} />
        <Route
          path="/ferramentas/excluir"
          element={<ExcluirFerramentaPage />}
        />
        <Route path="/vendas/registrar" element={<VendaCadastroPage />} />
        <Route path="/vendas/nota" element={<NotaFiscalPage />} />
        <Route path="/notas/gerar" element={<GerarNotaPage />} />
        <Route path="/notas/visualizar" element={<VisualizarNotaPage />} />
        <Route path="/notas" element={<NotasFiscaisPage />} />
        <Route path="/UapPage" element={<UapPage />} />
        <Route path="/uap/cadastro" element={<CadastroUapPage />} />
        <Route path="/insumos" element={<InsumosPage />} />
        <Route path="/produtos" element={<ProdutosPage />} />
        <Route path="/insumos/cadastro" element={<CadastroInsumoPage />} />
        <Route path="/produtos/cadastro" element={<CadastroProdutoPage />} />
        <Route path="/produtos/editar/:id" element={<EditarProdutoPage />} />
<<<<<<< HEAD
=======
        <Route path="/perfil" element={<PerfilPage />} />
        <Route path="/perfil/lista" element={<ListaUsuariosPage />} />
        <Route path="/perfil/admin" element={<PerfilAdminPage />} />
        <Route path="/perfil/cadastro" element={<CadastroUsuarioPage />} />
        <Route path="/perfil/editar" element={<EditarPermissaoPage />} />
>>>>>>> 30a273d (chore: remove todos os console.log/console.error e corrige erros de linter relacionados a variáveis não usadas em catch)

        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </Router>
  );
}

export default App;
