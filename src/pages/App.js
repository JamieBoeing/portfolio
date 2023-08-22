import React from 'react';
import Projects from '../components/Projects';
import NavBar from './NavBar';
import About from './About';
import Skills from './Skills';
import Education from './Education';

const App = () => {
  return (
    <div>
      <NavBar />
      <main>
        <h1>Title</h1>
        <About />
        <Projects />
        <Skills />
        <Education />
      </main>
    </div>
  );
};

export default App;