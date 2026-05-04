// Ejercicio 2 — Obtener una lista de Pokémon
// ### ✔ Tareas
// - Muestra solo los nombres
// - Identifica qué propiedades tiene cada elemento dentro de `results`
// - Investiga qué información extra se obtiene usando la URL de cada Pokémon (sin implementarlo aún)
// - Imprime la informacion por *console.log*.
// - Muestra también la URL de cada Pokémon.

async function listPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();

  console.log("Lista de Pokémon:");
  data.results.forEach((pokemon) => {
    console.log("-", pokemon.name);
    console.log("Propiedades:", data.results);
    console.log("URL:", pokemon.url);
  });
}

listPokemons();
