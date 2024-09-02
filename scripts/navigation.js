const sections = ['intro', 'about', 'projects', 'contact'];
let currentIndex = 0;

function showSection(index) {
    sections.forEach((sectionId, i) => {
        const section = document.getElementById(sectionId);
        if (i === index) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    const currentSectionId = sections[index];
    const track = musicTracks[currentSectionId];
    changeMusic(track);
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sections.length;
    showSection(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sections.length) % sections.length;
    showSection(currentIndex);
});

document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const index = sections.indexOf(targetId);
        if (index !== -1) {
            currentIndex = index;
            // add active class to link
            // currentIndex.classList.add('active_link');
            showSection(currentIndex);
        }
    });
});

showSection(currentIndex);
