// Author : Vincent Garreau  - vincentgarreau.com
// MIT license: opensource.org/licenses/MIT
// Demo / Generator : vincentgarreau.com/particles.js
// GitHub : github.com/VincentGarreau/particles.js
// How to use? : Check the GitHub README

import React from 'react';
import Particles from 'react-particles-js';

function Particle(){
    return (
        <>
            <Particles width="100%" height="100vh" 
                params={{
                  particles: {
                    number: { value: 15, density: { enable: true, value_area: 800 } },
                    color: { value: "#2E1518" },
                    shape: {
                      type: "circle",
                      stroke: { width: 2, color: "#DA7B93" },
                      polygon: { nb_sides: 5 },
                      image: { src: "", width: 100, height: 100 }
                    },
                    opacity: {
                      value: 0.13928359549120531,
                      random: true,
                      anim: { enable: false, speed: 0.05, opacity_min: 0, sync: false }
                    },
                    size: {
                      value: 1000,
                      random: true,
                      anim: {
                        enable: false,
                        speed: 10.79854800594439,
                        size_min: 0.3,
                        sync: true
                      }
                    },
                    line_linked: {
                      enable: false,
                      distance: 1000.20472365193136,
                      color: "#376E6F",
                      opacity: 0.4,
                      width: 1
                    },
                    move: {
                      enable: true,
                      speed: 1,
                      direction: "none",
                      random: true,
                      straight: false,
                      out_mode: "out",
                      bounce: false,
                      attract: { enable: false, rotateX: 600, rotateY: 600 }
                    }
                  },
                  interactivity: {
                    detect_on: "canvas",
                    events: {
                      onhover: { enable: false, mode: "bubble" },
                      onclick: { enable: true, mode: "repulse" },
                      resize: true
                    },
                    modes: {
                      grab: { distance: 400, line_linked: { opacity: 1 } },
                      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
                      repulse: { distance: 400, duration: 0.4 },
                      push: { particles_nb: 50 },
                      remove: { particles_nb: 2 }
                    }
                  },
                  retina_detect: false
                }} 
            />
        </>
    );
};


export default Particle;