const tupokemon = JSON.parse(localStorage.getItem('tupokemon'));
const pokemon = JSON.parse(localStorage.getItem('pokemonarray'));
const pokemonRival = pokemon[Math.floor(Math.random() * pokemon.length)];
const Bloque = document.getElementById("Bloque");
const textoTu=document.createElement("h2");
textoTu.innerText="Tú";
textoTu.setAttribute("class","tu");
const textoRival=document.createElement("h2");
textoRival.innerText="RIVAL: RED";
textoRival.setAttribute("class","red");
const botoncombatir=document.createElement("button");
botoncombatir.innerText="COMBATIR";
botoncombatir.setAttribute("class","combatir");
console.log(tupokemon);
document.addEventListener("DOMContentLoaded", function mostrarpokemon() {
    const vs = document.createElement("div");
    vs.innerText = "VS";
    
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
    const divtypes = document.createElement("div");
    divtypes.classList.add("divtypes");
    tupokemon.types.forEach(type => {
        const types1 = document.createElement("span");
        types1.innerText = type;
        types1.setAttribute("class", type + "-background");
        types1.classList.add("types-pokemon");
        divtypes.appendChild(types1);

    })
    pokeball.appendChild(img);
    pokeball.appendChild(name);
    pokeball.appendChild(divtypes);
    Bloque.appendChild(textoTu);
    Bloque.appendChild(pokeball);
    Bloque.appendChild(vs);
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

    const divtypes2 = document.createElement("div");
    divtypes2.classList.add("divtypes");
    pokemonRival.types.forEach(type => {
        const types2 = document.createElement("span");
        types2.innerText = type;
        types2.setAttribute("class", type + "-background");
        types2.classList.add("types-pokemon");
        divtypes2.appendChild(types2);

    })
    pokeball2.appendChild(img2);
    pokeball2.appendChild(name2);
    pokeball2.appendChild(divtypes2);
    Bloque.appendChild(pokeball2);
    Bloque.appendChild(textoRival);
    Bloque.appendChild(botoncombatir);
    botoncombatir.onclick = () => {
        localStorage.setItem('tupokemon', JSON.stringify(tupokemon));
        localStorage.setItem('pokemonrival', JSON.stringify(pokemonRival));
        window.location.href = "batalla.html";
    }
});
