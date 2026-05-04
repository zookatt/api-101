// Ejercicio 1
// - Cambia "ditto" por otros Pokémon.
// - Muestra también sus habilidades (*data.abilities*).
async function getPokemon(name) {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const response = await fetch(url); // Pedimos datos a la API
  const data = await response.json(); // Convertimos la respuesta a JSON

  console.log("Nombre:", data.name);
  console.log("Altura:", data.height);
  console.log("Peso:", data.weight);
  console.log("Habilidades:", data.abilities);
}

getPokemon("pikachu");
