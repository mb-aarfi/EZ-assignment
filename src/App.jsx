import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Reel from "./components/Reel";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <Reel />
        <Portfolio />
        <ContactForm />
      </main>
    </div>
  );
}
