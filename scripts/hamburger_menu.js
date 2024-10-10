const hamburgerMenuToggler = document.getElementById('hamburger_menu_toggler');

hamburgerMenuToggler.addEventListener('change', function () {
    if (hamburgerMenuToggler.checked) {
        hamburgerMenuToggler.setAttribute('aria-label', 'Close navigation menu');
    } else {
        hamburgerMenuToggler.setAttribute('aria-label', 'Open navigation menu');
    }
});