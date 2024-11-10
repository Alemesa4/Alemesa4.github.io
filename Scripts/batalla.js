let tupokemon = JSON.parse(localStorage.getItem('tupokemon'));
let pokemonRival = JSON.parse(localStorage.getItem('pokemonrival'));
let curarrival = true;
let terminado = false;
let cura = true;
const Campo=document.createElement("div");
Campo.classList.add("campo");
Campo.setAttribute("id","campo");
Bloque.appendChild(Campo);
    const log = document.createElement("div");
    log.classList.add("log");
    Campo.appendChild(log);
import { audio } from './script3.js';
export function detenerAudioFondo() {
    if (!audio.paused) {
        audio.pause();
    }
}

let logCombate = [];
export function addLogCombate(mensaje, color = "white") {
    logCombate.push({ mensaje, color });
    const p = document.createElement("p");
    p.style.color = color;
    p.innerText = mensaje;
    log.appendChild(p);
    log.scrollTo(0, log.scrollHeight);
}
export function atacar() {
    if (terminado) return;
    let multicritico = 1;
    const critico = Math.floor(Math.random() * 100) + 1;
    if (critico <= 6) {
        multicritico = 1.5;
    }
    let power = 50;
    switch (tupokemon.evo) {
        case 1:
            power = 50;
            break;
        case 2:
            power = 80;
            break;
        case 3:
            power = 100;
            break;
        default:
            power = 50;
            break;
    }

    let randomFactor = 0.85 + Math.random() * (1.0 - 0.85);
    let Damage = Math.floor((tupokemon.attack / pokemonRival.defense) * power * randomFactor * multicritico);
    pokemonRival.hp -= Damage;
    if (pokemonRival.hp < 0) pokemonRival.hp = 0;

    addLogCombate("El pokemon rival ha recibido " + Damage + " de daño","white")
    if (critico <= 6) {
        addLogCombate("El ataque fue critico","gold");  
    }
    actualizarhp();

    if (!terminado) {
        localStorage.setItem('pokemonrival', JSON.stringify(pokemonRival));
        setTimeout(turnorival, 1000);
    }
}

export function curar() {
    if (terminado) return;
    if (!cura) {
        return;
    }
    tupokemon.hp = Math.floor((tupokemon.hpmax / 2) + tupokemon.hp);
    if (tupokemon.hp > tupokemon.hpmax) tupokemon.hp = tupokemon.hpmax;
    actualizarhp();
    addLogCombate("Has curado tu pokemon","green");

    cura = false;
    if (!terminado) {
        setTimeout(turnorival, 1000);
    }
}

export function actualizarhp() {
    let hp = document.getElementById("hp");
    hp.innerText = " " + tupokemon.hp + "/";
    let hpbar = document.getElementById("hpbar");
    hpbar.style.width = (tupokemon.hp * 100 / tupokemon.hpmax) * (64 / 100) + "%";

    let hp2 = document.getElementById("hp2");
    hp2.innerText = " " + pokemonRival.hp + "/";
    let hpbar2 = document.getElementById("hpbar2");
    hpbar2.style.width = (pokemonRival.hp * 100 / pokemonRival.hpmax) * (64 / 100) + "%";

    if (tupokemon.hp === 0 && !terminado) {
        terminado = true;
        mostrarMensajeFinal("Has perdido, dejame que te cure a tus pokemon y vuelve a intentar", "red");
        detenerAudioFondo();
        const audioderrota = new Audio('Audio/Defeat.mp3');
        audioderrota.volume = 0.3;
        audioderrota.play();
    } else if (pokemonRival.hp === 0 && !terminado) {
        terminado = true;
        mostrarMensajeFinal("¡Has ganado a RED! ¡Felicidades!", "green");
        detenerAudioFondo();
        const audiovictoria = new Audio('Audio/Victory.mp3');
        audiovictoria.volume = 0.3;
        audiovictoria.play();

    }
}

export function turnorival() {
    if (terminado) return;

    let accionrival = Math.floor(Math.random() * 2) + 1;
    if (!curarrival) accionrival = 1;

    console.log(accionrival);

    if (accionrival === 1) {
        let multicritico = 1;
    const critico = Math.floor(Math.random() * 100) + 1;
    if (critico <= 6) {
        multicritico = 1.5;
    }
        let power = 50;
        switch (tupokemon.evo) {
            case 1:
                power = 50;
                break;
            case 2:
                power = 80;
                break;
            case 3:
                power = 100;
                break;
            default:
                power = 50;
                break;
        }

        let randomFactor = 0.85 + Math.random() * (1.0 - 0.85);
        let Damagerival = Math.floor((pokemonRival.attack / tupokemon.defense) * power * randomFactor * multicritico);
        tupokemon.hp -= Damagerival;
        if (tupokemon.hp < 0) tupokemon.hp = 0;
        addLogCombate("El pokemon rival te ha atacado con " + Damagerival + " de daño","red");
        if (critico) {
            addLogCombate("¡El ataque ha sido crítico!", "gold");
        }
        actualizarhp();
    } else {
        curarrival = false;
        pokemonRival.hp = Math.floor((pokemonRival.hpmax / 2) + pokemonRival.hp);        if (pokemonRival.hp > pokemonRival.hpmax) pokemonRival.hp = pokemonRival.hpmax;
        addLogCombate("El pokemon rival se ha curado","green");

        actualizarhp();
    }
}

function mostrarMensajeFinal(mensaje, color) {
    const mensajefinal = document.createElement("div");
    mensajefinal.classList.add("mensajefinal");
    mensajefinal.innerText = mensaje;
    mensajefinal.style.backgroundColor = color;
    mensajefinal.style.animation = "fadein 2s";
    document.body.appendChild(mensajefinal);

}
export function retirada() {
    if (terminado) return;
    terminado = true;
    mostrarMensajeFinal("Has perdido el combate", "red");
    detenerAudioFondo();
    const audioderrota = new Audio('Audio/Defeat.mp3');
    audioderrota.volume = 0.3;
    audioderrota.play();

}
