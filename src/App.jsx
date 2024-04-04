import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import AllPokemonPage from "./pages/AllPokemonPage";
import Container from "react-bootstrap/esm/Container";
import PokemonDetailPage from "./pages/PokemonDetailPage";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pokemon" element={<AllPokemonPage />} />
          <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
