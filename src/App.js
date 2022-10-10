import NavBar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./Context";
import Home from "./Pages/Home";
import Pokemones from "./Pages/Pokemones";
import NotFonund from "./Pages/NotFound";
import Detalle from "./Pages/Detalles";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Context.Provider value={""}>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pokemones" element={<Pokemones />} />
              <Route path="/pokemones/:name" element={<Detalle />} />
              <Route path="/*" element={<NotFonund />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
