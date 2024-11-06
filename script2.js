const tupokemon = JSON.parse(localStorage.getItem('tupokemon'));
const pokemonRival = JSON.parse(localStorage.getItem('pokemonRival'));
const Bloque = document.getElementById("Bloque");
document.addEventListener("DOMContentLoaded", function mostrarpokemon() {
        const pokeball = document.createElement("div");
        switch (tupokemon.evo) {
            case 1:
                pokeball.classList.add("pokeball");

                break;
            case 2:
                pokeball.classList.add("superball");
                break;
            case 3:
                pokeball.classList.add("ultraball");
                break;
            case 4:
                pokeball.classList.add("masterball");
                break;
            default:
                break;
        }
        pokeball.setAttribute("id", tupokemon.id);
        const img = document.createElement("img");
        const name = document.createElement("span");
        name.innerText = tupokemon.name;

        pokeball.appendChild(img);
        pokeball.appendChild(name);
        Bloque.appendChild(pokeball);
    });
