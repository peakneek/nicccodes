import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Videos from './Videos/Videos';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, videosData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [videos, setVideos] = useState([]);
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setVideos([...videosData]);
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, videos, footer }}>
      <Hero />
      <About />
      <Videos />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
