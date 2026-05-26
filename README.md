# Vecopa - Plataforma Web POS

## Estructura del Proyecto

```
proyecto-vecopa/
├── apps/
│   ├── web/                 # Frontend React + Vite
│   │   ├── src/
│   │   │   ├── modules/     # Módulos de la aplicación
│   │   │   ├── shared/      # Componentes, layouts y servicios compartidos
│   │   │   └── lib/        # Utilidades y configuraciones
│   │   └── package.json
│   └── api/                 # Backend NestJS
│       ├── src/
│       │   ├── modules/     # Módulos de la API
│       │   ├── auth/        # Autenticación
│       │   ├── common/      # DTOs y utilidades comunes
│       │   └── database/    # Configuración de base de datos
│       ├── prisma/          # Configuración de Prisma
│       └── package.json
├── vercel.json              # Configuración de despliegue en Vercel
├── package.json             # Configuración del workspace
├── .env.example             # Variables de entorno
├── .gitignore              # Archivos ignorados
└── VERCEL.md               # Guía de despliegue
```

## Tecnologías

### Frontend (apps/web/)
- React 19 + TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Firebase
- Zustand (gestión de estado)

### Backend (apps/api/)
- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Firebase Admin

## Despliegue en Vercel

El proyecto está configurado para desplegarse en Vercel con:
- Frontend como aplicación estática
- Backend como serverless functions
- Rutas API configuradas correctamente

## Variables de Entorno

Ver `.env.example` para todas las variables necesarias.

## Comandos de Desarrollo

```bash
# Iniciar frontend
npm run dev:web

# Iniciar backend
npm run dev:api

# Iniciar ambos
npm run dev

# Construir para producción
npm run build
```