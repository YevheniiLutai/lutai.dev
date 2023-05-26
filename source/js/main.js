/* ----- Checkbox ----- */
const checkboxes = document.querySelectorAll('input[name="group1"]');

const checkbox1 = document.querySelector('#checkbox1'),
      checkbox2 = document.querySelector('#checkbox2'),
      checkbox3 = document.querySelector('#checkbox3'),
      checkbox4 = document.querySelector('#checkbox4'),
      checkbox5 = document.querySelector('#checkbox5');

const aboutBlock1 = document.querySelector('.about__block_1'),
      aboutBlock2 = document.querySelector('.about__block_2'),
      aboutBlock3 = document.querySelector('.about__block_3'),
      aboutBlock4 = document.querySelector('.about__block_4'),
      aboutBlock5 = document.querySelector('.about__block_5');

function displayBlock (aboutBlock, checkboxt) {
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
          checkboxes.forEach(otherCheckbox => {
            if (otherCheckbox !== checkbox) {
              otherCheckbox.checked = false;
              aboutBlock.style.display = 'none';
            }
          });
        });
      });
    checkboxt.addEventListener('change', function() {
        if (this.checked) {
          aboutBlock.style.display = 'block';
        } else {
          aboutBlock.style.display = 'none';
        }
    });
};

displayBlock(aboutBlock1, checkbox1);
displayBlock(aboutBlock2, checkbox2);
displayBlock(aboutBlock3, checkbox3);
displayBlock(aboutBlock4, checkbox4);
displayBlock(aboutBlock5, checkbox5);
/* -------------------------------------------------------------- */


/* ----- Text Animation ----- */
const titleHeader = document.getElementsByClassName('header__title')[0],
      titleAbout = document.getElementsByClassName('about__title')[0],
      desAbout = document.getElementsByClassName('about__des')[0]

function textAnimeLeftRight (text, translate) {
  let observer = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true){
      anime({
        targets: text,
        easing: 'easeOutElastic(2, .50)',
        opacity: 1,
        translateX: translate,
        duration: 1500,
      });
      observer.disconnect();
    }
  }, { threshold: [0.2] });
  observer.observe(text);
};
function textAnimeTopBottom (text, translate) {
  let observer = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true){
      anime({
        targets: text,
        easing: 'easeOutElastic(2, .50)',
        opacity: 1,
        translateY: translate,
        duration: 1500,
      });
      observer.disconnect();
    }
  }, { threshold: [0.2] });
  observer.observe(text);
};

textAnimeLeftRight(titleHeader, [-800, 0])
textAnimeLeftRight(titleAbout, [800, 0])
// textAnimeTopBottom(desAbout, [400, 0])
/* -------------------------------------------------------------- */


/* ----- Header Background ----- */
particlesJS("particles-js", {
  "particles":{
    "number":{
      "value":140,
      "density":{
        "enable":true,"value_area":900
      }
    },
    "color":{
      "value":"#ff3600"},
      "shape":{
        "type":"circle",
        "stroke":{
          "width":0,"color":"#000000"},
          "polygon":{
            "nb_sides":5},
            "image":{
              "src":"img/github.svg",
              "width":100,
              "height":100
            }
          },
          "opacity":{
            "value":0.5,
            "random":false,
            "anim":{
              "enable":false,
              "speed":1,
              "opacity_min":0.1,
              "sync":false}},
              "size":{
                "value":4,
                "random":true,
                "anim":{
                  "enable":false,
                  "speed":40,
                  "size_min":0.1,
                  "sync":false}},
                  "line_linked":{
                    "enable":true,
                    "distance":150,
                    "color":"#ff3600",
                    "opacity":0.3,
                    "width":1
                  },
                  "move":{
                    "enable":true,
                    "speed":6,
                    "direction":"none",
                    "random":false,
                    "straight":false,
                    "out_mode":"out",
                    "bounce":false,
                    "attract":{
                      "enable":false,
                      "rotateX":600,
                      "rotateY":1200
                    }
                  }
                },
                "interactivity":{
                  "detect_on":"canvas",
                  "events":{
                    "onhover":{
                      "enable":true,
                      "mode":"repulse"
                    },
                    "onclick":{
                      "enable":true,
                      "mode":"push"
                    },
                    "resize":true
                  },
                  "modes":{
                    "grab":{
                      "distance":400,
                      "line_linked":{
                        "opacity":1
                      }
                    },
                    "bubble":{
                      "distance":400,
                      "size":40,
                      "duration":2,
                      "opacity":8,
                      "speed":3
                    },
                    "repulse":{
                      "distance":200,
                      "duration":0.4
                    },
                    "push":{
                      "particles_nb":4},
                      "remove":{
                        "particles_nb":2
                      }
                    }
                  },
                  "retina_detect":true
});
var count_particles, stats, update; 
stats = new Stats; stats.setMode(0); 
stats.domElement.style.position = 'absolute'; 
stats.domElement.style.left = '0px'; 
stats.domElement.style.top = '0px'; 
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles'); 
update = function() { 
  stats.begin(); 
  stats.end(); 
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { 
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; 
  } requestAnimationFrame(update); 
}; 
requestAnimationFrame(update);;
/* ------------------------- */