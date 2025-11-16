import Header from './components/Header';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Welcome from './components/pages/Welcome';

function App() {

  return (
    <>
      <Header />
      <Welcome />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App
