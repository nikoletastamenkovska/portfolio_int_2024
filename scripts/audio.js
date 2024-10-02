const musicTracks = {
    intro: '/soundtracks/1.First_Step.m4a',
    about: '/soundtracks/2.Cornfield_Chase.m4a',
    projects: '/soundtracks/4.The_Wormhole.m4a',
    contact: '/soundtracks/5.Murph.m4a',
}

const backgroundMusic = document.getElementById('background_music');
const playButton = document.getElementById('playButton');
let userInteracted = false;
let wasPlaying = false;

window.changeMusic = function (track) {
    if (!backgroundMusic.paused) {
        wasPlaying = true;
        backgroundMusic.pause();
    } else {
        wasPlaying = false;
    }

    backgroundMusic.src = track;

    if (userInteracted && wasPlaying) {
        backgroundMusic.play().catch(error => {
            console.log('Playback failed:', error);
        });
    }
}

function initializeMusic() {
    playButton.addEventListener('click', () => {
        userInteracted = true;
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

