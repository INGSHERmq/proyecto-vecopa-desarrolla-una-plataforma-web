# Contributing Guide

Gracias por tu interés en contribuir a Vecopa! Este documento te guiará a través del proceso de contribución.

## Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [Proceso de Contribución](#proceso-de-contribución)
- [Estándares de Código](#estándares-de-código)
- [Estructura de Commits](#estructura-de-commits)
- [Branch Naming](#branch-naming)
- [Pull Request](#pull-request)
- [Issues](#issues)

## Código de Conducta

Este proyecto sigue el [Código de Conducta de Contributor Covenant](https://contributor-covenant.org/). Participa de manera respetuosa e inclusiva.

## Proceso de Contribución

1. **Fork el repositorio**
2. **Crea tu rama de feature**
3. **Desarrolla tu cambio**
4. **Prueba tus cambios**
5. **Envía un Pull Request**

### 1. Fork y Clone

```bash
git clone https://github.com/tu-usuario/proyecto-vecopa.git
cd proyecto-vecopa
```

### 2. Configura el entorno

```bash
# Instala dependencias
npm install

# Configura variables de entorno
cp .env.example .env
# Edita .env según sea necesario
```

### 3. Crea tu rama

```bash
git checkout -b feature/nueva-funcionalidad
```

### 4. Desarrollo

Sigue los estándares de código y haz commits significativos.

### 5. Testing

```bash
# Ejecuta tests
npm test

# Verifica coverage
npm run test:coverage

# Linting
npm run lint
npm run format
```

### 6. Push y PR

```bash
git push origin feature/nueva-funcionalidad
```

Luego abre un Pull Request en GitHub.

## Estándares de Código

### TypeScript

- Usa siempre TypeScript
- Evita `any`, usa tipos específicos
- Usa interfaces para objetos complejos
- Prefiere `const` sobre `let`

### React

- Usa componentes funcionales
- Usa hooks en lugar de class components
- Prop naming descriptivo
- Usa PropTypes o TypeScript para props

### NestJS

- Usa módulos para organizar código
- Inyecta dependencias con `@Injectable()`
- Usa DTOs para validación
- Maneja errores con `@Catch()`

### Estilo General

- Usa 2 espacios para indentación
- Usa comillas simples
- Usa Prettier para formateo automático
- Mantén líneas de código bajo 80 caracteres

## Estructura de Commits

Usa [Conventional Commits](https://conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Tipos

- `feat`: Nueva funcionalidad
- `fix`: Bug fix
- `docs`: Cambios en documentación
- `style`: Cambios de formato
- `refactor`: Refactorización
- `test`: Cambios en tests
- `chore`: Cambios en build o herramientas

### Ejemplos

```
feat(auth): add JWT refresh token support

- Implement refresh token mechanism
- Add token rotation
- Update authentication flow

Closes #123
```

```
fix(api): handle database connection errors

- Add proper error handling
- Log connection failures
- Retry mechanism

Fixes #456
```

## Branch Naming

Usa descriptores claros:

- `feature/nueva-funcionalidad`
- `bugfix/issue-123`
- `docs/actualizar-readme`
- `hotfix/critical-bug`

## Pull Request

### Template

```markdown
## Descripción
Breve descripción del cambio

## Cambios realizados
- Cambio 1
- Cambio 2
- Cambio 3

## Pruebas
- [ ] Tests unitarios pasan
- [ ] Tests de integración pasan
- [ ] Linting pasa
- [ ] Build es exitoso

## Capturas de pantalla (si aplica)
![Screenshot](url)

## Issues Relacionados
Closes #123
```

### Checklist

- [ ] Tu código sigue los estándares de estilo
- [ ] Los tests pasan localmente
- [ ] Has agregado tests para nuevos cambios
- [ ] Has actualizado la documentación si es necesario
- [ ] Has revisado los cambios manualmente
- [ ] El PR está listo para revisión

## Issues

### Creando Issues

Al crear un nuevo issue:

1. Usa un título claro y descriptivo
2. Proporciona toda la información relevante
3. Incluye pasos para reproducir (si es un bug)
4. Incluye información del entorno (Node.js, OS, etc.)

### Etiquetando Issues

Usa etiquetas estándar:

- `bug`: Reporte de bug
- `feature`: Solicitud de nueva funcionalidad
- `documentation`: Cambios en documentación
- `good first issue`: Bueno para principiantes
- `help wanted`: Necesita ayuda

## Recursos

- [Guía de Contribución de GitHub](https://github.com/firstcontributions/first-contributions)
- [Conventional Commits](https://conventionalcommits.org/)
- [Git Commit Message Style Guide](https://cbeams.github.io/posts/git-commit-message-style-guide/)

## Contacto

Si tienes preguntas sobre el proceso de contribución:
- Abre un issue en GitHub
- Contacta al equipo de mantenimiento

Gracias por contribuir a Vecopa! 🎉