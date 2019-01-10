import React from 'react';

const Header = () => (
  <header className="nav-wrapper effect">
    <nav className="navbar-custom">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bm-navbar" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand effect" href="index-particles.html">Imozar</a>
        </div>


        <div className="collapse navbar-collapse" id="bm-navbar">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#home" className="scroll effect active" data-speed="800">HOME</a></li>
            <li><a href="#about" className="scroll effect" data-speed="1000">ABOUT</a></li>
            <li><a href="#services" className="scroll effect" data-speed="1400">SERVICES</a></li>
            <li><a href="#work" className="scroll effect" data-speed="1400">WORK</a></li>
            <li><a href="#clients" className="scroll effect" data-speed="1600">CLIENTS</a></li>
            <li><a href="#contact" className="scroll effect" data-speed="1700">CONTACT</a></li>
          </ul>
        </div>

      </div>
    </nav>
  </header>
);

export default Header;
