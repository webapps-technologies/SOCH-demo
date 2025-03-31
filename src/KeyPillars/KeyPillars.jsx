import React from 'react';
import './KeyPillars.css';

function KeyPillars() {
  return (
    <div className="key-pillars">
      <div className="left-section">
        <h2 className="title">Key Pillars of SOCH</h2>
        <div className="video-container">
          <video autoPlay loop muted>
            <source src="/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-button-container">
            <p className="description">
                Lorem Ipsum is simply dummy text of the printing<br /> and typesetting industry.
            </p>
            <button className="know-more">Know More</button>
        </div>
      </div>
      <div className="right-section">
        <div className="pillars-grid">
          <div className="pillar-card">
            <img src="/keiicon.png" alt="Regenerative Travel" />
            <h3>Regenerative Travel</h3>
            <p>Reference site about Lorem Ipsum, giving information on its origins.</p>
          </div>
          <div className="pillar-card">
            <img src="/keiicon.png" alt="Cultural Heritage Awareness" />
            <h3>Cultural Heritage Awareness</h3>
            <p>Reference site about Lorem Ipsum, giving information on its origins.</p>
          </div>
          <div className="pillar-card active">
            <img src="/keiicon.png" alt="Skill Development" />
            <h3>Skill Development</h3>
            <p>Reference site about Lorem Ipsum, giving information on its origins.</p>
          </div>
          <div className="pillar-card">
            <img src="/keiicon.png" alt="The Hotelpedia" />
            <h3>The Hotelpedia</h3>
            <p>Reference site about Lorem Ipsum, giving information on its origins.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyPillars;