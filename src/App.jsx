import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Cursor from './components/Cursor';

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <GlobalStyles />
        <Cursor />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </AppContainer>
    </Router>
  );
};

export default App;
