document.addEventListener("DOMContentLoaded", function() {
    const sounds = document.querySelectorAll(".sound");
    sounds.forEach(sound => {
        sound.addEventListener("click", function() {
            const audioElement = document.getElementById("audio");
            audioElement.src = this.getAttribute("data-sound");
            audioElement.play();
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var bgVideo = document.getElementById('bgVideo');
    bgVideo.setAttribute('playsinline', '');
    bgVideo.removeAttribute('controls');
});
