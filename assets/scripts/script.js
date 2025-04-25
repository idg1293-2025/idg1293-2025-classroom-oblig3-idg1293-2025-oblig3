// Sources: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
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