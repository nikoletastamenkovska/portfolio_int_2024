const musicTracks = {
    intro: '/soundtracks/1.First_Step.m4a',
    about: '/soundtracks/2.Cornfield_Chase.m4a',
    skills: '/soundtracks/3.Tick_Tock.m4a',
    projects: '/soundtracks/4.The_Wormhole.m4a',
    contact: '/soundtracks/5.Murph.m4a',
}

const backgroundMusic = document.getElementById('background_music');
const playButton = document.getElementById('playButton');

window.changeMusic = function (track) {
    backgroundMusic.src = track;
    backgroundMusic.play();
}

function initializeMusic() {
    changeMusic(musicTracks['intro']);

    playButton.addEventListener('click', () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play().catch(error => {
                console.log('Playback failed:', error);
            });
            playButton.textContent = "No music allowed?!"
        }
        else {
            backgroundMusic.pause();
            playButton.textContent = 'Everything is better with music...'
        }
    });
}

initializeMusic();