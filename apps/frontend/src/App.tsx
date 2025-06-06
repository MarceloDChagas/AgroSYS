import { Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import { LoginPage } from './pages/LoginPage';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<HomePage />} />
    </Routes>
  );
};

export default App;
