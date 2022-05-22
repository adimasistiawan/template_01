import React from 'react'
import Analityc from './components/Analityc';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';
import Service from './components/Service';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analityc/>
      <NewsLetter/>
      <Service/>
      <Footer/>
    </div>
  );
}

export default App;
