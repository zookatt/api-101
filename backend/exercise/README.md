# 📘 README — Ejercicios Prácticos con PokeAPI (Nivel Junior)

Este documento te guía paso a paso para aprender a consumir una API real usando PokeAPI.  
Cada ejercicio introduce un concepto nuevo y lo explica con claridad, para que entiendas qué estás haciendo y por qué funciona.

## 🧩 Ejercicio 1 — Tu primera llamada a una API

### 🎯 Objetivo

Aprender qué es un endpoint, cómo pedir datos a una API y cómo leer la respuesta.

### 🔗 Endpoint

*https://pokeapi.co/api/v2/pokemon/ditto*

### 💻 Código completo

*js*

async function getPokemon(name) {  
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;  

  const response = await fetch(url);   // Pedimos datos a la API  
  const data = await response.json();  // Convertimos la respuesta a JSON  

  console.log("Nombre:", data.name);  
  console.log("Altura:", data.height);  
  console.log("Peso:", data.weight);  
}

getPokemon("ditto");

### 🧠 Explicación clara y real

#### 🔹 ¿Qué hace fetch(url)?

*fetch* es una función que pide datos a un servidor.  
Cuando la llamas:  
*js*  
fetch(url)  
estás diciendo:

    “Ve a esta dirección de internet y tráeme lo que haya allí.”

Pero *fetch* no devuelve los datos directamente.  
Devuelve una promesa (Promise), que significa:

    “Estoy trabajando en ello. Cuando tenga la respuesta, te aviso.”

Por eso usamos *await*:  
*js*  
const response = await fetch(url);  

Esto hace que JavaScript espere a que la API responda.

#### 🔹 ¿Qué es response?

*response* es la respuesta cruda del servidor.  
No son los datos todavía.

Contiene cosas como:

    response.status → código HTTP (200, 404…)

    response.ok → si la petición fue bien

    response.body → el contenido sin procesar

Piensa en *response* como la caja cerrada de un paquete.

#### 🔹 ¿Qué hace response.json()?

La API devuelve los datos en formato JSON, que es texto estructurado.

*response.json():*

    “Abre la caja y convierte el texto en un objeto JavaScript.”

Por eso hacemos:  
*js*  
const data = await response.json();  

Ahora sí, *data* es un objeto normal que puedes usar.

#### 🔹 ¿Qué es data?

*data* es el objeto final con toda la información del Pokémon.

Ejemplo:  
*js*  
data.name      // "ditto"  
data.height    // 3  
data.weight    // 40  

### ✔ Tareas

- Cambia "ditto" por otros Pokémon.
- Muestra también sus habilidades (*data.abilities*).

## 🧩 Ejercicio 2 — Obtener una lista de Pokémon

### 🎯 Objetivo

Aprender que una API puede devolver listas de elementos.

### 🔗 Endpoint

*https://pokeapi.co/api/v2/pokemon*

### 💻 Código completo

*js*

async function listPokemons() {  
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");  
  const data = await response.json();  

  console.log("Lista de Pokémon:");  
  data.results.forEach(pokemon => {  
    console.log("-", pokemon.name);  
  });  
}

listPokemons();

### 🧠 Explicación clara

*data.results* es un array (lista).

Cada elemento tiene:

    name  
    url (para obtener más información si quieres)

*forEach* recorre la lista y muestra cada nombre.

### ✔ Tareas

- Muestra también la URL de cada Pokémon.

## 🧩 Ejercicio 3 — Pedir más o menos Pokémon (limit y offset)

### 🎯 Objetivo

Aprender a pedir una cantidad concreta de Pokémon usando parámetros en la URL.

### 🧠 Explicación simple

    limit = cuántos Pokémon quieres.  
    offset = desde qué número empiezas.

Ejemplo:

    limit=10 → dame 10 Pokémon  
    offset=20 → empieza desde el Pokémon número 21  

### 💡 Fragmento de código útil

*js*

const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

Luego haces lo mismo que antes:  
*js*  
const response = await fetch(url);  
const data = await response.json();  

### ✔ Tareas

- Pide 5 Pokémon.
- Pide 10 Pokémon empezando desde el número 20.
- Muestra los nombres de todos los Pokémon que recibas.

## 🧩 Ejercicio 4 — Consultar habilidades (llamadas encadenadas)

### 🎯 Objetivo

Aprender que dentro de la respuesta vienen otras URLs que también puedes consultar.

### 🧠 Qué devuelve la API

Cuando pides un Pokémon, sus habilidades vienen así:  
*json*

"abilities": [  
  {  
    "ability": {  
      "name": "limber",  
      "url": "https://pokeapi.co/api/v2/ability/7/"  
    }  
  }  
]

Cada habilidad tiene su propia URL.

### 💡 Fragmentos útiles

Obtener las habilidades:  
*js*  
const abilities = data.abilities;  

Recorrerlas:  
*js*  
for (const item of abilities) {  
  console.log(item.ability.name);  
}

Consultar la URL de una habilidad:  
*js*  
const abilityUrl = item.ability.url;  

Hacer una petición a esa URL:  
*js*  
const response = await fetch(abilityUrl);  
const abilityData = await response.json();  

### ✔ Tareas

- Muestra todas las habilidades de un Pokémon.
- Muestra la descripción de al menos una habilidad.
- Muestra también sus tipos (*data.types*).

## 🧩 Ejercicio 5 — Manejo de errores

### 🎯 Objetivo

Aprender qué pasa si buscas un Pokémon que no existe.

### 💡 Fragmentos útiles

Comprobar si la respuesta es correcta:  
*js*

if (!response.ok) {  
  console.log("Error:", response.status);  
  return;  
}

Mostrar un mensaje personalizado:  
*js*  
console.log("Ese Pokémon no existe.");  

### ✔ Tareas

- Prueba con nombres inventados.
- Si el error es 404, muestra un mensaje especial.

## 🧩 Ejercicio 6 — Mini proyecto final

### 🎯 Objetivo

Crear una “ficha” completa de un Pokémon usando todo lo aprendido.  
Debe mostrar:

- Nombre
- Imagen
- Tipos
- Habilidades
- Descripción de cada habilidad

### 💡 Fragmentos útiles

Obtener la imagen:  
*js*  
pokemon.sprites.front_default  

Obtener tipos:  
*js*  
pokemon.types.forEach(t => console.log(t.type.name));  

Obtener habilidades:  
*js*  
pokemon.abilities  

Consultar cada habilidad:  
*js*  
await fetch(item.ability.url)

---

## 📚 Recursos

- [PokeAPI Documentation](https://pokeapi.co/docs/v2)
- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JavaScript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

¡Sigue aprendiendo y diviértete con el mundo de las APIs! 😊