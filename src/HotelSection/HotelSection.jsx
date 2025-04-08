import React from 'react';
import './HotelSection.css';

const cards = [
  { id: 1, title: 'The Hotelpedia Website Text', img: '/hotel.jpg', description: 'Reference site about Lorem Ipsum, giving information on its origins' },
  { id: 2, title: 'The Hotel Almanac', img: '/hotel.jpg', description: 'Contribution options for individuals and corporations.' },
  { id: 3, title: 'Hotel Trends Grid', img: '/hotel.jpg', description: 'Contribution options for individuals and corporations.' }
];

function HotelSection() {
  return (
    <section className="get-involve">
      <div className="top-row">
        <div className="text-block">
          <h2>Events You Must Explore</h2>
          <p><strong>(How You Can Help)</strong> text of the printing and typesetting industry.<br />
            Lorem Ipsum has been the industry’s
          </p>
        </div>
        <button className="knowmore">Know More</button>
      </div>
      <div className="cards-container">
        {cards.map(card => (
          <div key={card.id} className="card">
            <img src={card.img} alt={card.title} />
            <div className="card-overlay">
              <h3>{card.title}</h3>
              {card.description && <p>{card.description}</p>}
              {card.description && <span className="arrow">→     Visit Now</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HotelSection;