import React from "react";

export default function Reel() {
  return (
    <section className="reel container">
      <h2 className="section-title">The Highlight Reel</h2>
      <p className="section-sub">Watch the magic we've captured.</p>

      <div className="video-frame">
        <div className="nav-arrow left">‹</div>
        <div className="video-placeholder">
          {/* You can embed YouTube iframe if you want. For assignment, placeholder is fine */}
          <div className="play-button">▶</div>
        </div>
        <div className="nav-arrow right">›</div>
      </div>
    </section>
  );
}
