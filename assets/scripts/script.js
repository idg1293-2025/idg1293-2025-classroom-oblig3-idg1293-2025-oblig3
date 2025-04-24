const scene1 = document.querySelector('.scene1');
const scene2 = document.querySelector('.scene2');
const scene3 = document.querySelector('.scene3');
const scene4 = document.querySelector('.scene4');

// Callback for Intersection Observer
const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        } else {
            entry.target.classList.remove('in-view');
        }
    });
};

// Intersection Observer Options
const options = {
    threshold: 0.5 // Trigger when 50% of the scene is in the viewport
};

// Create observers for each scene
const observer1 = new IntersectionObserver(handleIntersection, options);
const observer2 = new IntersectionObserver(handleIntersection, options);
const observer3 = new IntersectionObserver(handleIntersection, options);
const observer4 = new IntersectionObserver(handleIntersection, options);

// Observe each scene
observer1.observe(scene1);
observer2.observe(scene2);
observer3.observe(scene3);
observer4.observe(scene4);