/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#000000"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#000000",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#000000",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);
// ...existing code...
/*
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": { "enable": true, "value_area": 900 }
    },
    "color": { "value": ["#00fff7", "#ff00ff", "#00ffea", "#00ff90"] },
    "shape": {
      "type": ["circle", "polygon"],
      "stroke": { "width": 0, "color": "#000" },
      "polygon": { "nb_sides": 6 }
    },
    "opacity": {
      "value": 0.6,
      "random": true,
      "anim": { "enable": true, "speed": 1, "opacity_min": 0.3, "sync": false }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": { "enable": true, "speed": 3, "size_min": 0.5, "sync": false }
    },
    "line_linked": {
      "enable": true,
      "distance": 120,
      "color": "#00fff7",
      "opacity": 0.5,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": ["grab", "bubble"] },
      "onclick": { "enable": true, "mode": "repulse" },
      "resize": true
    },
    "modes": {
      "grab": { "distance": 200, "line_linked": { "opacity": 1 } },
      "bubble": { "distance": 250, "size": 12, "duration": 2, "opacity": 1, "speed": 3 },
      "repulse": { "distance": 200, "duration": 0.5 }
    }
  },
  "retina_detect": true
});
*/
// ...existing code...
/*
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60,
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": ["#00fff7", "#ff00ff", "#00ffea", "#ff0077"] },
    "shape": {
      "type": ["circle", "polygon"],
      "polygon": { "nb_sides": 6 },
      "stroke": { "width": 0, "color": "#000" }
    },
    "opacity": {
      "value": 0.6,
      "random": true,
      "anim": { "enable": true, "speed": 1, "opacity_min": 0.3, "sync": false }
    },
    "size": {
      "value": 6,
      "random": true,
      "anim": { "enable": true, "speed": 2, "size_min": 0.8, "sync": false }
    },
    "line_linked": {
      "enable": true,
      "distance": 140,
      "color": "#00fff7",
      "opacity": 0.3,
      "width": 1.5,
      "blink": true // not native, but we'll simulate with opacity animation
    },
    "move": {
      "enable": true,
      "speed": 1.5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": ["grab", "bubble"] },
      "onclick": { "enable": true, "mode": "repulse" },
      "resize": true
    },
    "modes": {
      "grab": { "distance": 200, "line_linked": { "opacity": 0.8 } },
      "bubble": { "distance": 180, "size": 10, "duration": 1, "opacity": 1 },
      "repulse": { "distance": 200, "duration": 0.4 }
    }
  },
  "retina_detect": true
});
*/
