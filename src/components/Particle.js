// src/components/StarParticles.js

import React from "react";
import Particles from "react-tsparticles";

const StarParticles = () => {
  const particlesParams = {
    particles: {
      number: {
        value: 50, // Number of particles
        density: {
          enable: true,
          value_area: 800,
        },
      },
      shape: {
        type: "star", // Change the shape to "star"
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      size: {
        value: 3, // Size of particles
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      opacity: {
        value: 0.8, // Opacity of particles
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 2, // Speed of particles
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <Particles
      params={particlesParams}
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default StarParticles;
