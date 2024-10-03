let accordions = document.querySelectorAll('.accordion_wrapper .accordion');

accordions.forEach(accordion => {
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