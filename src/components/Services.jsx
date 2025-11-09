import React from "react";

const ServiceCard = ({ title, desc }) => (
  <div className="service-card">
    <div className="polaroid">
      <div className="image-placeholder" />
      <div className="label">{title}</div>
    </div>
    <p className="service-desc">{desc}</p>
  </div>
);

export default function Services() {
  return (
    <section id="services" className="services container">
      <h2 className="section-title">The storyboard reveals the breadth of our craft.</h2>
      <div className="services-grid">
        <ServiceCard title="Film Production" desc="From first spark to final frame." />
        <ServiceCard title="Branding" desc="Design and storytelling for brands." />
        <ServiceCard title="Art Curation" desc="Curating visual experiences." />
      </div>
    </section>
  );
}
