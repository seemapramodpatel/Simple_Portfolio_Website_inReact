import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalStyle from './components/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
