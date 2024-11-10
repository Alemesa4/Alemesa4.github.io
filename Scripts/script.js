const pokemon = [
    { id: 1, name: "Bulbasaur", img: "https://projectpokemon.org/images/normal-sprite/bulbasaur.gif", types: ["Grass", "Poison"], attack: 49, defense: 49, hp: 45, hpmax: 45, evo: 1 },
    { id: 2, name: "Ivysaur", img: "https://projectpokemon.org/images/normal-sprite/ivysaur.gif", types: ["Grass", "Poison"], attack: 62, defense: 63, hp: 60, hpmax: 60, evo: 2 },
    { id: 3, name: "Venusaur", img: "https://projectpokemon.org/images/normal-sprite/venusaur.gif", types: ["Grass", "Poison"], attack: 82, defense: 83, hp: 80, hpmax: 80, evo: 3 },
    { id: 4, name: "Charmander", img: "https://projectpokemon.org/images/normal-sprite/charmander.gif", types: ["Fire"], attack: 52, defense: 43, hp: 39, hpmax: 39, evo: 1 },
    { id: 5, name: "Charmeleon", img: "https://projectpokemon.org/images/normal-sprite/charmeleon.gif", types: ["Fire"], attack: 64, defense: 58, hp: 58, hpmax: 58, evo: 2 },
    { id: 6, name: "Charizard", img: "https://projectpokemon.org/images/normal-sprite/charizard.gif", types: ["Fire", "Flying"], attack: 84, defense: 78, hp: 78, hpmax: 78, evo: 3 },
    { id: 7, name: "Squirtle", img: "https://projectpokemon.org/images/normal-sprite/squirtle.gif", types: ["Water"], attack: 48, defense: 65, hp: 44, hpmax: 44, evo: 1 },
    { id: 8, name: "Wartortle", img: "https://projectpokemon.org/images/normal-sprite/wartortle.gif", types: ["Water"], attack: 63, defense: 80, hp: 59, hpmax: 59, evo: 2 },
    { id: 9, name: "Blastoise", img: "https://projectpokemon.org/images/normal-sprite/blastoise.gif", types: ["Water"], attack: 83, defense: 100, hp: 79, hpmax: 79, evo: 3 },
    { id: 10, name: "Caterpie", img: "https://projectpokemon.org/images/normal-sprite/caterpie.gif", types: ["Bug"], attack: 30, defense: 35, hp: 45, hpmax: 45, evo: 1 },
    { id: 11, name: "Metapod", img: "https://projectpokemon.org/images/normal-sprite/metapod.gif", types: ["Bug"], attack: 20, defense: 55, hp: 50, hpmax: 50, evo: 2 },
    { id: 12, name: "Butterfree", img: "https://projectpokemon.org/images/normal-sprite/butterfree.gif", types: ["Bug", "Flying"], attack: 45, defense: 50, hp: 60, hpmax: 60, evo: 3 },
    { id: 13, name: "Weedle", img: "https://projectpokemon.org/images/normal-sprite/weedle.gif", types: ["Bug", "Poison"], attack: 35, defense: 30, hp: 40, hpmax: 40, evo: 1 },
    { id: 14, name: "Kakuna", img: "https://projectpokemon.org/images/normal-sprite/kakuna.gif", types: ["Bug", "Poison"], attack: 25, defense: 50, hp: 45, hpmax: 45, evo: 2 },
    { id: 15, name: "Beedrill", img: "https://projectpokemon.org/images/normal-sprite/beedrill.gif", types: ["Bug", "Poison"], attack: 90, defense: 40, hp: 65, hpmax: 65, evo: 3 },
    { id: 16, name: "Pidgey", img: "https://projectpokemon.org/images/normal-sprite/pidgey.gif", types: ["Normal", "Flying"], attack: 45, defense: 40, hp: 40, hpmax: 40, evo: 1 },
    { id: 17, name: "Pidgeotto", img: "https://projectpokemon.org/images/normal-sprite/pidgeotto.gif", types: ["Normal", "Flying"], attack: 60, defense: 55, hp: 63, hpmax: 63, evo: 2 },
    { id: 18, name: "Pidgeot", img: "https://projectpokemon.org/images/normal-sprite/pidgeot.gif", types: ["Normal", "Flying"], attack: 80, defense: 75, hp: 83, hpmax: 83, evo: 3 },
    { id: 19, name: "Rattata", img: "https://projectpokemon.org/images/normal-sprite/rattata.gif", types: ["Normal"], attack: 56, defense: 35, hp: 30, hpmax: 30, evo: 3 },
    { id: 20, name: "Raticate", img: "https://projectpokemon.org/images/normal-sprite/raticate.gif", types: ["Normal"], attack: 81, defense: 60, hp: 55, hpmax: 55, evo: 3 },
    { id: 21, name: "Spearow", img: "https://projectpokemon.org/images/normal-sprite/spearow.gif", types: ["Normal", "Flying"], attack: 60, defense: 30, hp: 40, hpmax: 40, evo: 1 },
    { id: 22, name: "Fearow", img: "https://projectpokemon.org/images/normal-sprite/fearow.gif", types: ["Normal", "Flying"], attack: 90, defense: 65, hp: 65, hpmax: 65, evo: 3 },
    { id: 23, name: "Ekans", img: "https://projectpokemon.org/images/normal-sprite/ekans.gif", types: ["Poison"], attack: 60, defense: 44, hp: 35, hpmax: 35, evo: 1 },
    { id: 24, name: "Arbok", img: "https://projectpokemon.org/images/normal-sprite/arbok.gif", types: ["Poison"], attack: 85, defense: 69, hp: 60, hpmax: 60, evo: 3 },
    { id: 25, name: "Pikachu", img: "https://projectpokemon.org/images/normal-sprite/pikachu.gif", types: ["Electric"], attack: 55, defense: 40, hp: 35, hpmax: 35, evo: 2 },
    { id: 26, name: "Raichu", img: "https://projectpokemon.org/images/normal-sprite/raichu.gif", types: ["Electric"], attack: 90, defense: 55, hp: 60, hpmax: 60, evo: 3 },
    { id: 27, name: "Sandshrew", img: "https://projectpokemon.org/images/normal-sprite/sandshrew.gif", types: ["Ground"], attack: 75, defense: 85, hp: 50, hpmax: 50, evo: 1 },
    { id: 28, name: "Sandslash", img: "https://projectpokemon.org/images/normal-sprite/sandslash.gif", types: ["Ground"], attack: 100, defense: 110, hp: 75, hpmax: 75, evo: 3 },
    { id: 29, name: "Nidoran♀", img: "https://projectpokemon.org/images/normal-sprite/nidoran_f.gif", types: ["Poison"], attack: 47, defense: 52, hp: 55, hpmax: 55, evo: 1 },
    { id: 30, name: "Nidorina", img: "https://projectpokemon.org/images/normal-sprite/nidorina.gif", types: ["Poison"], attack: 62, defense: 67, hp: 70, hpmax: 70, evo: 2 },
    { id: 31, name: "Nidoqueen", img: "https://projectpokemon.org/images/normal-sprite/nidoqueen.gif", types: ["Poison", "Ground"], attack: 82, defense: 87, hp: 90, hpmax: 90, evo: 3 },
    { id: 32, name: "Nidoran♂", img: "https://projectpokemon.org/images/normal-sprite/nidoran_m.gif", types: ["Poison"], attack: 57, defense: 40, hp: 46, hpmax: 46, evo: 1 },
    { id: 33, name: "Nidorino", img: "https://projectpokemon.org/images/normal-sprite/nidorino.gif", types: ["Poison"], attack: 72, defense: 57, hp: 61, hpmax: 61, evo: 2 },
    { id: 34, name: "Nidoking", img: "https://projectpokemon.org/images/normal-sprite/nidoking.gif", types: ["Poison", "Ground"], attack: 92, defense: 77, hp: 81, hpmax: 81, evo: 3 },
    { id: 35, name: "Clefairy", img: "https://projectpokemon.org/images/normal-sprite/clefairy.gif", types: ["Fairy"], attack: 45, defense: 48, hp: 70, hpmax: 70, evo: 1 },
    { id: 36, name: "Clefable", img: "https://projectpokemon.org/images/normal-sprite/clefable.gif", types: ["Fairy"], attack: 70, defense: 73, hp: 95, hpmax: 95, evo: 3 },
    { id: 37, name: "Vulpix", img: "https://projectpokemon.org/images/normal-sprite/vulpix.gif", types: ["Fire"], attack: 41, defense: 40, hp: 38, hpmax: 38, evo: 1 },
    { id: 38, name: "Ninetales", img: "https://projectpokemon.org/images/normal-sprite/ninetales.gif", types: ["Fire"], attack: 76, defense: 75, hp: 73, hpmax: 73, evo: 3 },
    { id: 39, name: "Jigglypuff", img: "https://projectpokemon.org/images/normal-sprite/jigglypuff.gif", types: ["Normal", "Fairy"], attack: 45, defense: 20, hp: 115, hpmax: 115, evo: 1 },
    { id: 40, name: "Wigglytuff", img: "https://projectpokemon.org/images/normal-sprite/wigglytuff.gif", types: ["Normal", "Fairy"], attack: 70, defense: 45, hp: 140, hpmax: 140, evo: 3 },
    { id: 41, name: "Zubat", img: "https://projectpokemon.org/images/normal-sprite/zubat.gif", types: ["Poison", "Flying"], attack: 45, defense: 35, hp: 40, hpmax: 40, evo: 1 },
    { id: 42, name: "Golbat", img: "https://projectpokemon.org/images/normal-sprite/golbat.gif", types: ["Poison", "Flying"], attack: 80, defense: 70, hp: 75, hpmax: 75, evo: 3 },
    { id: 43, name: "Oddish", img: "https://projectpokemon.org/images/normal-sprite/oddish.gif", types: ["Grass", "Poison"], attack: 50, defense: 55, hp: 45, hpmax: 45, evo: 1 },
    { id: 44, name: "Gloom", img: "https://projectpokemon.org/images/normal-sprite/gloom.gif", types: ["Grass", "Poison"], attack: 65, defense: 70, hp: 60, hpmax: 60, evo: 2 },
    { id: 45, name: "Vileplume", img: "https://projectpokemon.org/images/normal-sprite/vileplume.gif", types: ["Grass", "Poison"], attack: 90, defense: 85, hp: 75, hpmax: 75, evo: 3 },
    { id: 46, name: "Paras", img: "https://projectpokemon.org/images/normal-sprite/paras.gif", types: ["Bug", "Grass"], attack: 70, defense: 55, hp: 35, hpmax: 35, evo: 1 },
    { id: 47, name: "Parasect", img: "https://projectpokemon.org/images/normal-sprite/parasect.gif", types: ["Bug", "Grass"], attack: 95, defense: 80, hp: 60, hpmax: 60, evo: 3 },
    { id: 48, name: "Venonat", img: "https://projectpokemon.org/images/normal-sprite/venonat.gif", types: ["Bug", "Poison"], attack: 55, defense: 50, hp: 60, hpmax: 60, evo: 1 },
    { id: 49, name: "Venomoth", img: "https://projectpokemon.org/images/normal-sprite/venomoth.gif", types: ["Bug", "Poison"], attack: 65, defense: 60, hp: 70, hpmax: 70, evo: 3 },
    { id: 50, name: "Diglett", img: "https://projectpokemon.org/images/normal-sprite/diglett.gif", types: ["Ground"], attack: 55, defense: 25, hp: 10, hpmax: 10, evo: 1 },
    { id: 51, name: "Dugtrio", img: "https://projectpokemon.org/images/normal-sprite/dugtrio.gif", types: ["Ground"], attack: 80, defense: 50, hp: 35, hpmax: 35, evo: 3 },
    { id: 52, name: "Meowth", img: "https://projectpokemon.org/images/normal-sprite/meowth.gif", types: ["Normal"], attack: 45, defense: 35, hp: 40, hpmax: 40, evo: 1 },
    { id: 53, name: "Persian", img: "https://projectpokemon.org/images/normal-sprite/persian.gif", types: ["Normal"], attack: 70, defense: 60, hp: 65, hpmax: 65, evo: 3 },
    { id: 54, name: "Psyduck", img: "https://projectpokemon.org/images/normal-sprite/psyduck.gif", types: ["Water"], attack: 52, defense: 48, hp: 50, hpmax: 50, evo: 1 },
    { id: 55, name: "Golduck", img: "https://projectpokemon.org/images/normal-sprite/golduck.gif", types: ["Water"], attack: 75, defense: 80, hp: 80, hpmax: 80, evo: 3 },
    { id: 56, name: "Mankey", img: "https://projectpokemon.org/images/normal-sprite/mankey.gif", types: ["Fighting"], attack: 80, defense: 35, hp: 40, hpmax: 40, evo: 1 },
    { id: 57, name: "Primeape", img: "https://projectpokemon.org/images/normal-sprite/primeape.gif", types: ["Fighting"], attack: 105, defense: 60, hp: 65, hpmax: 65, evo: 3 },
    { id: 58, name: "Growlithe", img: "https://projectpokemon.org/images/normal-sprite/growlithe.gif", types: ["Fire"], attack: 70, defense: 45, hp: 55, hpmax: 55, evo: 1 },
    { id: 59, name: "Arcanine", img: "https://projectpokemon.org/images/normal-sprite/arcanine.gif", types: ["Fire"], attack: 110, defense: 80, hp: 90, hpmax: 90, evo: 3 },
    { id: 60, name: "Poliwag", img: "https://projectpokemon.org/images/normal-sprite/poliwag.gif", types: ["Water"], attack: 50, defense: 40, hp: 40, hpmax: 40, evo: 1 },
    { id: 61, name: "Poliwhirl", img: "https://projectpokemon.org/images/normal-sprite/poliwhirl.gif", types: ["Water"], attack: 65, defense: 50, hp: 65, hpmax: 65, evo: 2 },
    { id: 62, name: "Poliwrath", img: "https://projectpokemon.org/images/normal-sprite/poliwrath.gif", types: ["Water"], attack: 75, defense: 65, hp: 90, hpmax: 90, evo: 3 },
    { id: 63, name: "Abra", img: "https://projectpokemon.org/images/normal-sprite/abra.gif", types: ["Psychic"], attack: 20, defense: 15, hp: 25, hpmax: 25, evo: 1 },
    { id: 64, name: "Kadabra", img: "https://projectpokemon.org/images/normal-sprite/kadabra.gif", types: ["Psychic"], attack: 35, defense: 30, hp: 40, hpmax: 40, evo: 2 },
    { id: 65, name: "Alakazam", img: "https://projectpokemon.org/images/normal-sprite/alakazam.gif", types: ["Psychic"], attack: 50, defense: 45, hp: 55, hpmax: 55, evo: 3 },
    { id: 66, name: "Machop", img: "https://projectpokemon.org/images/normal-sprite/machop.gif", types: ["Fighting"], attack: 80, defense: 35, hp: 70, hpmax: 70, evo: 1 },
    { id: 67, name: "Machoke", img: "https://projectpokemon.org/images/normal-sprite/machoke.gif", types: ["Fighting"], attack: 100, defense: 70, hp: 80, hpmax: 80, evo: 2 },
    { id: 68, name: "Machamp", img: "https://projectpokemon.org/images/normal-sprite/machamp.gif", types: ["Fighting"], attack: 130, defense: 80, hp: 90, hpmax: 90, evo: 3 },
    { id: 69, name: "Bellsprout", img: "https://projectpokemon.org/images/normal-sprite/bellsprout.gif", types: ["Grass", "Poison"], attack: 40, defense: 35, hp: 50, hpmax: 50, evo: 1 },
    { id: 70, name: "Weepinbell", img: "https://projectpokemon.org/images/normal-sprite/weepinbell.gif", types: ["Grass", "Poison"], attack: 60, defense: 50, hp: 65, hpmax: 65, evo: 2 },
    { id: 71, name: "Victreebel", img: "https://projectpokemon.org/images/normal-sprite/victreebel.gif", types: ["Grass", "Poison"], attack: 90, defense: 65, hp: 80, hpmax: 80, evo: 3 },
    { id: 72, name: "Tentacool", img: "https://projectpokemon.org/images/normal-sprite/tentacool.gif", types: ["Water", "Poison"], attack: 40, defense: 35, hp: 40, hpmax: 40, evo: 1 },
    { id: 73, name: "Tentacruel", img: "https://projectpokemon.org/images/normal-sprite/tentacruel.gif", types: ["Water", "Poison"], attack: 70, defense: 65, hp: 80, hpmax: 80, evo: 3 },
    { id: 74, name: "Geodude", img: "https://projectpokemon.org/images/normal-sprite/geodude.gif", types: ["Rock", "Ground"], attack: 80, defense: 100, hp: 40, hpmax: 40, evo: 1 },
    { id: 75, name: "Graveler", img: "https://projectpokemon.org/images/normal-sprite/graveler.gif", types: ["Rock", "Ground"], attack: 95, defense: 115, hp: 55, hpmax: 55, evo: 2 },
    { id: 76, name: "Golem", img: "https://projectpokemon.org/images/normal-sprite/golem.gif", types: ["Rock", "Ground"], attack: 110, defense: 130, hp: 80, hpmax: 80, evo: 3 },
    { id: 77, name: "Ponyta", img: "https://projectpokemon.org/images/normal-sprite/ponyta.gif", types: ["Fire"], attack: 60, defense: 40, hp: 50, hpmax: 50, evo: 1 },
    { id: 78, name: "Rapidash", img: "https://projectpokemon.org/images/normal-sprite/rapidash.gif", types: ["Fire"], attack: 80, defense: 70, hp: 65, hpmax: 65, evo: 3 },
    { id: 79, name: "Slowpoke", img: "https://projectpokemon.org/images/normal-sprite/slowpoke.gif", types: ["Water", "Psychic"], attack: 65, defense: 65, hp: 90, hpmax: 90, evo: 1 },
    { id: 80, name: "Slowbro", img: "https://projectpokemon.org/images/normal-sprite/slowbro.gif", types: ["Water", "Psychic"], attack: 100, defense: 110, hp: 95, hpmax: 95, evo: 3 },
    { id: 81, name: "Magnemite", img: "https://projectpokemon.org/images/normal-sprite/magnemite.gif", types: ["Electric", "Steel"], attack: 35, defense: 35, hp: 25, hpmax: 25, evo: 1 },
    { id: 82, name: "Magneton", img: "https://projectpokemon.org/images/normal-sprite/magneton.gif", types: ["Electric", "Steel"], attack: 60, defense: 60, hp: 50, hpmax: 50, evo: 3 },
    { id: 83, name: "Farfetch'd", img: "https://projectpokemon.org/images/normal-sprite/farfetchd.gif", types: ["Normal", "Flying"], attack: 65, defense: 55, hp: 52, hpmax: 52, evo: 3 },
    { id: 84, name: "Doduo", img: "https://projectpokemon.org/images/normal-sprite/doduo.gif", types: ["Normal", "Flying"], attack: 85, defense: 45, hp: 35, hpmax: 35, evo: 1 },
    { id: 85, name: "Dodrio", img: "https://projectpokemon.org/images/normal-sprite/dodrio.gif", types: ["Normal", "Flying"], attack: 110, defense: 70, hp: 60, hpmax: 60, evo: 3 },
    { id: 86, name: "Seel", img: "https://projectpokemon.org/images/normal-sprite/seel.gif", types: ["Water"], attack: 45, defense: 55, hp: 65, hpmax: 65, evo: 1 },
    { id: 87, name: "Dewgong", img: "https://projectpokemon.org/images/normal-sprite/dewgong.gif", types: ["Water", "Ice"], attack: 70, defense: 80, hp: 90, hpmax: 90, evo: 3 },
    { id: 88, name: "Grimer", img: "https://projectpokemon.org/images/normal-sprite/grimer.gif", types: ["Poison"], attack: 80, defense: 50, hp: 80, hpmax: 80, evo: 1 },
    { id: 89, name: "Muk", img: "https://projectpokemon.org/images/normal-sprite/muk.gif", types: ["Poison"], attack: 105, defense: 75, hp: 105, hpmax: 105, evo: 3 },
    { id: 90, name: "Shellder", img: "https://projectpokemon.org/images/normal-sprite/shellder.gif", types: ["Water"], attack: 40, defense: 35, hp: 30, hpmax: 30, evo: 1 },
    { id: 91, name: "Cloyster", img: "https://projectpokemon.org/images/normal-sprite/cloyster.gif", types: ["Water", "Ice"], attack: 95, defense: 180, hp: 50, hpmax: 50, evo: 3 },
    { id: 92, name: "Gastly", img: "https://projectpokemon.org/images/normal-sprite/gastly.gif", types: ["Ghost", "Poison"], attack: 35, defense: 30, hp: 30, hpmax: 30, evo: 1 },
    { id: 93, name: "Haunter", img: "https://projectpokemon.org/images/normal-sprite/haunter.gif", types: ["Ghost", "Poison"], attack: 50, defense: 45, hp: 45, hpmax: 45, evo: 2 },
    { id: 94, name: "Gengar", img: "https://projectpokemon.org/images/normal-sprite/gengar.gif", types: ["Ghost", "Poison"], attack: 65, defense: 60, hp: 60, hpmax: 60, evo: 3 },
    { id: 95, name: "Onix", img: "https://projectpokemon.org/images/normal-sprite/onix.gif", types: ["Rock", "Ground"], attack: 45, defense: 160, hp: 35, hpmax: 35, evo: 3 },
    { id: 96, name: "Drowzee", img: "https://projectpokemon.org/images/normal-sprite/drowzee.gif", types: ["Psychic"], attack: 48, defense: 45, hp: 60, hpmax: 60, evo: 1 },
    { id: 97, name: "Hypno", img: "https://projectpokemon.org/images/normal-sprite/hypno.gif", types: ["Psychic"], attack: 73, defense: 70, hp: 85, hpmax: 85, evo: 3 },
    { id: 98, name: "Krabby", img: "https://projectpokemon.org/images/normal-sprite/krabby.gif", types: ["Water"], attack: 105, defense: 90, hp: 30, hpmax: 30, evo: 1 },
    { id: 99, name: "Kingler", img: "https://projectpokemon.org/images/normal-sprite/kingler.gif", types: ["Water"], attack: 130, defense: 115, hp: 55, hpmax: 55, evo: 3 },
    { id: 100, name: "Voltorb", img: "https://projectpokemon.org/images/normal-sprite/voltorb.gif", types: ["Electric"], attack: 30, defense: 35, hp: 40, hpmax: 40, evo: 1 },
    { id: 101, name: "Electrode", img: "https://projectpokemon.org/images/normal-sprite/electrode.gif", types: ["Electric"], attack: 50, defense: 70, hp: 60, hpmax: 60, evo: 3 },
    { id: 102, name: "Exeggcute", img: "https://projectpokemon.org/images/normal-sprite/exeggcute.gif", types: ["Grass", "Psychic"], attack: 40, defense: 35, hp: 60, hpmax: 60, evo: 1 },
    { id: 103, name: "Exeggutor", img: "https://projectpokemon.org/images/normal-sprite/exeggutor.gif", types: ["Grass", "Psychic"], attack: 75, defense: 65, hp: 95, hpmax: 95, evo: 3 },
    { id: 104, name: "Cubone", img: "https://projectpokemon.org/images/normal-sprite/cubone.gif", types: ["Ground"], attack: 50, defense: 95, hp: 50, hpmax: 50, evo: 1 },
    { id: 105, name: "Marowak", img: "https://projectpokemon.org/images/normal-sprite/marowak.gif", types: ["Ground"], attack: 80, defense: 110, hp: 60, hpmax: 60, evo: 3 },
    { id: 106, name: "Hitmonlee", img: "https://projectpokemon.org/images/normal-sprite/hitmonlee.gif", types: ["Fighting"], attack: 120, defense: 53, hp: 50, hpmax: 50, evo: 3 },
    { id: 107, name: "Hitmonchan", img: "https://projectpokemon.org/images/normal-sprite/hitmonchan.gif", types: ["Fighting"], attack: 105, defense: 79, hp: 50, hpmax: 50, evo: 3 },
    { id: 108, name: "Lickitung", img: "https://projectpokemon.org/images/normal-sprite/lickitung.gif", types: ["Normal"], attack: 60, defense: 55, hp: 90, hpmax: 90, evo: 3 },
    { id: 109, name: "Koffing", img: "https://projectpokemon.org/images/normal-sprite/koffing.gif", types: ["Poison"], attack: 60, defense: 95, hp: 40, hpmax: 40, evo: 1 },
    { id: 110, name: "Weezing", img: "https://projectpokemon.org/images/normal-sprite/weezing.gif", types: ["Poison"], attack: 90, defense: 120, hp: 65, hpmax: 65, evo: 3 },
    { id: 111, name: "Rhyhorn", img: "https://projectpokemon.org/images/normal-sprite/rhyhorn.gif", types: ["Ground", "Rock"], attack: 80, defense: 95, hp: 80, hpmax: 80, evo: 1 },
    { id: 112, name: "Rhydon", img: "https://projectpokemon.org/images/normal-sprite/rhydon.gif", types: ["Ground", "Rock"], attack: 130, defense: 120, hp: 105, hpmax: 105, evo: 3 },
    { id: 113, name: "Chansey", img: "https://projectpokemon.org/images/normal-sprite/chansey.gif", types: ["Normal"], attack: 15, defense: 15, hp: 250, hpmax: 250, evo: 3 },
    { id: 114, name: "Tangela", img: "https://projectpokemon.org/images/normal-sprite/tangela.gif", types: ["Grass"], attack: 65, defense: 55, hp: 65, hpmax: 65, evo: 3 },
    { id: 115, name: "Kangaskhan", img: "https://projectpokemon.org/images/normal-sprite/kangaskhan.gif", types: ["Normal"], attack: 95, defense: 80, hp: 105, hpmax: 105, evo: 3 },
    { id: 116, name: "Horsea", img: "https://projectpokemon.org/images/normal-sprite/horsea.gif", types: ["Water"], attack: 40, defense: 40, hp: 30, hpmax: 30, evo: 1 },
    { id: 117, name: "Seadra", img: "https://projectpokemon.org/images/normal-sprite/seadra.gif", types: ["Water"], attack: 65, defense: 75, hp: 55, hpmax: 55, evo: 3 },
    { id: 118, name: "Goldeen", img: "https://projectpokemon.org/images/normal-sprite/goldeen.gif", types: ["Water"], attack: 60, defense: 35, hp: 45, hpmax: 45, evo: 1 },
    { id: 119, name: "Seaking", img: "https://projectpokemon.org/images/normal-sprite/seaking.gif", types: ["Water"], attack: 92, defense: 65, hp: 80, hpmax: 80, evo: 3 },
    { id: 120, name: "Staryu", img: "https://projectpokemon.org/images/normal-sprite/staryu.gif", types: ["Water"], attack: 45, defense: 55, hp: 30, hpmax: 30, evo: 1 },
    { id: 121, name: "Starmie", img: "https://projectpokemon.org/images/normal-sprite/starmie.gif", types: ["Water", "Psychic"], attack: 75, defense: 85, hp: 60, hpmax: 60, evo: 3 },
    { id: 122, name: "Mr. Mime", img: "https://projectpokemon.org/images/normal-sprite/mr.mime.gif", types: ["Psychic", "Fairy"], attack: 65, defense: 65, hp: 40, hpmax: 40, evo: 3 },
    { id: 123, name: "Scyther", img: "https://projectpokemon.org/images/normal-sprite/scyther.gif", types: ["Bug", "Flying"], attack: 110, defense: 80, hp: 70, hpmax: 70, evo: 3 },
    { id: 124, name: "Jynx", img: "https://projectpokemon.org/images/normal-sprite/jynx.gif", types: ["Ice", "Psychic"], attack: 50, defense: 35, hp: 65, hpmax: 65, evo: 3 },
    { id: 125, name: "Electabuzz", img: "https://projectpokemon.org/images/normal-sprite/electabuzz.gif", types: ["Electric"], attack: 95, defense: 57, hp: 65, hpmax: 65, evo: 3 },
    { id: 126, name: "Magmar", img: "https://projectpokemon.org/images/normal-sprite/magmar.gif", types: ["Fire"], attack: 95, defense: 57, hp: 65, hpmax: 65, evo: 3 },
    { id: 127, name: "Pinsir", img: "https://projectpokemon.org/images/normal-sprite/pinsir.gif", types: ["Bug"], attack: 125, defense: 95, hp: 65, hpmax: 65, evo: 3 },
    { id: 128, name: "Tauros", img: "https://projectpokemon.org/images/normal-sprite/tauros.gif", types: ["Normal"], attack: 100, defense: 70, hp: 75, hpmax: 75, evo: 3 },
    { id: 129, name: "Magikarp", img: "https://projectpokemon.org/images/normal-sprite/magikarp.gif", types: ["Water"], attack: 10, defense: 55, hp: 20, hpmax: 20, evo: 1 },
    { id: 130, name: "Gyarados", img: "https://projectpokemon.org/images/normal-sprite/gyarados.gif", types: ["Water", "Flying"], attack: 125, defense: 75, hp: 95, hpmax: 95, evo: 3 },
    { id: 131, name: "Lapras", img: "https://projectpokemon.org/images/normal-sprite/lapras.gif", types: ["Water", "Ice"], attack: 85, defense: 80, hp: 130, hpmax: 130, evo: 3 },
    { id: 132, name: "Ditto", img: "https://projectpokemon.org/images/normal-sprite/ditto.gif", types: ["Normal"], attack: 48, defense: 48, hp: 48, hpmax: 48, evo: 3 },
    { id: 133, name: "Eevee", img: "https://projectpokemon.org/images/normal-sprite/eevee.gif", types: ["Normal"], attack: 55, defense: 50, hp: 55, hpmax: 55, evo: 1 },
    { id: 134, name: "Vaporeon", img: "https://projectpokemon.org/images/normal-sprite/vaporeon.gif", types: ["Water"], attack: 65, defense: 60, hp: 130, hpmax: 130, evo: 3 },
    { id: 135, name: "Jolteon", img: "https://projectpokemon.org/images/normal-sprite/jolteon.gif", types: ["Electric"], attack: 110, defense: 60, hp: 65, hpmax: 65, evo: 3 },
    { id: 136, name: "Flareon", img: "https://projectpokemon.org/images/normal-sprite/flareon.gif", types: ["Fire"], attack: 130, defense: 60, hp: 65, hpmax: 65, evo: 3 },
    { id: 137, name: "Porygon", img: "https://projectpokemon.org/images/normal-sprite/porygon.gif", types: ["Normal"], attack: 60, defense: 60, hp: 65, hpmax: 65, evo: 3 },
    { id: 138, name: "Omanyte", img: "https://projectpokemon.org/images/normal-sprite/omanyte.gif", types: ["Rock", "Water"], attack: 40, defense: 100, hp: 35, hpmax: 35, evo: 1 },
    { id: 139, name: "Omastar", img: "https://projectpokemon.org/images/normal-sprite/omastar.gif", types: ["Rock", "Water"], attack: 60, defense: 125, hp: 70, hpmax: 70, evo: 3 },
    { id: 140, name: "Kabuto", img: "https://projectpokemon.org/images/normal-sprite/kabuto.gif", types: ["Rock", "Water"], attack: 40, defense: 85, hp: 30, hpmax: 30, evo: 1 },
    { id: 141, name: "Kabutops", img: "https://projectpokemon.org/images/normal-sprite/kabutops.gif", types: ["Rock", "Water"], attack: 115, defense: 105, hp: 60, hpmax: 60, evo: 3 },
    { id: 142, name: "Aerodactyl", img: "https://projectpokemon.org/images/normal-sprite/aerodactyl.gif", types: ["Rock", "Flying"], attack: 105, defense: 65, hp: 80, hpmax: 80, evo: 3 },
    { id: 143, name: "Snorlax", img: "https://projectpokemon.org/images/normal-sprite/snorlax.gif", types: ["Normal"], attack: 110, defense: 65, hp: 160, hpmax: 160, evo: 3 },
    { id: 144, name: "Articuno", img: "https://projectpokemon.org/images/normal-sprite/articuno.gif", types: ["Ice", "Flying"], attack: 70, defense: 70, hp: 90, hpmax: 90, evo: 4 },
    { id: 145, name: "Zapdos", img: "https://projectpokemon.org/images/normal-sprite/zapdos.gif", types: ["Electric", "Flying"], attack: 90, defense: 85, hp: 90, hpmax: 90, evo: 4 },
    { id: 146, name: "Moltres", img: "https://projectpokemon.org/images/normal-sprite/moltres.gif", types: ["Fire", "Flying"], attack: 90, defense: 85, hp: 90, hpmax: 90, evo: 4 },
    { id: 147, name: "Dratini", img: "https://projectpokemon.org/images/normal-sprite/dratini.gif", types: ["Dragon"], attack: 30, defense: 35, hp: 41, hpmax: 41, evo: 1 },
    { id: 148, name: "Dragonair", img: "https://projectpokemon.org/images/normal-sprite/dragonair.gif", types: ["Dragon"], attack: 65, defense: 60, hp: 61, hpmax: 61, evo: 3 },
    { id: 149, name: "Dragonite", img: "https://projectpokemon.org/images/normal-sprite/dragonite.gif", types: ["Dragon", "Flying"], attack: 134, defense: 95, hp: 91, hpmax: 91, evo: 3 },
    { id: 150, name: "Mewtwo", img: "https://projectpokemon.org/images/normal-sprite/mewtwo.gif", types: ["Psychic"], attack: 150, defense: 70, hp: 106, hpmax: 106, evo: 4 },
    { id: 151, name: "Mew", img: "https://projectpokemon.org/images/normal-sprite/mew.gif", types: ["Psychic"], attack: 100, defense: 100, hp: 100, hpmax: 100, evo: 4 },
];
function aleatorio() {
    localStorage.setItem('pokemonarray', JSON.stringify(pokemon));
    localStorage.setItem('tupokemon', JSON.stringify(pokemon[Math.floor(Math.random() * pokemon.length)]));
    window.location.href = 'fase2.html';
}
function elegirpokemon(index) {
    localStorage.setItem('pokemonarray', JSON.stringify(pokemon));
    localStorage.setItem('tupokemon', JSON.stringify(pokemon[index]));
    window.location.href = 'fase2.html';
};
const body = document.body;
const Bloque = document.getElementById("Bloque");

window.addEventListener("load", () => {
    const audio = document.getElementById("audio");
    let botonm = document.getElementById("botonm");
    audio.volume=0.5;

    botonm.onclick = () => {
        if (audio.paused) {
            audio.play();
            botonm.innerHTML = `<img src="../IMG/Volumen UP.png" alt="Unmute" class="mute"/>`;
        } else {
            audio.pause();
            botonm.innerHTML = `<img src="../IMG/Volumen OFF.png" alt="Mute" class="mute"/>`;
        }
    }
})

document.addEventListener("DOMContentLoaded", function mostrarpokemon() {
    
    pokemon.forEach((pokemon, index) => {
        const numshiny = Math.floor(Math.random() * 100) + 1;
        let shiny = false;
        if (numshiny == 1) {
            shiny = true;
        }
        const pokeball = document.createElement("div");
        pokeball.setAttribute("onclick", `elegirpokemon(${index})`);

        switch (pokemon.evo) {
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
        pokeball.setAttribute("id", pokemon.id);
        const img = document.createElement("img");
        const name = document.createElement("span");
        const estrella = document.createElement("img");
        const sparkles = document.createElement('div');
        estrella.setAttribute("src", "IMG/ShinyEstrella.png");
        estrella.classList.add("estrella");
        name.innerText = pokemon.name;
        if (shiny) {
            pokemon.img = pokemon.img.replace("normal", "shiny");
            img.setAttribute("src", pokemon.img);
            name.classList.add("shiny");
            name.appendChild(estrella);
            sparkles.classList.add('sparkles');
            pokeball.appendChild(sparkles);
        } else {
            img.setAttribute("src", pokemon.img);
        }


        const divtypes = document.createElement("div");
        divtypes.classList.add("divtypes");
        pokemon.types.forEach(type => {
            const types1 = document.createElement("span");
            types1.innerText = type;
            types1.setAttribute("class", type + "-background");
            types1.classList.add("types-pokemon");
            divtypes.appendChild(types1);

        })
        
        pokeball.appendChild(img);
        pokeball.appendChild(name);
        pokeball.appendChild(divtypes);
        Bloque.appendChild(pokeball);

        pokeball.addEventListener('mouseenter', () => {
            sparkles.style.display = 'block';
            for (let i = 0; i < 8; i++) { 
              const sparkle = document.createElement('div');
              sparkle.classList.add('sparkle');
              sparkle.style.left = Math.random() * 100 + '%';
              sparkle.style.top = Math.random() * 100 + '%';
              sparkles.appendChild(sparkle);
          
              setTimeout(() => sparkle.remove(), 1000);
            }
          });
          
          pokeball.addEventListener('mouseleave', () => {
            sparkles.style.display = 'none';
          });
    });


},
);



