import React from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          <img src={logo} alt="Varnan logo" className="site-logo" />
        </div>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a className="btn" href="#contact">Let's Talk</a>
        </nav>
      </div>
    </header>
  );
}
