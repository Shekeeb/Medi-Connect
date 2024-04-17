import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Mediconnect Hospital offers top-notch healthcare services, equipped with modern medical technology and staffed by a team of expert professionals. We cater to various medical needs, from emergencies and surgeries to diagnostics, rehabilitation, and preventive care. Our focus on patient comfort, safety, and satisfaction ensures a supportive environment for recovery and well-being.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;