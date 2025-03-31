import React from 'react';
import './GetInvolved.css';

const cards = [
  { id: 1, title: 'Partner with Us', img: '/plants.jpg', description: '' },
  { id: 2, title: 'Donate', img: '/donate.jpg', description: 'Contribution options for individuals and corporations.' },
  { id: 3, title: 'Volunteer', img: '/hands.jpg', description: '' }
];

function GetInvolved() {
  return (
    <section className="get-involved">
      <div className="text-section">
        <h2>Get Involved</h2>
        <p><strong>(How You Can Help)</strong> text of the printing and typesetting industry.<br />
        Lorem Ipsum has been the industry’s</p>
        <button className="know-more">Know More</button>
      </div>
      <div className="cards-container">
        {cards.map(card => (
          <div key={card.id} className="card">
            <img src={card.img} alt={card.title} />
            <div className="card-overlay">
              <h3>{card.title}</h3>
              {card.description && <p>{card.description}</p>}
              {card.description && <span className="arrow">→</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GetInvolved;
