# Backend API

Este es el backend de tu API de aprendizaje. Es una API REST muy sencilla hecha con Node.js y Express que trabaja con un archivo JSON (books.json) como almacenamiento. No necesitas base de datos ni configuraciones complicadas.

## Características

- ✅ API REST básica
- ✅ Operaciones CRUD (Create, Read, Update, Delete)
- ✅ **In-memory storage** Datos guardados en un archivo JSON
- ✅ Sin necesidad de base de datos. 

## Stack Tecnológico

- **Runtime**: Node.js (v18+)
- **Framework**: Express.js
- **Almacenamiento**: En memoria (Carga desde un archivo JSON)

## Cómo funciona el almacenamiento

### In-Memory Storage
- Los datos están en backend/data/books.json
- Todos los cambios (como DELETE) se mantienen en memoria mientras el servidor está encendido
- Los datos persisten mientras el proceso de Node.js sigue activo
- Cuando reinicias el servidor, los datos vuelven a cargarse desde el archivo original
- Usa `GET /api/reset` para volver a cargar los datos iniciales 

### ¿Por qué usar almacenamiento en memoria?
1. **No necesitas base de datos** -  Ideal para aprender sin configuraciones complicadas
2. **Muy fácil de entendere** -  Solo trabajas con un archivo JSON
3. **Limpieza automática** -  Cada reinicio del servidor restaura los datos originales

## Installation

### Prerequisites

- Node.js 18+
- npm

### Pasos

1. **Ir al directorio backend:**:
```bash
cd backend
```

2. **Instalar dependencias:s**:
```bash
npm install
```

3. **Iniciar el servidor**:
```bash

npm start

```

4. **Servidor disponible en**:
```
http://localhost:3000
```

## API Endpoints

### Base URL

**Local**: `http://localhost:3000`  

### Endpoints

| Method | Endpoint | Description | Status Codes |
|--------|----------|-------------|--------------|
| GET | `/` | API information | 200 |
| GET | `/api/books` | 	Obtener todos los libros | 200, 500 |
| GET | `/api/users/:id` | Obtener libro por ID | 200, 404, 500 |
| DELETE | `/api/users/:id` | Borrar libro por ID | 200, 404, 500 |

## Ejemplos de peticiones y respuestas

### 1. Obtener todos los libros

**Request**:
```http
GET /api/books
```

**Response** (200 OK):
```json
[
   {
      "id": 1,
      "title": "1984",
      "author": "George Orwell",
      "year": 1949
   }
]
```

---

### 2. Obtener un libro por ID

**Request**:
```http
GET /api/books/1
```

**Response** (200 OK):
```json
{
  "success": true,
  "data":
     {
       "id": 1,
       "title": "1984",
       "author": "George Orwell",
       "year": 1949
    }
}
```

**Response** (404 Not Found):
```json
{
  "success": false,
  "error": "Not Found",
  "message": "Book not found"
}
```

---

### 5. Borrar un libro

**Request**:
```http
DELETE /api/users/1
```

**Response** (200 OK):
```json
{
  "success": true,
  "message": "Book deleted successfully",
  "data": {
       "id": 1,
       "title": "1984",
       "author": "George Orwell",
       "year": 1949
  }
}
```

---

## Almacenamiento de datos

Los datos se guardan en `/data/books.json`. Este archivo es leído y escrito automáticamente por la API cuando haces peticiones.

**Estructura:**:
```json
[
  {
    "id": 1,
    "title": "1984",
    "author": "George Orwell",
    "year": 1949
  }
]
```

### Status Codes

| Código | Significado | Uso |
|------|---------|-------|
| 200 | OK | Peticiones GET, PUT o DELETE exitosas |
| 201 | Creado | POST realizado correctamente |
| 400 | Solicitud incorrecta | 	Faltan campos obligatorios |
| 404 | No encontrado | El recurso solicitado no existe |
| 409 | Conflicto | Conflicto de datos (por ejemplo, duplicados) |
| 422 | Entidad no procesable | Error de validación |
| 500 | Error interno del servidor | Fallo inesperado en el servidor |


## Estructura del proyecto

```
backend/
├── api/
│   └── index.js          # Main API code (Express app)
├── data/
│   └── users.json        # JSON file for data storage
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## Desarrollo

### Ejecutar en modo normal

```bash
npm start
```

## Environment Variables

| Variable | Puerto | Descripcion |
|----------|---------|-------------|
| PORT     |  3000 |   Server port |



## Notas

### ¿Por qué usar un archivo JSON en lugar de una base de datos?

Este es un proyecto de aprendizaje. Usar un archivo JSON:
- ✅ No requiere configurar una base de datos
- ✅ Es fácil de entender visualmente
- ✅ Es muy simple de desplegar o mover
- ✅ Es perfecto para aprender conceptos básicos de APIs

Para aplicaciones reales en producción, lo normal es usar una base de datos (PostgreSQL, MongoDB, etc.).

## Problemas frecuentes

### Puerto ya en uso

```bash
# Encuentra el proceso ejecutandose en el puerto 3000
lsof -i :3000

# Matar el proceso
kill -9 <PID>
```
(reemplaza PID por el número que te salga en el comando anterior)

### No se puede leer/escribir el archivo

- Asegúrate de que `data/books.json` existe
- Revisa permisos de lectura/escritura
- Verifica que estás ejecutando los comandos dentro de la carpeta backend

