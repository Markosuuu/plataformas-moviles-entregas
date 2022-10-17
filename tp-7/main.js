const pokemonContainer = document.querySelector(".pokemon-container");
const spinner = document.querySelector("#spinner");
const pagination = document.querySelector(".pagination");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

let limit = 150;
let offset = 1;

previous.addEventListener("click", () => {
  if (offset != 1) {
    offset -= 151;
    removeChildNodes(pokemonContainer);
    fetchPokemons(offset, limit);
  }
});

next.addEventListener("click", () => {
  offset += 151;
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

  // Sprite en la carta
  const spriteContainer = document.createElement("div");

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  // id en la carta
  const number = document.createElement("p");
  number.textContent = `#${pokemon.id}`;

  // Nombre en la carta
  const name = document.createElement("p");
  name.classList.add("text-capitalize");
  name.classList.add("fw-bold");
  name.classList.add("fs-5");
  name.textContent = pokemon.name;

  // Agregando elementos a la carta
  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);

  // Botón de datos para la ventana modal
  const btn = document.createElement("button");

  btn.classList.add("btn");
  btn.classList.add("btn-primary");

  btn.setAttribute("data-bs-toggle", "modal");
  btn.setAttribute("data-bs-target", "#exampleModal");
  btn.innerText = `Datos`;

  // Información ventana modal
  const modalBody = document.querySelector(".modal-body");

  // Sprites
  const modalSprite = sprite.cloneNode();
  const spriteBack = document.createElement("img");
  spriteBack.src = pokemon.sprites.back_default;

  btn.addEventListener("click", () => {
    const modalTitle = document.querySelector(".modal-title");
    modalTitle.classList.add("fw-bold");
    modalTitle.textContent = `${pokemon.name} #${pokemon.id}`;

    modalBody.textContent = "";

    // Sprites frontales y posteriores
    modalBody.append(modalSprite);
    modalBody.append(spriteBack);

    // Información de los tipos
    for (let i = 0; i < pokemon.types.length; i++) {
      const tipos = document.createElement("p");
      tipos.textContent = `Tipo: ${pokemon.types[i].type.name}`;
      modalBody.append(tipos);
    }

    // Información de las stats
    for (let i = 0; i < pokemon.stats.length; i++) {
      const statName = document.createElement("p");
      statName.textContent = `${pokemon.stats[i].stat.name}: ${pokemon.stats[i].base_stat}`;
      modalBody.append(statName);
    }
  });

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
