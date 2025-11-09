import React from "react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio container">
      <h2 className="section-title">A montage of familiar faces and names.</h2>
      <p className="portfolio-desc">Some stories come from the biggest names. Others begin with bold, rising voices.</p>

      <div className="stats">
        <div className="stat">
          <div className="num">85+</div>
          <div className="stat-label">Projects</div>
        </div>
        <div className="stat">
          <div className="num">50+</div>
          <div className="stat-label">Happy Clients</div>
        </div>
        <div className="stat">
          <div className="num">10+</div>
          <div className="stat-label">Experts Team</div>
        </div>
      </div>
    </section>
  );
}
