import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Background Shapes */}
      <div className="shape shape-cube" style={{ top: '15%', left: '10%', animationDuration: '25s' }}></div>
      <div className="shape shape-circle" style={{ top: '60%', left: '80%', animationDuration: '30s' }}></div>
      <div className="shape shape-triangle" style={{ top: '80%', left: '15%', animationDuration: '20s' }}></div>
      <div className="shape shape-cube" style={{ top: '30%', left: '60%', animationDuration: '35s', width: '30px', height: '30px' }}></div>
      <div className="shape shape-circle" style={{ top: '10%', left: '90%', animationDuration: '40s', width: '40px', height: '40px' }}></div>

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Awards />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
