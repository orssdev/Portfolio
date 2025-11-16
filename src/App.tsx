import { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Welcome from './components/pages/Welcome';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-[#FF0000] border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider animate-pulse">ORSS</h1>
          <p className="text-gray-400 mt-4 animate-pulse">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <Header />
      <Welcome />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App
