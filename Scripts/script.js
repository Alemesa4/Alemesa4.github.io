const pokemon = [
    { id: 1, name: "Bulbasaur", img: "https://projectpokemon.org/images/normal-sprite/bulbasaur.gif", types: ["Grass", "Poison"], evo: 1 },
    { id: 2, name: "Ivysaur", img: "https://projectpokemon.org/images/normal-sprite/ivysaur.gif", types: ["Grass", "Poison"], evo: 2 },
    { id: 3, name: "Venusaur", img: "https://projectpokemon.org/images/normal-sprite/venusaur.gif", types: ["Grass", "Poison"], evo: 3 },
    { id: 4, name: "Charmander", img: "https://projectpokemon.org/images/normal-sprite/charmander.gif", types: ["Fire"], evo: 1 },
    { id: 5, name: "Charmeleon", img: "https://projectpokemon.org/images/normal-sprite/charmeleon.gif", types: ["Fire"], evo: 2 },
    { id: 6, name: "Charizard", img: "https://projectpokemon.org/images/normal-sprite/charizard.gif", types: ["Fire", "Flying"], evo: 3 },
    { id: 7, name: "Squirtle", img: "https://projectpokemon.org/images/normal-sprite/squirtle.gif", types: ["Water"], evo: 1 },
    { id: 8, name: "Wartortle", img: "https://projectpokemon.org/images/normal-sprite/wartortle.gif", types: ["Water"], evo: 2 },
    { id: 9, name: "Blastoise", img: "https://projectpokemon.org/images/normal-sprite/blastoise.gif", types: ["Water"], evo: 3 },
    { id: 10, name: "Caterpie", img: "https://projectpokemon.org/images/normal-sprite/caterpie.gif", types: ["Bug"], evo: 1 },
    { id: 11, name: "Metapod", img: "https://projectpokemon.org/images/normal-sprite/metapod.gif", types: ["Bug"], evo: 2 },
    { id: 12, name: "Butterfree", img: "https://projectpokemon.org/images/normal-sprite/butterfree.gif", types: ["Bug", "Flying"], evo: 3 },
    { id: 13, name: "Weedle", img: "https://projectpokemon.org/images/normal-sprite/weedle.gif", types: ["Bug", "Poison"], evo: 1 },
    { id: 14, name: "Kakuna", img: "https://projectpokemon.org/images/normal-sprite/kakuna.gif", types: ["Bug", "Poison"], evo: 2 },
    { id: 15, name: "Beedrill", img: "https://projectpokemon.org/images/normal-sprite/beedrill.gif", types: ["Bug", "Poison"], evo: 3 },
    { id: 16, name: "Pidgey", img: "https://projectpokemon.org/images/normal-sprite/pidgey.gif", types: ["Normal", "Flying"], evo: 1 },
    { id: 17, name: "Pidgeotto", img: "https://projectpokemon.org/images/normal-sprite/pidgeotto.gif", types: ["Normal", "Flying"], evo: 2 },
    { id: 18, name: "Pidgeot", img: "https://projectpokemon.org/images/normal-sprite/pidgeot.gif", types: ["Normal", "Flying"], evo: 3 },
    { id: 19, name: "Rattata", img: "https://projectpokemon.org/images/normal-sprite/rattata.gif", types: ["Normal"], evo: 1 },
    { id: 20, name: "Raticate", img: "https://projectpokemon.org/images/normal-sprite/raticate.gif", types: ["Normal"], evo: 2 },
    { id: 21, name: "Spearow", img: "https://projectpokemon.org/images/normal-sprite/spearow.gif", types: ["Normal", "Flying"], evo: 1 },
    { id: 22, name: "Fearow", img: "https://projectpokemon.org/images/normal-sprite/fearow.gif", types: ["Normal", "Flying"], evo: 2 },
    { id: 23, name: "Ekans", img: "https://projectpokemon.org/images/normal-sprite/ekans.gif", types: ["Poison"], evo: 1 },
    { id: 24, name: "Arbok", img: "https://projectpokemon.org/images/normal-sprite/arbok.gif", types: ["Poison"], evo: 2 },
    { id: 25, name: "Pikachu", img: "https://projectpokemon.org/images/normal-sprite/pikachu.gif", types: ["Electric"], evo: 1 },
    { id: 26, name: "Raichu", img: "https://projectpokemon.org/images/normal-sprite/raichu.gif", types: ["Electric"], evo: 2 },
    { id: 27, name: "Sandshrew", img: "https://projectpokemon.org/images/normal-sprite/sandshrew.gif", types: ["Ground"], evo: 1 },
    { id: 28, name: "Sandslash", img: "https://projectpokemon.org/images/normal-sprite/sandslash.gif", types: ["Ground"], evo: 2 },
    { id: 29, name: "Nidoran♀", img: "https://projectpokemon.org/images/normal-sprite/nidoran_f.gif", types: ["Poison"], evo: 1 },
    { id: 30, name: "Nidorina", img: "https://projectpokemon.org/images/normal-sprite/nidorina.gif", types: ["Poison"], evo: 2 },
    { id: 31, name: "Nidoqueen", img: "https://projectpokemon.org/images/normal-sprite/nidoqueen.gif", types: ["Poison", "Ground"], evo: 3 },
    { id: 32, name: "Nidoran♂", img: "https://projectpokemon.org/images/normal-sprite/nidoran_m.gif", types: ["Poison"], evo: 1 },
    { id: 33, name: "Nidorino", img: "https://projectpokemon.org/images/normal-sprite/nidorino.gif", types: ["Poison"], evo: 2 },
    { id: 34, name: "Nidoking", img: "https://projectpokemon.org/images/normal-sprite/nidoking.gif", types: ["Poison", "Ground"], evo: 3 },
    { id: 35, name: "Clefairy", img: "https://projectpokemon.org/images/normal-sprite/clefairy.gif", types: ["Fairy"], evo: 1 },
    { id: 36, name: "Clefable", img: "https://projectpokemon.org/images/normal-sprite/clefable.gif", types: ["Fairy"], evo: 2 },
    { id: 37, name: "Vulpix", img: "https://projectpokemon.org/images/normal-sprite/vulpix.gif", types: ["Fire"], evo: 1 },
    { id: 38, name: "Ninetales", img: "https://projectpokemon.org/images/normal-sprite/ninetales.gif", types: ["Fire"], evo: 2 },
    { id: 39, name: "Jigglypuff", img: "https://projectpokemon.org/images/normal-sprite/jigglypuff.gif", types: ["Normal", "Fairy"], evo: 1 },
    { id: 40, name: "Wigglytuff", img: "https://projectpokemon.org/images/normal-sprite/wigglytuff.gif", types: ["Normal", "Fairy"], evo: 2 },
    { id: 41, name: "Zubat", img: "https://projectpokemon.org/images/normal-sprite/zubat.gif", types: ["Poison", "Flying"], evo: 1 },
    { id: 42, name: "Golbat", img: "https://projectpokemon.org/images/normal-sprite/golbat.gif", types: ["Poison", "Flying"], evo: 2 },
    { id: 43, name: "Oddish", img: "https://projectpokemon.org/images/normal-sprite/oddish.gif", types: ["Grass", "Poison"], evo: 1 },
    { id: 44, name: "Gloom", img: "https://projectpokemon.org/images/normal-sprite/gloom.gif", types: ["Grass", "Poison"], evo: 2 },
    { id: 45, name: "Vileplume", img: "https://projectpokemon.org/images/normal-sprite/vileplume.gif", types: ["Grass", "Poison"], evo: 3 },
    { id: 46, name: "Paras", img: "https://projectpokemon.org/images/normal-sprite/paras.gif", types: ["Bug", "Grass"], evo: 1 },
    { id: 47, name: "Parasect", img: "https://projectpokemon.org/images/normal-sprite/parasect.gif", types: ["Bug", "Grass"], evo: 2 },
    { id: 48, name: "Venonat", img: "https://projectpokemon.org/images/normal-sprite/venonat.gif", types: ["Bug", "Poison"], evo: 1 },
    { id: 49, name: "Venomoth", img: "https://projectpokemon.org/images/normal-sprite/venomoth.gif", types: ["Bug", "Poison"], evo: 2 },
    { id: 50, name: "Diglett", img: "https://projectpokemon.org/images/normal-sprite/diglett.gif", types: ["Ground"], evo: 1 },
    { id: 51, name: "Dugtrio", img: "https://projectpokemon.org/images/normal-sprite/dugtrio.gif", types: ["Ground"], evo: 2 },
    { id: 52, name: "Meowth", img: "https://projectpokemon.org/images/normal-sprite/meowth.gif", types: ["Normal"], evo: 1 },
    { id: 53, name: "Persian", img: "https://projectpokemon.org/images/normal-sprite/persian.gif", types: ["Normal"], evo: 2 },
    { id: 54, name: "Psyduck", img: "https://projectpokemon.org/images/normal-sprite/psyduck.gif", types: ["Water"], evo: 1 },
    { id: 55, name: "Golduck", img: "https://projectpokemon.org/images/normal-sprite/golduck.gif", types: ["Water"], evo: 2 },
    { id: 56, name: "Mankey", img: "https://projectpokemon.org/images/normal-sprite/mankey.gif", types: ["Fighting"], evo: 1 },
    { id: 57, name: "Primeape", img: "https://projectpokemon.org/images/normal-sprite/primeape.gif", types: ["Fighting"], evo: 2 },
    { id: 58, name: "Growlithe", img: "https://projectpokemon.org/images/normal-sprite/growlithe.gif", types: ["Fire"], evo: 1 },
    { id: 59, name: "Arcanine", img: "https://projectpokemon.org/images/normal-sprite/arcanine.gif", types: ["Fire"], evo: 2 },
    { id: 60, name: "Poliwag", img: "https://projectpokemon.org/images/normal-sprite/poliwag.gif", types: ["Water"], evo: 1 },
    { id: 61, name: "Poliwhirl", img: "https://projectpokemon.org/images/normal-sprite/poliwhirl.gif", types: ["Water"], evo: 2 },
    { id: 62, name: "Poliwrath", img: "https://projectpokemon.org/images/normal-sprite/poliwrath.gif", types: ["Water", "Fighting"], evo: 3 },
    { id: 63, name: "Abra", img: "https://projectpokemon.org/images/normal-sprite/abra.gif", types: ["Psychic"], evo: 1 },
    { id: 64, name: "Kadabra", img: "https://projectpokemon.org/images/normal-sprite/kadabra.gif", types: ["Psychic"], evo: 2 },
    { id: 65, name: "Alakazam", img: "https://projectpokemon.org/images/normal-sprite/alakazam.gif", types: ["Psychic"], evo: 3 },
    { id: 66, name: "Machop", img: "https://projectpokemon.org/images/normal-sprite/machop.gif", types: ["Fighting"], evo: 1 },
    { id: 67, name: "Machoke", img: "https://projectpokemon.org/images/normal-sprite/machoke.gif", types: ["Fighting"], evo: 2 },
    { id: 68, name: "Machamp", img: "https://projectpokemon.org/images/normal-sprite/machamp.gif", types: ["Fighting"], evo: 3 },
    { id: 69, name: "Bellsprout", img: "https://projectpokemon.org/images/normal-sprite/bellsprout.gif", types: ["Grass", "Poison"], evo: 1 },
    { id: 70, name: "Weepinbell", img: "https://projectpokemon.org/images/normal-sprite/weepinbell.gif", types: ["Grass", "Poison"], evo: 2 },
    { id: 71, name: "Victreebel", img: "https://projectpokemon.org/images/normal-sprite/victreebel.gif", types: ["Grass", "Poison"], evo: 3 },
    { id: 72, name: "Tentacool", img: "https://projectpokemon.org/images/normal-sprite/tentacool.gif", types: ["Water", "Poison"], evo: 1 },
    { id: 73, name: "Tentacruel", img: "https://projectpokemon.org/images/normal-sprite/tentacruel.gif", types: ["Water", "Poison"], evo: 2 },
    { id: 74, name: "Geodude", img: "https://projectpokemon.org/images/normal-sprite/geodude.gif", types: ["Rock", "Ground"], evo: 1 },
    { id: 75, name: "Graveler", img: "https://projectpokemon.org/images/normal-sprite/graveler.gif", types: ["Rock", "Ground"], evo: 2 },
    { id: 76, name: "Golem", img: "https://projectpokemon.org/images/normal-sprite/golem.gif", types: ["Rock", "Ground"], evo: 3 },
    { id: 77, name: "Ponyta", img: "https://projectpokemon.org/images/normal-sprite/ponyta.gif", types: ["Fire"], evo: 1 },
    { id: 78, name: "Rapidash", img: "https://projectpokemon.org/images/normal-sprite/rapidash.gif", types: ["Fire"], evo: 2 },
    { id: 79, name: "Slowpoke", img: "https://projectpokemon.org/images/normal-sprite/slowpoke.gif", types: ["Water", "Psychic"], evo: 1 },
    { id: 80, name: "Slowbro", img: "https://projectpokemon.org/images/normal-sprite/slowbro.gif", types: ["Water", "Psychic"], evo: 2 },
    { id: 81, name: "Magnemite", img: "https://projectpokemon.org/images/normal-sprite/magnemite.gif", types: ["Electric", "Steel"], evo: 1 },
    { id: 82, name: "Magneton", img: "https://projectpokemon.org/images/normal-sprite/magneton.gif", types: ["Electric", "Steel"], evo: 2 },
    { id: 83, name: "Farfetch'd", img: "https://projectpokemon.org/images/normal-sprite/farfetchd.gif", types: ["Normal", "Flying"], evo: 1 },
    { id: 84, name: "Doduo", img: "https://projectpokemon.org/images/normal-sprite/doduo.gif", types: ["Normal", "Flying"], evo: 1 },
    { id: 85, name: "Dodrio", img: "https://projectpokemon.org/images/normal-sprite/dodrio.gif", types: ["Normal", "Flying"], evo: 2 },
    { id: 86, name: "Seel", img: "https://projectpokemon.org/images/normal-sprite/seel.gif", types: ["Water"], evo: 1 },
    { id: 87, name: "Dewgong", img: "https://projectpokemon.org/images/normal-sprite/dewgong.gif", types: ["Water", "Ice"], evo: 2 },
    { id: 88, name: "Grimer", img: "https://projectpokemon.org/images/normal-sprite/grimer.gif", types: ["Poison"], evo: 1 },
    { id: 89, name: "Muk", img: "https://projectpokemon.org/images/normal-sprite/muk.gif", types: ["Poison"], evo: 2 },
    { id: 90, name: "Shellder", img: "https://projectpokemon.org/images/normal-sprite/shellder.gif", types: ["Water"], evo: 1 },
    { id: 91, name: "Cloyster", img: "https://projectpokemon.org/images/normal-sprite/cloyster.gif", types: ["Water", "Ice"], evo: 2 },
    { id: 92, name: "Gastly", img: "https://projectpokemon.org/images/normal-sprite/gastly.gif", types: ["Ghost", "Poison"], evo: 1 },
    { id: 93, name: "Haunter", img: "https://projectpokemon.org/images/normal-sprite/haunter.gif", types: ["Ghost", "Poison"], evo: 2 },
    { id: 94, name: "Gengar", img: "https://projectpokemon.org/images/normal-sprite/gengar.gif", types: ["Ghost", "Poison"], evo: 3 },
    { id: 95, name: "Onix", img: "https://projectpokemon.org/images/normal-sprite/onix.gif", types: ["Rock", "Ground"], evo: 1 },
    { id: 96, name: "Drowzee", img: "https://projectpokemon.org/images/normal-sprite/drowzee.gif", types: ["Psychic"], evo: 1 },
    { id: 97, name: "Hypno", img: "https://projectpokemon.org/images/normal-sprite/hypno.gif", types: ["Psychic"], evo: 2 },
    { id: 98, name: "Krabby", img: "https://projectpokemon.org/images/normal-sprite/krabby.gif", types: ["Water"], evo: 1 },
    { id: 99, name: "Kingler", img: "https://projectpokemon.org/images/normal-sprite/kingler.gif", types: ["Water"], evo: 2 },
    { id: 100, name: "Voltorb", img: "https://projectpokemon.org/images/normal-sprite/voltorb.gif", types: ["Electric"], evo: 1 },
    { id: 101, name: "Electrode", img: "https://projectpokemon.org/images/normal-sprite/electrode.gif", types: ["Electric"], evo: 2 },
    { id: 102, name: "Exeggcute", img: "https://projectpokemon.org/images/normal-sprite/exeggcute.gif", types: ["Grass", "Psychic"], evo: 1 },
    { id: 103, name: "Exeggutor", img: "https://projectpokemon.org/images/normal-sprite/exeggutor.gif", types: ["Grass", "Psychic"], evo: 2 },
    { id: 104, name: "Cubone", img: "https://projectpokemon.org/images/normal-sprite/cubone.gif", types: ["Ground"], evo: 1 },
    { id: 105, name: "Marowak", img: "https://projectpokemon.org/images/normal-sprite/marowak.gif", types: ["Ground"], evo: 2 },
    { id: 106, name: "Hitmonlee", img: "https://projectpokemon.org/images/normal-sprite/hitmonlee.gif", types: ["Fighting"], evo: 1 },
    { id: 107, name: "Hitmonchan", img: "https://projectpokemon.org/images/normal-sprite/hitmonchan.gif", types: ["Fighting"], evo: 1 },
    { id: 108, name: "Lickitung", img: "https://projectpokemon.org/images/normal-sprite/lickitung.gif", types: ["Normal"], evo: 1 },
    { id: 109, name: "Koffing", img: "https://projectpokemon.org/images/normal-sprite/koffing.gif", types: ["Poison"], evo: 1 },
    { id: 110, name: "Weezing", img: "https://projectpokemon.org/images/normal-sprite/weezing.gif", types: ["Poison"], evo: 2 },
    { id: 111, name: "Rhyhorn", img: "https://projectpokemon.org/images/normal-sprite/rhyhorn.gif", types: ["Ground", "Rock"], evo: 1 },
    { id: 112, name: "Rhydon", img: "https://projectpokemon.org/images/normal-sprite/rhydon.gif", types: ["Ground", "Rock"], evo: 2 },
    { id: 113, name: "Chansey", img: "https://projectpokemon.org/images/normal-sprite/chansey.gif", types: ["Normal"], evo: 1 },
    { id: 114, name: "Tangela", img: "https://projectpokemon.org/images/normal-sprite/tangela.gif", types: ["Grass"], evo: 1 },
    { id: 115, name: "Kangaskhan", img: "https://projectpokemon.org/images/normal-sprite/kangaskhan.gif", types: ["Normal"], evo: 1 },
    { id: 116, name: "Horsea", img: "https://projectpokemon.org/images/normal-sprite/horsea.gif", types: ["Water"], evo: 1 },
    { id: 117, name: "Seadra", img: "https://projectpokemon.org/images/normal-sprite/seadra.gif", types: ["Water"], evo: 2 },
    { id: 118, name: "Goldeen", img: "https://projectpokemon.org/images/normal-sprite/goldeen.gif", types: ["Water"], evo: 1 },
    { id: 119, name: "Seaking", img: "https://projectpokemon.org/images/normal-sprite/seaking.gif", types: ["Water"], evo: 2 },
    { id: 120, name: "Staryu", img: "https://projectpokemon.org/images/normal-sprite/staryu.gif", types: ["Water"], evo: 1 },
    { id: 121, name: "Starmie", img: "https://projectpokemon.org/images/normal-sprite/starmie.gif", types: ["Water", "Psychic"], evo: 2 },
    { id: 122, name: "Mr. Mime", img: "https://projectpokemon.org/images/normal-sprite/mr.mime.gif", types: ["Psychic", "Fairy"], evo: 1 },
    { id: 123, name: "Scyther", img: "https://projectpokemon.org/images/normal-sprite/scyther.gif", types: ["Bug", "Flying"], evo: 1 },
    { id: 124, name: "Jynx", img: "https://projectpokemon.org/images/normal-sprite/jynx.gif", types: ["Ice", "Psychic"], evo: 1 },
    { id: 125, name: "Electabuzz", img: "https://projectpokemon.org/images/normal-sprite/electabuzz.gif", types: ["Electric"], evo: 1 },
    { id: 126, name: "Magmar", img: "https://projectpokemon.org/images/normal-sprite/magmar.gif", types: ["Fire"], evo: 1 },
    { id: 127, name: "Pinsir", img: "https://projectpokemon.org/images/normal-sprite/pinsir.gif", types: ["Bug"], evo: 1 },
    { id: 128, name: "Tauros", img: "https://projectpokemon.org/images/normal-sprite/tauros.gif", types: ["Normal"], evo: 1 },
    { id: 129, name: "Magikarp", img: "https://projectpokemon.org/images/normal-sprite/magikarp.gif", types: ["Water"], evo: 1 },
    { id: 130, name: "Gyarados", img: "https://projectpokemon.org/images/normal-sprite/gyarados.gif", types: ["Water", "Flying"], evo: 2 },
    { id: 131, name: "Lapras", img: "https://projectpokemon.org/images/normal-sprite/lapras.gif", types: ["Water", "Ice"], evo: 1 },
    { id: 132, name: "Ditto", img: "https://projectpokemon.org/images/normal-sprite/ditto.gif", types: ["Normal"], evo: 1 },
    { id: 133, name: "Eevee", img: "https://projectpokemon.org/images/normal-sprite/eevee.gif", types: ["Normal"], evo: 1 },
    { id: 134, name: "Vaporeon", img: "https://projectpokemon.org/images/normal-sprite/vaporeon.gif", types: ["Water"], evo: 2 },
    { id: 135, name: "Jolteon", img: "https://projectpokemon.org/images/normal-sprite/jolteon.gif", types: ["Electric"], evo: 2 },
    { id: 136, name: "Flareon", img: "https://projectpokemon.org/images/normal-sprite/flareon.gif", types: ["Fire"], evo: 2 },
    { id: 137, name: "Porygon", img: "https://projectpokemon.org/images/normal-sprite/porygon.gif", types: ["Normal"], evo: 1 },
    { id: 138, name: "Omanyte", img: "https://projectpokemon.org/images/normal-sprite/omanyte.gif", types: ["Rock", "Water"], evo: 1 },
    { id: 139, name: "Omastar", img: "https://projectpokemon.org/images/normal-sprite/omastar.gif", types: ["Rock", "Water"], evo: 2 },
    { id: 140, name: "Kabuto", img: "https://projectpokemon.org/images/normal-sprite/kabuto.gif", types: ["Rock", "Water"], evo: 1 },
    { id: 141, name: "Kabutops", img: "https://projectpokemon.org/images/normal-sprite/kabutops.gif", types: ["Rock", "Water"], evo: 2 },
    { id: 142, name: "Aerodactyl", img: "https://projectpokemon.org/images/normal-sprite/aerodactyl.gif", types: ["Rock", "Flying"], evo: 1 },
    { id: 143, name: "Snorlax", img: "https://projectpokemon.org/images/normal-sprite/snorlax.gif", types: ["Normal"], evo: 1 },
    { id: 144, name: "Articuno", img: "https://projectpokemon.org/images/normal-sprite/articuno.gif", types: ["Ice", "Flying"], evo: 4 },
    { id: 145, name: "Zapdos", img: "https://projectpokemon.org/images/normal-sprite/zapdos.gif", types: ["Electric", "Flying"], evo: 4 },
    { id: 146, name: "Moltres", img: "https://projectpokemon.org/images/normal-sprite/moltres.gif", types: ["Fire", "Flying"], evo: 4 },
    { id: 147, name: "Dratini", img: "https://projectpokemon.org/images/normal-sprite/dratini.gif", types: ["Dragon"], evo: 1 },
    { id: 148, name: "Dragonair", img: "https://projectpokemon.org/images/normal-sprite/dragonair.gif", types: ["Dragon"], evo: 2 },
    { id: 149, name: "Dragonite", img: "https://projectpokemon.org/images/normal-sprite/dragonite.gif", types: ["Dragon", "Flying"], evo: 3 },
    { id: 150, name: "Mewtwo", img: "https://projectpokemon.org/images/normal-sprite/mewtwo.gif", types: ["Psychic"], evo: 4 },
    { id: 151, name: "Mew", img: "https://projectpokemon.org/images/normal-sprite/mew.gif", types: ["Psychic"], evo: 4 },
    { id: 152, name: "Giratina", img: "https://projectpokemon.org/images/normal-sprite/giratina.gif", types: ["Dragon", "Ghost"], evo: 4 },
    { id: 153, name: "Ducklett", img: "https://projectpokemon.org/images/normal-sprite/ducklett.gif", types: ["Flying", "Water"], evo: 1 },
];

function elegirpokemon(index) {
    console.log(pokemon[index]);
    localStorage.setItem('pokemonarray', JSON.stringify(pokemon));
    localStorage.setItem('tupokemon', JSON.stringify(pokemon[index]));
    window.location.href = 'fase2.html';
};
const body = document.body;
const Bloque = document.getElementById("Bloque");

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

document.addEventListener("DOMContentLoaded", function mostrarpokemon() {
    
    pokemon.forEach((pokemon, index) => {
        const numshiny = Math.floor(Math.random() * 2) + 1;
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



