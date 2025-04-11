import React from 'react';
import './GetInvolved.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Element } from 'react-scroll';
import 'swiper/css';

const cards = [
  { id: 1, title: 'Partner with Us', img: '/plants.jpg', description: 'Contribution options for individuals and corporations.' },
  { id: 2, title: 'Donate', img: '/donate.jpeg', description: 'Contribution options for individuals and corporations.' },
  { id: 3, title: 'Volunteer', img: '/hands.jpg', description: 'Contribution options for individuals and corporations.' }
];

function GetInvolved() {
  return (
    <Element name="get-involved">
      <section className="get-involved">
        <div className="top-row">
          <div className="text-block">
            <h2>Get Involved</h2>
            <p>
              <strong>(How You Can Help)</strong> text of the printing and typesetting industry.<br />
              Lorem Ipsum has been the industry’s
            </p>
          </div>
          <button className="knowmore">Know More</button>
        </div>

        <div className="cards-container desktop-view">
          {cards.map(card => (
            <div key={card.id} className="card">
              <img src={card.img} alt={card.title} />
              <div className="card-overlay">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <span className="arrow">→</span>
              </div>
            </div>
          ))}
        </div>

        <div className="cards-container swiper-mobile-view">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {cards.map(card => (
              <SwiperSlide key={card.id}>
                <div className="card">
                  <img src={card.img} alt={card.title} />
                  <div className="card-overlay">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <span className="arrow">→</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </Element>
  );
}

export default GetInvolved;