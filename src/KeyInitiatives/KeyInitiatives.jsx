import React from "react";
import "./KeyInitiatives.css";

const KeyInitiatives = () => {
  const initiatives = [
    {
      id: 1,
      icon: "/icon1.png",
      title: "Regenerative Travel For Indian Hotels & Spots",
      description:
        "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      active: true,
    },
    {
      id: 2,
      icon: "/icon2.png",
      title: "Regenerative Travel For Indian Hotels & Spots",
      description:
        "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      active: false,
    },
    {
      id: 3,
      icon: "/icon3.png",
      title: "Regenerative Travel For Indian Hotels & Spots",
      description:
        "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      active: false,
    },
    {
      id: 4,
      icon: "/icon4.png",
      title: "Regenerative Travel For Indian Hotels & Spots",
      description:
        "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      active: false,
    },
  ];

  return (
    <section className="key-initiatives">
      <div className="content">
        <h2>Key Initiatives & Program</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer.
        </p>
        <button className="know-more">Know More</button>
      </div>

      <div className="initiatives-cards">
        {initiatives.map((item) => (
          <div
            key={item.id}
            className={`initiative-card ${item.active ? "active" : ""}`}
          >
            <div className="icon-container">
              <img src={item.icon} alt="icon" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className="explore-btn">Explore Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyInitiatives;
