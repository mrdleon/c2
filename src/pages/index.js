// src/pages/index.js

import Head from 'next/head';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Call from './components/Call';
import Investment from './components/Investment';
// import InvestmentV2 from './components/InvestmentV2';
import Package from './components/Package';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Box Crêpes - Setiap Lipatan Penuh Rasa</title>
        {/* ... meta tag lain ... */}
      </Head>

      <Hero /> 
      <AboutUs />
      <Features />
      <Call />
      <Investment />
      <Package />
    </>
  );
}