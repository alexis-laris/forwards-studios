import { Routes, Route } from "react-router-dom";
import NavBar from "./componentes/navbar";
import Home from "./Home";
import Miniaturas from "./pages/miniaturas";
import Videos from "./pages/videos";

export default function App() {
  return (
    <>

      {/* AQUI DEFINIMOS LAS RUTAS DE LA APP Y EL NAVBAR COMO COMPONENTEN PARA TODAS */}

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/miniaturas" element={<Miniaturas />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </>
  );
}
