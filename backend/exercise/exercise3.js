// Ejercicio 3 — Pedir x cantidad de Pokémon (limit y offset)
// ### ✔ Tareas
// - Pide 5 Pokémon.
// - Pide 10 Pokémon empezando desde el número 20.
// - Muestra los nombres de todos los Pokémon que recibas.
const limit_to_5 = 5;
const url5 = `https://pokeapi.co/api/v2/pokemon?limit=${limit_to_5}`;
async function list5Pokemons() {
  const response = await fetch(url5);
  const data = await response.json();

  console.log("Lista de Pokémon:", data.results);
  data.results.forEach((pokemon) => {
    console.log("Nombre", pokemon.name);
  });
}

list5Pokemons();

const limit_from_20 = 10;
const offset = 19;
const url20 = `https://pokeapi.co/api/v2/pokemon?limit=${limit_from_20}&offset=${offset}`;
async function list10Pokemons() {
  const response = await fetch(url20);
  const data = await response.json();

  console.log("Lista de Pokémon:", data.results);
  data.results.forEach((pokemon) => {
    console.log("Nombre", pokemon.name);
  });
}

list10Pokemons();
