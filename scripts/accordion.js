let accordions = document.querySelectorAll('.accordion_wrapper .accordion');

accordions.forEach((accordion, idx) => {
    if (idx === 0) {
        accordion.classList.add('active');
    }
    accordion.addEventListener('click', () => {
        let isActive = accordion.classList.contains('active');

        accordions.forEach(content => {
            content.classList.remove('active');
        });
        if (!isActive) {
            accordion.classList.add('active');
        }
    });
});