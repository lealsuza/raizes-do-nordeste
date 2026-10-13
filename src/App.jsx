import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Aviso from './components/Aviso';
import CookieBanner from './components/CookieBanner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { AppStateProvider } from './context/AppState';
import Cardapio from './pages/Cardapio';
import Carrinho from './pages/Carrinho';
import Conta from './pages/Conta';
import Fidelidade from './pages/Fidelidade';
import Home from './pages/Home';
import Login from './pages/Login';
import Pedidos from './pages/Pedidos';
import Privacidade from './pages/Privacidade';
import Promocoes from './pages/Promocoes';

const GlobalStyle = createGlobalStyle`
  body { background-color: #FFF4DF; }
`;

function Shell() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Aviso />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/promocoes" element={<Promocoes />} />
          <Route path="/fidelidade" element={<Fidelidade />} />
          <Route path="/conta" element={<Conta />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}

export default function App() {
  return (
    <AppStateProvider>
      <Shell />
    </AppStateProvider>
  );
}
