import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import { ThemeProvider } from 'styled-components';

import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyles';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import light from './styles/themes/light';
import { useSelector } from 'react-redux';
import dark from './styles/themes/dark';

const App = () => {
  const isDark = useSelector(state => state.theme)

  return (
    <Router>
      <ThemeProvider theme={isDark ? dark : light}>
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