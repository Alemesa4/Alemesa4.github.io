const tupokemon = JSON.parse(localStorage.getItem('tupokemon'));
const pokemonRival = JSON.parse(localStorage.getItem('pokemonrival'));
const Bloque =document.getElementById("Bloque");
import { atacar, actualizarhp,curar,retirada} from './batalla.js';
console.log(tupokemon,pokemonRival)

// archivo1.js
export const audio = document.getElementById("audio");

window.addEventListener("load", () => {
    let botonm = document.getElementById("botonm");
    audio.volume = 0.5;

    botonm.onclick = () => {
        if (audio.paused) {
            audio.play();
            botonm.innerHTML = `<img src="img/Volumen UP.png" alt="Unmute" class="mute"/>`;
        } else {
            audio.pause();
            botonm.innerHTML = `<img src="img/Volumen OFF.png" alt="Mute" class="mute"/>`;
        }
    };
});

document.addEventListener("DOMContentLoaded", function () { 
  
    const campo=document.getElementById("campo");
    const pokemon1=document.createElement("div");
    pokemon1.classList.add("tupokemon");
    const imgtu=document.createElement("img");
    imgtu.src=tupokemon.img;
    pokemon1.appendChild(imgtu);
    const name=document.createElement("span");
    name.innerText=tupokemon.name;
    const pokemondiv=document.createElement("div");
    pokemondiv.classList.add("pokemondiv");
    const hpDIV=document.createElement("div");
    hpDIV.classList.add("hpdiv");
    const HPTU=document.createElement("span");
    HPTU.setAttribute("id","hp");
    const HPTUMAX=document.createElement("span");
    HPTU.innerText=" " +tupokemon.hp+"/";
    HPTUMAX.innerText=tupokemon.hpmax;
    const hpBAR=document.createElement("div");
    hpBAR.classList.add("hpbar");
    hpBAR.setAttribute("id","hpbar");
    const hpBARBackground=document.createElement("div");
    hpBARBackground.classList.add("hpbarbackground");
    pokemondiv.appendChild(hpBARBackground);
    pokemondiv.appendChild(hpBAR);
    hpDIV.appendChild(name);
    hpDIV.appendChild(HPTU);
    hpDIV.appendChild(HPTUMAX);
    pokemondiv.appendChild(hpDIV);
    pokemon1.appendChild(pokemondiv);
    
    const pokemon2 = document.createElement("div");
    pokemon2.classList.add("rivalpokemon");
    const imgrival = document.createElement("img");
    imgrival.src = pokemonRival.img;
    pokemon2.appendChild(imgrival);
    const nameRival = document.createElement("span");
    nameRival.innerText = pokemonRival.name;
    pokemon2.appendChild(nameRival);
    const pokemon2div = document.createElement("div");
    pokemon2div.classList.add("pokemondiv2");
    const hpRIVALDIV = document.createElement("div");
    hpRIVALDIV.classList.add("hpdiv2");
    const HPRIVAL = document.createElement("span");
    HPRIVAL.setAttribute("id", "hp2");
    const HPRIVALMAX = document.createElement("span");
    HPRIVAL.innerText = " " + pokemonRival.hp + "/";
    HPRIVALMAX.innerText = pokemonRival.hpmax;
    const hpRIVALBAR = document.createElement("div");
    hpRIVALBAR.classList.add("hpbar2");
    hpRIVALBAR.setAttribute("id", "hpbar2");
    const hpRIVALBARBackground = document.createElement("div");
    hpRIVALBARBackground.classList.add("hpbarbackground2");
    pokemon2div.appendChild(hpRIVALBARBackground);
    pokemon2div.appendChild(hpRIVALBAR);
    hpRIVALDIV.appendChild(nameRival);
    hpRIVALDIV.appendChild(HPRIVAL);
    hpRIVALDIV.appendChild(HPRIVALMAX);
    pokemon2div.appendChild(hpRIVALDIV);
    pokemon2.appendChild(pokemon2div);
    
    const menu=document.createElement("div");
    menu.classList.add("menu");
    
    const ataque=document.createElement("button");
    ataque.innerText="ATAQUE";
    ataque.setAttribute("class","ataque");
    ataque.onclick=()=>atacar(tupokemon,pokemonRival);
    menu.appendChild(ataque);
    
    const curarse=document.createElement("button");
    curarse.innerText="CURAR";
    curarse.setAttribute("class","curar");
    curarse.onclick=()=>curar(tupokemon);
    menu.appendChild(curarse);
    
    const retirarse=document.createElement("button");
    retirarse.innerText="RETIRARSE";
    retirarse.setAttribute("class","retirarse ");
    retirarse.onclick=()=>retirada();
    menu.appendChild(retirarse);
    
    campo.appendChild(menu);
    
    campo.appendChild(pokemon1);
    campo.appendChild(pokemon2);
    Bloque.appendChild(campo);
    actualizarhp(tupokemon,pokemonRival);
})

