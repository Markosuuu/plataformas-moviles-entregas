const pokemonContainer = document.querySelector(".pokemon-container");
const spinner = document.querySelector("#spinner");
const pagination = document.querySelector(".pagination")
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

let limit = 8;
let offset = 1;

previous.addEventListener("click", () => {
  if (offset != 1) {
    offset -= 9;
    removeChildNodes(pokemonContainer);
    fetchPokemons(offset, limit);
  }
});

next.addEventListener("click", () => {
  offset += 9;
  removeChildNodes(pokemonContainer);
  fetchPokemons(offset, limit);
});

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
      spinner.style.display = "none";
      pagination.style.display = "block";
    });
}

function fetchPokemons(offset, limit) {
  pagination.style.display = "none";
  spinner.style.display = "block";
  for (let i = offset; i <= offset + limit; i++) {
    fetchPokemon(i);
  }
}

function createPokemon(pokemon) {

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div");

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement("p");
  number.textContent = `#${pokemon.id}`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);
  
  // Botón de datos
  const btn = document.createElement("button");
  
  btn.classList.add("btn");
  btn.classList.add("btn-primary");
  
  btn.setAttribute("data-bs-toggle","modal")
  btn.setAttribute("data-bs-target","#exampleModal")
  btn.innerText = `Datos`;

  // Información ventana modal
  const modalTitle = document.querySelector(".modal-title");
  modalTitle.textContent = pokemon.name;
  console.log(pokemon.name)

  card.appendChild(btn);
  cardContainer.appendChild(card);
  pokemonContainer.appendChild(cardContainer);
}

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

fetchPokemons(offset, limit);
