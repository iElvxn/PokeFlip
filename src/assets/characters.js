let characters = [];

async function getRandomPokemon() {
    try {
        let randomId = Math.floor(Math.random() * ((1017 - 1) + 1));
        let url = 'https://pokeapi.co/api/v2/pokemon/' + randomId;
        fetch(url, {mode: 'cors'})

        .then(function(response) {
            return response.json();
        })
        .then(function(response) {

            const pokemonObj = {
                id: response.id,
                name: response.name,
                src: response.sprites.front_default,
                flipped: false,
            }
            characters.push(pokemonObj);
        })

    } catch(error) {
        console.log("Not a valid pokemon ID")
    }
}

async function getPokemons(num) {
    for(let i = 0; i < num; i++) {
        getRandomPokemon();
    }
    console.log(characters);
}
//getPokemons();

const characterHandler = {
    characters,
    getPokemons
}

export default characterHandler;
