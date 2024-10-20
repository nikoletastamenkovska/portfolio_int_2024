const sections = ['intro', 'about', 'projects', 'contact'];
const navLinks = document.querySelectorAll('.navigation a');
let currentIndex = 0;

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function showSection(index) {
    sections.forEach((sectionId, i) => {
        const section = document.getElementById(sectionId);
        if (i === index) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    navLinks.forEach(link => {
        const targetId = link.getAttribute('href').substring(1);

        if (targetId === sections[index]) {
            link.classList.add('active_link');
        } else {
            link.classList.remove('active_link');
        }
    });

    const currentSectionId = sections[index];
    const track = musicTracks[currentSectionId];
    changeMusic(track);

    if (index === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;;
    }
    if (index === sections.length - 1) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}


nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sections.length;
    showSection(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sections.length) % sections.length;
    showSection(currentIndex);
});

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const index = sections.indexOf(targetId);
        if (index !== -1) {
            currentIndex = index;
            showSection(currentIndex);
        }
    });
});

showSection(currentIndex);
