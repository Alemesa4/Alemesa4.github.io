const tupokemon = JSON.parse(localStorage.getItem('tupokemon'));
const pokemonRival = JSON.parse(localStorage.getItem('pokemonrival'));
const Bloque =document.getElementById("Bloque");
console.log(tupokemon,pokemonRival)

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
const pokemon1=document.createElement("div");
pokemon1.classList.add("tupokemon");
const imgtu=document.createElement("img");
imgtu.src=tupokemon.img;
pokemon1.appendChild(imgtu);
const name=document.createElement("span");
name.innerText=tupokemon.name;
pokemon1.appendChild(name);
const pokemon2 = document.createElement("div");
pokemon2.classList.add("rivalpokemon");
const imgrival = document.createElement("img");
imgrival.src = pokemonRival.img;
pokemon2.appendChild(imgrival);
const nameRival = document.createElement("span");
nameRival.innerText = pokemonRival.name;
pokemon2.appendChild(nameRival);
campo.appendChild(pokemon1);
campo.appendChild(pokemon2);
Bloque.appendChild(campo);
})

