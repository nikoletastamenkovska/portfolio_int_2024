document.addEventListener('DOMContentLoaded', () => {
    const applyAnimation = (element) => {
        const spans = document.querySelectorAll(element);

        spans.forEach(span => {
            const duration = Math.random() * 10 + 20;
            const delay = Math.random() * 10;

            span.style.animationDuration = `${duration}s`;
            span.style.animationDelay = `-${delay}s`;
            span.style.opacity = Math.random() > 0.5 ? 1 : 0;
        });
    };

    applyAnimation('.about .wrapper span');
    applyAnimation('.wrapper_reverse span');
});
