//main.js
//Get Pokémon data from the PokéAPI using async/await
async function getPokemonData(pokemonId) {
    try {
        //First API call: basic pokemon data
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        if (!response.ok) {
            console.error('Network response was not ok');
            return null;
        }
        const pokemon = await response.json();

        //Extract relevant data
        const name = pokemon.name;
        const height = pokemon.height;
        const weight = pokemon.weight;
        const types = pokemon.types.map(typeInfo => typeInfo.type.name);

        //Second API call: species data
        const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
        if (!response2.ok) {
            console.error('Network response was not ok');
            return null;
        }
        const species = await response2.json();

        //Extract relevant species data
        const habitat = species.habitat ? species.habitat.name : 'unknown';
        const isLegendary = species.is_legendary;

        //Return compiled object
        return {
            id: pokemon.id,
            name,
            height,
            weight,
            types,
            habitat,
            isLegendary,
        };
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        return null;
    }
}

// assignmentTask: generates random pokemon and logs results
async function assignmentTask() {
    const randomId = Math.floor(Math.random() * 151) + 1; // Pokémon IDs range from 1 to 151
    const pokemonData = await getPokemonData(randomId);
    console.log('Result:', JSON.stringify(pokemonData, null, 2));
}

// Run the assignment task
assignmentTask();