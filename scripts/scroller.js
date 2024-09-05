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

            scrollTimeout = setTimeout(() => {
                scrollerInner.style.animationPlayState = 'running';
            }, 3000)
        });
    });
}