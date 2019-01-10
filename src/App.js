import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Work from './components/Work';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <About />
        <Service />
        <Work />
        <Clients />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
