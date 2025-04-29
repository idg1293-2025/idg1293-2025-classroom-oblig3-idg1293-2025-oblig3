//I had to change structure so the changes with the glitch and everything work

// all GSAP plugins
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {

  // Smooth scroll on start button
  const startButton = document.getElementById('startButton'); 

  if (startButton) {
    startButton.addEventListener('click', function () {
      const firstSection = document.querySelectorAll('section')[1]; 
      if (firstSection) {
        gsap.to(window, { duration: 1, scrollTo: { y: firstSection, offsetY: 0 }, ease: "power2.inOut" }); 
      }
    });
  }

  // Animate text blocks
  const textBlocks = document.querySelectorAll('.text-block, .middle-text');

  textBlocks.forEach(block => {
    gsap.set(block, { opacity: 0, y: 20 });

    ScrollTrigger.create({
      trigger: block,
      start: "top 100%",   // Start fading in when block reaches 80% of viewport
      end: "bottom 30%",     // Start fading out when block reaches 40%
      scrub: 0.5,        // Smooth animation following scroll
      onEnter: () => {
        gsap.to(block, { opacity: 1, y: 0, duration: 2, ease: "power2.out" });
      },
      onLeave: () => {
        gsap.to(block, { opacity: 0, y: -20, duration: 2, ease: "power2.in" });
      },
      onEnterBack: () => {
        gsap.to(block, { opacity: 1, y: 0, duration: 2, ease: "power2.out" });
      },
      onLeaveBack: () => {
        gsap.to(block, { opacity: 0, y: 20, duration: 2, ease: "power2.in" });
      }
    });
  });

  // Glitch effect on image
  const glitchImg = document.querySelector('.glitch-img');
  const blackout = document.querySelector('.blackout');
  const blink = document.querySelector('.blink');

  if (glitchImg) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            glitchImg.classList.add('start-glitch');

            setTimeout(() => {
              glitchImg.classList.add('full-glitch');

              setTimeout(() => {
                blink.style.opacity = 1;

                setTimeout(() => {
                  blink.style.opacity = 0;
                  blackout.style.opacity = 1;
                }, 150); 
              }, 5000);

            }, 2000);

          }, 3000); 
        }
      });
    }, { threshold: 0.5 });

    observer.observe(glitchImg);
  }

  //  Animate dramatic white messages after glitch
  const messages = document.querySelectorAll('.message');

  messages.forEach(message => {
    gsap.set(message, { opacity: 0, scale: 0.8 });

    ScrollTrigger.create({
      trigger: message,
      start: "top 60%",   // Fade in when message is at 60% of viewport
      end: "top 20%",     // Fade out when it goes past 20%
      scrub: true,
      onEnter: () => {
        gsap.to(message, { opacity: 1, scale: 1, duration: 2, ease: "power2.out" });
      },
      onLeave: () => {
        gsap.to(message, { opacity: 0, scale: 1.2, duration: 2, ease: "power2.in" });
      },
      onEnterBack: () => {
        gsap.to(message, { opacity: 1, scale: 1, duration: 2, ease: "power2.out" });
      },
      onLeaveBack: () => {
        gsap.to(message, { opacity: 0, scale: 0.8, duration: 2, ease: "power2.in" });
      }
    });
  });

});
