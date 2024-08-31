document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelectorAll(".intro span");

    list.forEach((span, idx) => {
        span.style.setProperty('--delay', idx + 1);
    });
})