import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import { ThemeProvider } from 'styled-components';

import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyles';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const theme = {
  colors: {
    onyx: '#393E41',
    cinnabar: '#E94F37',
    ivory: '#fafafa'
  }
}

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Sidebar />
        <Header />
        <Routes>
          {routes.map(route => (
            <Route key={route.name} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;