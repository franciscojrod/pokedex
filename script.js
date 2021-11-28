const container = document.getElementById("container");
const count = 150; //fist gen

const color = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const main_types = Object.keys(color);

const fetch_pokemon = async() => {
  for(let i = 1; i <= count; i++) {
    await getPokemon(i);
  }
}

const getPokemon = async(id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
}

const createPokemonCard = (pokemon) => {
  const pokemonCard = document.createElement('div');
  pokemonCard.classList.add('pokemon', 'card');
  
  // base characteristics
  const pokemon_name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  const pokemon_type = pokemon.types.map(type => type.type.name )
  const id = pokemon.id.toString().padStart(3, '0')

  const type = main_types.find(type => pokemon_type.indexOf(type) > -1)
  const colors = color[type]
  pokemonCard.style.backgroundColor = colors

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${pokemon_name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    `

    pokemonCard.innerHTML = pokemonInnerHTML

    container.appendChild(pokemonCard)
  console.log(colors)
}

fetch_pokemon()
