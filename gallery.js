const panels = document.querySelectorAll('.panel');
let currentAudio = null;


panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
        playSound(panel);
    });
});


function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

function playSound(panel) {
    // Stop the current audio if one is playing
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset the sound to the start
    }

    // Play the new audio
    const audio = panel.querySelector('audio');
    if (audio) {
        currentAudio = audio;
        currentAudio.play();
    }
}