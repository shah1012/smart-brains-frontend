import React from "react";
import Particles from "react-particles-js";

const ParticalesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

const Background = () => {
  return <Particles params={ParticalesOptions} className="particles" />;
};

export default Background;
