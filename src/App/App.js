import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.module.scss';
import NavBar from '../components/NavBar/NavBar';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import ProjectPage from '../pages/ProjectPage/ProjectPage';
import ServicesPage from '../pages/ServicesPage/ServicesPage';


const App = () => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle route changes and set the transitioning state.
  useEffect(() => {
    setIsTransitioning(true);
    const transitionTimeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Adjust the timeout duration to match your CSS transition duration.

    return () => {
      clearTimeout(transitionTimeout);
    };
  }, [location]);

  return (
    <div className={`app-container${isTransitioning ? '-exit' : '-enter'}`}>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
