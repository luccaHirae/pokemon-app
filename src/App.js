import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import PokemonDetails from './pages/PokemonDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
        <Route path="/*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;