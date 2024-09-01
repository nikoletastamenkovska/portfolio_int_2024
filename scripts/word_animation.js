document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelectorAll(".intro span");

    list.forEach((span, idx) => {
        span.style.setProperty('--delay', idx + 1);
    });
});

// the animating about_wrapper when is needed to start after loading the section;
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                const spans = entry.target.querySelectorAll('.about_wrapper p span');
                spans.forEach((span, idx) => {
                    span.style.setProperty('--animation-delay', `${idx * .4}s`);
                });
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach(section => {
        observer.observe(section)
    });
});