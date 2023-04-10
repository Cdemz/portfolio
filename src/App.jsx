import React from 'react';
import Header from './components/header/Header'
import Contact from './components/contact/Contact'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Porfolio'
import Experience from './components/experienc/Experience'
import Services from './components/services/Services'
import Testimonial from './components/testimonials/Testimonials'


function App() {
  return (

    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
      

    </>
  );
}

export default App;
