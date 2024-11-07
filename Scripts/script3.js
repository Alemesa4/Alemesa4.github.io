window.addEventListener("load", () => {
    const audio = document.getElementById("audio");
    let botonm = document.getElementById("botonm");

    botonm.onclick = () => {
        if (audio.paused) {
            audio.play();
            botonm.innerHTML = `<img src="img/Volumen UP.png" alt="Unmute" class="mute"/>`;
        } else {
            audio.pause();
            botonm.innerHTML = `<img src="img/Volumen  OFF.png" alt="Mute" class="mute"/>`;
        }
    }
})