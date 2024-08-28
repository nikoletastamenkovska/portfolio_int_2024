const musicTracks = {
    intro: '/soundtracks/1.First_Step.m4a',
    about: '/soundtracks/2.Cornfield_Chase.m4a',
    skills: '/soundtracks/3.Tick_Tock.m4a',
    projects: '/soundtracks/4.The_Wormhole.m4a',
    contact: '/soundtracks/5.Murph.m4a',
}

let currentSection = 'intro';
let audio = document.getElementById('background_music');

function playAudio() {
    audio.src = musicTracks[currentSection];
    audio.play();
}

function switchSection(section) {
    if (currentSection !== section) {
        currentSection = section;
        audio.src = musicTracks[currentSection];
        audio.play();
    }
}

document.getElementById('introductionLink').addEventListener('click', function () {
    switchSection('intro');
})
