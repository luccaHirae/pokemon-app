import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import PokemonDetails from './pages/PokemonDetails';

const theme = {
  colors: {
    primary: '#3F88C5',
    secondary: '#44BBA4',
    onyx: '#393E41',
    cinnabar: '#E94F37',
    ivory: '#F6F7EB'
  }
}

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;