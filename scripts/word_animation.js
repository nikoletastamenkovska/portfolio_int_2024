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

// The animation for skills wrapper
document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".skills");
    const listItems = section.querySelectorAll(".animate_list_item");

    listItems.forEach(item => {
        const text = item.textContent;
        const words = text.split(/\s+/);
        item.innerHTML = words.map(word => `<span class="word_animate">${word}</span>`).join(' ');
        item.setAttribute('data-content', text);
    });

    const animatedWords = section.querySelectorAll(".word_animate");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                animateWords();
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(section);

    function animateWords() {
        animatedWords.forEach((word, idx) => {
            setTimeout(() => {
                word.classList.add("fade_in_slide");
            }, idx * 150);
        });
    }
});

