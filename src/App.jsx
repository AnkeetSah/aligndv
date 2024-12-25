import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Services from './components/Services';
import './App.css';
import Slider from './components/Slider';
import Footer from './components/Footer';
import ClientSlider from './components/ClientSlider';
import Client from './components/Client';
import PortoflioGrid from './components/PortfolioGrid';
import Portfolio from './components/Portfolio';
import Marque from './components/Marque';
import Scrol from './components/Scrol';



const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading-container">
          <video
            src="./videos/v1.mp4"
            autoPlay
            muted
            loop
            className="loading-video"
          />
        </div>
      ) : (
        <>
          <HeroSection />
          <About />
           <Marque/>
          <Services />
          <Scrol/>
          <Portfolio/>
                 <Client/>

          <Footer/>
  
        
        </>
      )}
    </div>
  );
};

export default App;

