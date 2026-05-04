# 📘 Ejercicios PokeAPI

Este repositorio tiene como objetivo enseñarte a trabajar con APIs reales usando JavaScript.Vas a aprender a:

- Hacer peticiones HTTP
- Leer respuestas JSON
- Entender estructuras de datos reales
- Usar datos de una API externa
- Manejar errores básicos
- Construir lógica paso a paso

## 🧩 Ejercicio 1 — Tu primera llamada a una API

### 🎯 Objetivo

Aprender qué es un endpoint, cómo pedir datos a una API y cómo leer la respuesta.

### 🔗 Endpoint
```
https://pokeapi.co/api/v2/pokemon/ditto
```
🧠 **¿Qué es “ditto”?** ditto es un parámetro en la URL. En este caso representa el nombre de un Pokémon.

👉 La API usa ese valor para saber qué información devolver, Es una parte variable de la URL que cambia según lo que quieras consultar.

### 💻 Código completo
```js

async function getPokemon(name) {  
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;  

  const response = await fetch(url);   // Pedimos datos a la API  
  const data = await response.json();  // Convertimos la respuesta a JSON  

  console.log("Nombre:", data.name);  
  console.log("Altura:", data.height);  
  console.log("Peso:", data.weight);  
}

getPokemon("ditto");
```

### 🧠 Explicación
#### 🔹 ¿Qué hace fetch(url)?

*fetch* es una función que pide datos a un servidor.  
Cuando la llamas:  
```js
fetch(url)
```
estás diciendo:

    “Ve a esta dirección de internet y tráeme lo que haya allí.”

Pero *fetch* no devuelve los datos directamente. Devuelve una *promesa* (Promise), que significa:

    “Estoy trabajando en ello. Cuando tenga la respuesta, te aviso.”

Por eso usamos *await*:  
```js
const response = await fetch(url);
```

Esto hace que JavaScript espere a que la API responda.

#### 🔹 ¿Qué es response?

*response* es la respuesta cruda del servidor. No son los datos todavía.

Contiene cosas como:
- **response.status** → código HTTP (200, 404…)
- **response.ok** → si la petición fue bien
- **response.body** → el contenido sin procesar

Piensa en *response* como la caja cerrada de un paquete.

#### 🔹 ¿Qué hace response.json()?

La API devuelve los datos en formato JSON, que es texto estructurado.

**response.json():**  “Abre la caja y convierte el texto en un objeto JavaScript.”

Por eso hacemos:  
```js*
const data = await response.json();  
```
Ahora sí, *data* es un objeto normal que puedes usar.

#### 🔹 ¿Qué es data?

*data* es el objeto final con toda la información del Pokémon.

**Ejemplo:** 
```js
data.name      // "ditto"  
data.height    // 3  
data.weight    // 40  
```
### ✔ Tareas

- Cambia "ditto" por otros Pokémon.
- Muestra también sus habilidades (*data.abilities*).

## 🧩 Ejercicio 2 — Obtener una lista de Pokémon

### 🎯 Objetivo

Aprender que una API puede devolver listas de elementos.

### 🔗 Endpoint
```
https://pokeapi.co/api/v2/pokemon
```
### 💻 Código completo

```js

async function listPokemons() {  
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");  
  const data = await response.json();  

  console.log("Lista de Pokémon:");  
  data.results.forEach(pokemon => {  
    console.log("-", pokemon.name);  
  });  
}

listPokemons();
```
### 🧠 Explicación

*name* viene directamente de la respuesta de la API. Cuando haces la petición a:
```
https://pokeapi.co/api/v2/pokemon
```
la API devuelve un objeto con una propiedad llamada results y dentro de results hay una lista de Pokémon. Cada elemento de esa lista tiene esta forma:

```json
{
  "name": "bulbasaur",
  "url": "https://pokeapi.co/api/v2/pokemon/1/"
}
```
*forEach* recorre la lista y muestra cada nombre.

### ✔ Tareas
- Muestra solo los nombres
- Identifica qué propiedades tiene cada elemento dentro de `results`
- Investiga qué información extra se obtiene usando la URL de cada Pokémon (sin implementarlo aún)
- Imprime la informacion por *console.log*.

- Muestra también la URL de cada Pokémon.

## 🧩 Ejercicio 3 — Pedir x cantidad de Pokémon (limit y offset)

### 🎯 Objetivo

Aprender a pedir una cantidad concreta de Pokémon usando parámetros en la URL.

### 🧠 Explicación simple

    limit = cuántos Pokémon quieres.  
    offset = desde qué número empiezas.

Ejemplo:

    limit=10 → dame 10 Pokémon  
    offset=20 → empieza desde el Pokémon número 21  

### 💡 Fragmento de código útil

```js

const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
```
Luego haces lo mismo que antes:  
```js
const response = await fetch(url);  
const data = await response.json();  
```
### ✔ Tareas

- Pide 5 Pokémon.
- Pide 10 Pokémon empezando desde el número 20.
- Muestra los nombres de todos los Pokémon que recibas.

---

## 📚 Recursos

- [PokeAPI Documentation](https://pokeapi.co/docs/v2)
- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JavaScript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

¡Sigue aprendiendo y diviértete con el mundo de las APIs! 😊
