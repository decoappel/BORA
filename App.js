import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import BuscaAvancada from "./BuscaAvancada";
import Comunidades from "./Comunidades";
import Sobre from "./Sobre";
import EventoDetalhado from "./EventoDetalhado";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscaavancada" element={<BuscaAvancada />} />
          <Route path="/comunidades" element={<Comunidades />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/eventodetalhado" element={<EventoDetalhado />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
