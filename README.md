# Vecopa - Plataforma Web POS para HORECA

[![Node.js Version](https://img.shields.io/badge/node-v20.x-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-red.svg)](LICENSE)

Vecopa es una plataforma web POS (Point of Sale) responsive diseñada específicamente para el sector HORECA (Hostelería, Restauración y Cafetería). Ofrece una solución moderna y escalable para la gestión de restaurantes, bares y cafeterías.

## Características

### 🚀 Frontend
- **React 19** con TypeScript para un desarrollo tipo-safe
- **Vite** para builds ultra-rápidos
- **Tailwind CSS** para un diseño responsive y moderno
- **React Router DOM** para la navegación de SPA
- **Zustand** para la gestión de estado ligera
- **Firebase** para autenticación y datos en tiempo real
- **Lucide React** para iconos de alta calidad

### 🔧 Backend
- **NestJS** framework Node.js basado en Express
- **TypeScript** para código tipo-safe
- **Prisma ORM** para acceso a bases de datos
- **PostgreSQL** como base de datos principal
- **JWT Authentication** para seguridad
- **Rate Limiting** y **Helmet** para seguridad adicional
- **Firebase Admin** para integración con servicios de Firebase

### 🛡️ Seguridad
- Autenticación JWT con refresh tokens
- Validación de entrada con class-validator
- Rate limiting para prevenir abusos
- CORS configurado
- Helmet para headers de seguridad
- Encriptación de contraseñas con bcrypt

### 📦 Monorepo
- **npm workspaces** para gestión de dependencias
- **TypeScript** compartido entre frontend y backend
- **ESLint + Prettier** para código consistente
- **Jest + Vitest** para testing
- **Docker** para despliegue contenedorizado

## Estructura del Proyecto

```
proyecto-vecopa/
├── apps/
│   ├── web/                 # Frontend React + Vite
│   │   ├── src/
│   │   │   ├── modules/     # Módulos de la aplicación
│   │   │   ├── shared/      # Componentes, layouts y servicios compartidos
│   │   │   ├── lib/        # Utilidades y configuraciones
│   │   │   └── styles.css  # Estilos globales
│   │   └── package.json
│   └── api/                 # Backend NestJS
│       ├── src/
│       │   ├── modules/     # Módulos de la API
│       │   ├── auth/        # Autenticación
│       │   ├── common/      # DTOs y utilidades comunes
│       │   ├── database/    # Configuración de base de datos
│       │   └── main.ts      # Punto de entrada
│       ├── prisma/          # Configuración de Prisma
│       └── package.json
├── docker-compose.yml       # Orquestación de contenedores
├── .env.example            # Variables de entorno
├── .gitignore              # Archivos ignorados
└── README.md               # Documentación
```

## Requisitos

- Node.js 20.x o superior
- npm 8.x o superior
- Docker (opcional, para despliegue contenedorizado)

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/proyecto-vecopa.git
cd proyecto-vecopa
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env
# Edita .env con tus configuraciones
```

4. Inicia la base de datos local (opcional):
```bash
docker-compose up -d postgres
```

5. Genera el cliente de Prisma:
```bash
npm run prisma:generate
```

6. Ejecuta las migraciones:
```bash
npm run prisma:migrate:dev
```

7. Siembra datos iniciales:
```bash
npm run prisma:seed
```

## Desarrollo

### Iniciar el frontend
```bash
npm run dev:web
# o
npm run dev
```

### Iniciar el backend
```bash
npm run dev:api
```

### Iniciar ambos servicios
```bash
npm run dev:all
```

### Testing
```bash
# Ejecutar tests
npm test

# Ejecutar tests con coverage
npm run test:coverage

# Ejecutar tests en modo watch
npm run test:watch
```

### Linting y formateo
```bash
# Linting
npm run lint

# Linting con auto-fix
npm run lint:fix

# Formateo de código
npm run format
```

## Despliegue

### Vercel (Recomendado)
1. Instala el CLI de Vercel:
```bash
npm i -g vercel
```

2. Despliega el proyecto:
```bash
vercel
```

3. Configura las variables de entorno en el dashboard de Vercel

### Docker
1. Construye los contenedores:
```bash
docker-compose build
```

2. Inicia los servicios:
```bash
docker-compose up -d
```

### Manual
1. Construye ambos aplicaciones:
```bash
npm run build
```

2. Inicia el backend:
```bash
npm start
```

3. Inicia el frontend:
```bash
cd apps/web && npm run preview
```

## Variables de Entorno

Ver `.env.example` para todas las variables necesarias. Las principales son:

### API
- `DATABASE_URL`: URL de conexión a PostgreSQL
- `JWT_SECRET`: Secreto para JWT
- `JWT_EXPIRES_IN`: Tiempo de expiración de JWT
- `FIREBASE_PROJECT_ID`: ID del proyecto Firebase
- `FIREBASE_SERVICE_ACCOUNT`: Cuenta de servicio Firebase

### Frontend
- `VITE_API_URL`: URL de la API
- `VITE_FIREBASE_API_KEY`: API key de Firebase
- `VITE_FIREBASE_AUTH_DOMAIN`: Dominio de autenticación Firebase

## Scripts Disponibles

- `dev`: Iniciar frontend en modo desarrollo
- `dev:web`: Iniciar frontend
- `dev:api`: Iniciar backend
- `dev:all`: Iniciar ambos servicios
- `build`: Construir ambas aplicaciones
- `build:web`: Construir frontend
- `build:api`: Construir backend
- `test`: Ejecutar tests
- `test:coverage`: Ejecutar tests con coverage
- `lint`: Linting
- `lint:fix`: Linting con auto-fix
- `format`: Formateo de código
- `prisma:*`: Comandos de Prisma
- `clean`: Limpiar directorios de build

## Contribución

1. Haz fork del proyecto
2. Crea tu rama de feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit tus cambios: `git commit -am 'Añade nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

## Licencia

MIT License - ver el archivo [LICENSE](LICENSE) para detalles.

## Soporte

Para soporte y preguntas:
- Abre un issue en GitHub
- Contacta al equipo de desarrollo

## Roadmap

- [ ] Módulo de inventario
- [ ] Reportes avanzados
- [ ] Multi-tienda
- [ ] App móvil
- [ ] Integración con pasarelas de pago
- [ ] Sistema de reservas
- [ ] Menus digitales
- [ ] Sistema de fidelización