import React from "react";
import heroImg from "../assets/hero.png"; // put a hero placeholder or the screenshot here

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          
          {/* Render the imported hero image. You can style `.hero-img` in your CSS (e.g., width, max-width, object-fit) */}
          <img src={heroImg} alt="Varnan hero" className="hero-img" />
        </div>

        <div className="hero-right">
          <h1 className="hero-title">Varnan is where stories find their voice and form</h1>
          <p className="hero-sub">Films · Brands · Art</p>
          <p className="hero-desc">
            Since 2009, V’ve been telling stories - stories of people, their journeys, and the places that shape them.
Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters.
V doesn’t just tell stories - V honors them.
          </p>
        </div>
      </div>
    </section>
  );
}
