function addScrollerAnimation() {
    const scrollers = document.querySelectorAll('.scroller');

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }

    function addAnimation() {
        scrollers.forEach(scroller => {
            scroller.setAttribute("data-animated", true);

            const scrollerInner = document.querySelector('.scroller_inner');
            let scrollTimeout;

            scroller.addEventListener('scroll', () => {
                scrollerInner.style.animationPlayState = 'paused';
                clearTimeout(scrollTimeout);

                if (scroller.scrollLeft >= scroller.scrollWidth / 3) {
                    scroller.scrollLeft = 0;
                }

                scrollTimeout = setTimeout(() => {
                    scrollerInner.style.animationPlayState = 'running';
                }, 3000);
            });
        });
    }
}

function observeSectionActivation() {
    const section = document.querySelector('#projects');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                addScrollerAnimation();
            }
        });
    });
    observer.observe(section);
}

document.addEventListener('DOMContentLoaded', () => {
    observeSectionActivation();
});