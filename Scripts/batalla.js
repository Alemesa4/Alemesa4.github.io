let tupokemon = JSON.parse(localStorage.getItem('tupokemon'));
let pokemonRival =JSON.parse(localStorage.getItem('pokemonrival'));

export function atacar() {
    let power=50;
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
    let Damage = Math.floor((tupokemon.attack / pokemonRival.defense) * power * randomFactor );
    pokemonRival.HP = pokemonRival.HP - Damage;
    localStorage.setItem('tupokemon', JSON.stringify(pokemon));    
    localStorage.setItem('pokemonrival', JSON.stringify(pokemonRival));
}
