# ¿Qué es una API? 🌐

## Introducción

**API** significa **Application Programming Interface** o Interfaz de Programación de Aplicaciones. Es un conjunto de reglas y protocolos que permite que diferentes aplicaciones de software se comuniquen entre sí.

## Analogía del mundo real

Piensa en una API como un camarero en un restaurante:

1. **Tú (Cliente)** -  Miras el menú y decides qué quieres
2. **Camarero (API)** - Lleva tu pedido a la cocina
3. **Cocina (Servidor)** - Prepara tu comida
4. **Camarero (API)**  - Te trae la comida

El camarero es el intermediario que comunica entre tú y la cocina, igual que una API comunica entre aplicaciones.

## Tipos de APIs

### 1. **REST APIs** (¡lo que estamos aprendiendo!)
- Usan métodos HTTP
- Comunicación sin estado
- Formato JSON
- El tipo más común

### 2. **SOAP APIs**
- Basadas en XML
- Más complejas
- Usadas en sistemas empresariales

### 3. **GraphQL APIs**
- Lenguaje de consultas
- Pides exactamente lo que necesitas
- Un solo endpoint

### 4. **WebSocket APIs**
- Comunicación en tiempo real
- Conexión bidireccional
- Usado en chats y actualizaciones en vivo

## ¿Por qué usar APIs?

### 1. **Separación de responsabilidades**
- Frontend y backend pueden desarrollarse por separado
- Equipos distintos pueden trabajar en paralelo

### 2. **Reutilización**
- Una API puede servir a múltiples aplicaciones
- Web, móvil y escritorio pueden usar la misma API

### 3. **Seguridad**
- Oculta la implementación interna
- Controla el acceso a los datos

### 4. **Escalabilidad**
- Facilita escalar sistemas
- Puedes actualizar el backend sin tocar el frontend

## Componentes de una API

### 1. **Endpoint**
La URL donde se accede a la API:
```
http://localhost:3000
```

### 2. **Metodo**
El verbo HTTP (GET, POST, PUT, DELETE)

### 3. **Headers/Cabezeras**
Metadatos de la petición:
```
Content-Type: application/json
Authorization: Bearer token123
```

### 4. **Request Body**
Datos recibidos del servidor:
```json

```

### 5. **Response**
Data received from the server:
```json
{
   "id": 1,
   "title": "1984",
   "author": "George Orwell",
   "year": 1949
}
```

### 6. **Status Code**
Indicates success or failure (200, 404, 500, etc.)

## Example: Weather API

Imagine you're building a weather app:

```javascript
// Request
GET https://api.weather.com/current?city=London

// Response
{
  "temperature": 15,
  "condition": "Cloudy",
  "humidity": 70
}
```

Your app doesn't need to know how the weather data is collected or stored. The API handles all that complexity!

## REST API Characteristics

REST (Representational State Transfer) APIs have specific characteristics:

1. **Client-Server Architecture** - Separated concerns
2. **Stateless** - Each request is independent
3. **Cacheable** - Responses can be cached
4. **Uniform Interface** - Consistent structure
5. **Layered System** - Can have multiple layers

## JSON Format

APIs commonly use JSON (JavaScript Object Notation) for data exchange:

```json
{
  "user": {
    "id": 1,
    "name": "Alice",
    "age": 25,
    "isActive": true,
    "hobbies": ["reading", "coding", "gaming"]
  }
}
```

**Why JSON?**
- Human-readable
- Lightweight
- Supported by all programming languages
- Easy to parse

## Common Use Cases

1. **Social Media** - Posting, liking, commenting
2. **Payment Processing** - Stripe, PayPal
3. **Maps** - Google Maps API
4. **Authentication** - OAuth, login systems
5. **Data Retrieval** - News, weather, stocks

## Our Learning API

In this repository, we have a simple User Management API:

- Create users
- Read user data
- Update user information
- Delete users

All without a database - just a JSON file!

## Next Steps

Now that you understand what an API is, let's learn about:
- [HTTP Methods](02-http-methods.md) - How to interact with APIs
- [Status Codes](03-status-codes.md) - Understanding responses
- [REST Principles](04-rest-principles.md) - Best practices

---

[← Back to README](../README.md) | [Next: HTTP Methods →](02-http-methods.md)