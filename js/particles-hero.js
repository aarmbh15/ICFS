// js/particles-hero.js
document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 90,                  // Slightly more particles for richer look
        density: { enable: true, value_area: 800 }
      },
      color: {
        value: ["#D61F26", "#FFFFFF", "#D61F26", "#B71C1C"]  
        // Main: ICFS Red (#D61F26) + Pure White + Darker Red shade for depth
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.6,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.15,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: true,
          speed: 3,
          size_min: 0.3,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 140,
        color: "#D61F26",          // ICFS Red lines
        opacity: 0.35,
        width: 1.2
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: {
          distance: 150,
          line_linked: { opacity: 0.8 }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true,
    fps_limit: 60
  });
});