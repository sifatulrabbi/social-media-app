import React from 'react';
import Hero from './Hero';
import About from './About';
import Features from './Features';
import Footer from './Footer';

const Home = () => {
  return (
    <div
      className={`bg-linear w-full max-w-screen h-full min-h-full p-container flex flex-col gap-[10vh] pt-[120px]`}
    >
      <Hero />
      <About />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
