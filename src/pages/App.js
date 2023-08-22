import React from 'react';
import Projects from '../components/Projects';
import About from './About'; // Assuming you also have an About component

const App = () => {
  return (
    <div>
      <h1>My Portfolio</h1>
      <About />
      <Projects />
    </div>
  );
};

export default App;