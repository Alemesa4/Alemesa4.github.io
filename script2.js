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
        img.src = tupokemon.img;
        const name = document.createElement("span");
        name.innerText = tupokemon.name;

        pokeball.appendChild(img);
        pokeball.appendChild(name);
        Bloque.appendChild(pokeball);

        const pokeball2 = document.createElement("div");
        switch (pokemonRival.evo) {
            case 1:
                pokeball2.classList.add("pokeball");

                break;
            case 2:
                pokeball2.classList.add("superball");
                break;
            case 3:
                pokeball2.classList.add("ultraball");
                break;
            case 4:
                pokeball2.classList.add("masterball");
                break;
            default:
                break;
        }
        pokeball2.setAttribute("id", pokemonRival.id);
        const img2 = document.createElement("img");
        img2.src = pokemonRival.img;
        const name2 = document.createElement("span");
        name2.innerText = pokemonRival.name;

        pokeball2.appendChild(img2);
        pokeball2.appendChild(name2);
        Bloque.appendChild(pokeball2);
    });
