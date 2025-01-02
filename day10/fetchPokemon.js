//fetching API using promises
// fetch("https://pokeapi.co/api/v2/pokemon/raichu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("could not fetch resource");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// fetching API using async and await
async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      throw new Error("could not fetch resource");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const img = document.getElementById("pokemonSprite");

    img.src = pokemonSprite;
    img.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
