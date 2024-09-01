document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelectorAll('.wrapper span');

    list.forEach(span => {
        const duration = Math.random() * 10 + 20;
        const delay = Math.random() * 10;

        span.style.animationDuration = `${duration}s`;
        span.style.animationDelay = `-${delay}s`;

        span.style.opacity = Math.random() > .5 ? 1 : 0
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelectorAll('.wrapper_reverse span');

    list.forEach(span => {
        const duration = Math.random() * 10 + 20;
        const delay = Math.random() * 10;

        span.style.animationDuration = `${duration}s`;
        span.style.animationDelay = `-${delay}s`;

        span.style.opacity = Math.random() > .5 ? 1 : 0
    });
})