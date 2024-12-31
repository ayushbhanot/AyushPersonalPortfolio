import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import {darkTheme} from './util/Theme';
import NavBar from './components/NavBar';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import { BrowserRouter as Router } from "react-router-dom";
import Projects from './components/Projects';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(167, 139, 250, 0.15) 0%,
      rgba(167, 139, 250, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 255, 255, 0) 50%,
      rgba(0, 255, 255, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
      <NavBar />
      <Body>
        <Hero />
        <Wrapper>
        <Skills />
        <Experience />
        </Wrapper>
        <Projects />
        <Contact />
      </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
