// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Intersection Observer for reveal animations
const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Once revealed, we can stop observing
            // observer.unobserve(entry.target);
        }
    });
}, revealOptions);

// Observe sections and animated elements
document.querySelectorAll('section, .feature-card, .about-content').forEach(el => {
    observer.observe(el);
});

// Hero special entrance
window.addEventListener('load', () => {
    document.querySelector('.hero').classList.add('active');
});

// Smooth scroll logic is handled by CSS, but can be enhanced here if needed
