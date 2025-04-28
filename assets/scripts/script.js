// INTERSECTION OBSERVER
// Sources: 
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// https://github.com/aliakseix/IDG1293_15-observers/blob/master/infinite.scroll.js

const sceneElements = document.querySelectorAll(
    '.acts, .background, .beach, .changing, .corals, .cta, .ecosystems, .introduction, .plastic, .pollution, .readmore, .scroll, .sky'
); //selecting all parts

const options = {
    threshold: 0.5 
}; // the threshold for when elements are going to be visible (50% of viewport)

// the observer 
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
        }
    });
}, options);
  
sceneElements.forEach(el => observer.observe(el));

// GSAP ANIMATIONS
// Sources: 
// https://gsap.com/resources/get-started
// https://codepen.io/GreenSock/collections/


// activate scrolltrigger - enables scrollbased animation
gsap.registerPlugin(ScrollTrigger);

// beach.scss - crab walking back and forth
gsap.to(".beach__svg--crab", {
    x: 100,  // move 100px to the right
    duration: 3,  // 3 sec
    repeat: -1,   // infinite 
    yoyo: true,   // go back smoothly
    ease: "power1.inOut" 
});

// corals.scss - seaweed rotating back and forth
gsap.to(".corals__svg--seaweed1, .corals__svg--seaweed2, .corals__svg--seabottom", {
    rotate: 5,
    duration: 2,
    yoyo: true, //reverse the animation after complete - creates bouncing
    repeat: -1,
    ease: "sine.inOut" // the pacing, smooth movement
});

// ecosystems.scss - dolphin swimming
gsap.fromTo(".ecosystems__svg--dolphin",
    { x: -300, opacity: 0 }, // starting state, off the screen
    {
      scrollTrigger: {
        trigger: ".ecosystems",
        start: "top center",
        toggleActions: "play none none none"
      },
      x: 0, // where it moves to
      opacity: 1,
      duration: 1.8,
      ease: "power2.out" //speeds up
    }
);

// ecosystems.scss - jellfish and fishes moving up and down
gsap.to(".ecosystems__svg--jellyfish, .ecosystems__svg--green-fish, .ecosystems__svg--fishes", {
    scrollTrigger: {
      trigger: ".ecosystems",
      start: "top center"
    },
    y: "+=10", //moves element 1px up and down
    repeat: -1, //infinite
    yoyo: true, 
    duration: 2,
    ease: "sine.inOut"
});

// .scroll.scss - arrow bouncing up and down
gsap.to(".scroll__svg--arrow", {
    y: 15,
    duration: 1,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
});

//cta.scss - drop falling down
gsap.fromTo(".cta__svg",
    { y: -300, opacity: 0 }, // starting state, off the screen
    {
      scrollTrigger: {
        trigger: ".cta",
        start: "top center",
        toggleActions: "play none none none"
      },
      y: 0, // where it moves to
      opacity: 1,
      duration: 1.8,
      ease: "power2.out" //speeds up
    }
);

//readmore.scss seaweed growing
gsap.fromTo(".readmore__svg",
    { scaleY: 0, transformOrigin: "bottom center", opacity: 0 },
    {
      scrollTrigger: {
        trigger: ".readmore",
        start: "top center",
        toggleActions: "play none none none"
      },
      scaleY: 1,
      opacity: 1,
      duration: 1.8,
      ease: "power2.out"
    }
);

// Donate button, inspiration: https://codemyui.com/tag/button/
const donate = document.querySelector(".readmore__button");
const message = document.querySelector(".readmore__message");

// when button is clicked
donate.addEventListener("click", () => {
  // shoow message
  message.style.display = "block";

  // gsap animation
  gsap.fromTo(".readmore__message",
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
  );
});