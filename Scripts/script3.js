const tupokemon = JSON.parse(localStorage.getItem('tupokemon'));
const pokemonRival = JSON.parse(localStorage.getItem('pokemonrival'));
const Bloque =document.getElementById("Bloque");

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
document.addEventListener("DOMContentLoaded", function () {
const campo =document.createElement("div");
campo.classList.add("campo");
const tupokemon=document.createElement("div");
tupokemon.classList.add("tupokemon");
const imgtu=document.createElement("img");
imgtu.src=tupokemon.img;
tupokemon.appendChild(imgtu);
const name=document.createElement("span");
name.innerText=tupokemon.name;
tupokemon.appendChild(name);
const divtypes=document.createElement("div");
divtypes.classList.add("divtypes");
tupokemon.appendChild(divtypes);
campo.appendChild(tupokemon);
Bloque.appendChild(campo);
})

