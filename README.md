# API Learning 101 🚀

¡Bienvenido a API Learning 101! Este repositorio es tu guía completa para entender y trabajar con APIs.


## 📚 Qué aprenderás

Este repositorio incluye:

- **Fundamentos completos de APIs** - métodos HTTP, códigos de estado, headers, principios REST  
- **Backend funcional** - una API real con la que puedes interactuar  
- **Colección de Postman** - pruebas de API listas para usar  
- **Ejemplos prácticos** - demostraciones reales  
- **Buenas prácticas** - enfoques estándar de la industria  

## 📂 Estructura del repositorio

```
api-learning-101/
├── docs/
│   ├── 01-what-is-api.md
│   ├── 02-http-methods.md
│   ├── 03-status-codes.md
│   ├── 04-rest-principles.md
├── exercises/
│   └── 01-pokeapi/
│       ├── README.md   ← ejercicio a completar 
├── backend/
│   ├── api/
│   │   └── index.js
│   ├── data/
│   │   └── users.json
│   ├── package.json
│   └── README.md
└── 
```

## 🚀 Cómo usar este repositorio

1. Sigue los documentos en orden:
   - ¿Qué es una API?
   - Métodos HTTP
   - Códigos de estado
   - REST

### 1. Pruebas en local

Si quieres porbar localmente:
- Haz clic en **Fork** en GitHub
- Esto creará una copia en tu cuenta  

```bash
# Clone the repository
git clone https://github.com/Yeraldsb/api-101
cd api-101
code .

# Install dependencies
cd backend
npm install

# Run locally
npm start
```

La API estara disponible en `http://localhost:3000`

## 🎯 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/books` | Obtener todos los usuarios |
| GET | `/api/books/:id` | Obtener usuario por ID |
| POST | `/api/books` | Crear usuario |
| PUT | `/api/books/:id` | Actualizar usuario |
| DELETE | `/api/books/:id` | Eliminar usuario |
| GET | `/api/reset` | Restablecer datos al estado inicial |

**💡 Nota sobre la persistencia de datos:**
- La API usa **almacenamiento en memoria** (¡no requiere base de datos!)
- Los datos persisten durante la vida de la función serverless
- Usa GET /api/reset para recargar los datos iniciales manualmente
- Perfecto para aprender y probar sin preocuparte por limpiar datos

## 📖 Ruta de aprendizaje

Sigue estas guías en orden:

1. [¿Qué es una API?](docs/01-what-is-api.md)
2. [Métodos HTTP](docs/02-http-methods.md)
3. [Códigos de estado](docs/03-status-codes.md)
4. [Principios REST](docs/04-rest-principles.md)

## 💻 Backend Technology

- **Runtime**: Node.js
- **Framework**: Express.js
- **Storage**: JSON file (no database needed!)

## 🤝 Contributing

Este repositorio está diseñado con fines educativos.
Puedes hacer fork y experimentar libremente.

---

Happy Learning! 🎉
