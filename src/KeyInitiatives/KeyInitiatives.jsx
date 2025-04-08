import React from "react";
import "./KeyInitiatives.css";

const KeyInitiatives = () => {
  const initiatives = [
    {
      id: 1,
      title: "Regenerative Travel For Indian Hotels & Spots",
      description:
        "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      icon: "/keiicon.png",
      active: false,
    },
    {
      id: 2,
      title: "Regenerative Travel For Indian Hotels & Spots",
      description:
        "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      icon: "/keiicon.png",
      active: false,
    },
    {
      id: 3,
      title: "Regenerative Travel For Indian Hotels & Spots",
      description:
        "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      icon: "/keiicon.png",
      active: false,
    },
    {
      id: 4,
      title: "Regenerative Travel For Indian Hotels & Spots",
      description:
        "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      icon: "/keiicon.png",
      active: false,
    },
  ];

  return (
      <section className="key-initiatives">
        <div className="header-container">
          <div className="text">
            <h2>Key Initiatives & Program</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been <br /> the industry's standard dummy text ever since the 1500s,
              when an unknown printer.
            </p>
          </div>
          <button className="know-mor">Know More</button>
        </div>

        <div className="initiatives-cards">
          {initiatives.map((item) => (
            <div key={item.id} className={`initiative-card ${item.active ? "active" : ""}`}>
              <div className="icon-container">
                <img src={item.icon} alt="Initiative Icon" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button className="explore-btn">{item.active ? "Explore Now" : "Explore Now"}</button>
            </div>
          ))}
        </div>
      </section>
  );
};

export default KeyInitiatives;
