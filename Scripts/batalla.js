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
    pokemonRival.hp = pokemonRival.hp - Damage;
    if(pokemonRival.hp < 0){
        pokemonRival.hp = 0;
    }

    console.log("El pokemon rival ha recibido " + Damage + " de daños.");
    actualizarhp();
    localStorage.setItem('tupokemon', JSON.stringify(tupokemon));    
    localStorage.setItem('pokemonrival', JSON.stringify(pokemonRival));
}
export function curar(){
    tupokemon.hp=(tupokemon.hpmax/2)+tupokemon.hp;
    if(tupokemon.hpmax<tupokemon.hp){
        tupokemon.hp=tupokemon.hpmax;
    }
    actualizarhp();
    localStorage.setItem('tupokemon', JSON.stringify(tupokemon));
}


export function actualizarhp() {
    let hp = document.getElementById("hp");
    hp.innerText = " "+tupokemon.hp+"/";
    let hpbar=document.getElementById("hpbar");
    hpbar.style.width=(tupokemon.hp*100/tupokemon.hpmax)*(64/100)+"%";
    let hp2=document.getElementById("hp2");
    hp2.innerText=" "+pokemonRival.hp+"/";
    let hpbar2=document.getElementById("hpbar2");
    hpbar2.style.width=(pokemonRival.hp*100/pokemonRival.hpmax)*(64/100)+"%";
}
export function turnorival(){
    let accionrival;
    let curarrival=true;
    while (accionrival==2 && !curarrival) {
        
        accionrival=Math.floor(Math.random()*2)+1;
        if(accionrival==1){
            
        }

        
    }
    
}

