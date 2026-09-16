# 01 - Bases de TypeScript

Fundamentos del lenguaje: tipos, objetos, funciones, clases, interfaces, namespaces y características de ES6 usadas junto con TypeScript.

## Instalación

```bash
npm install -g typescript
```

## Compilación

Compilar una vez:

```bash
tsc
```

Compilar en modo watch (recompila al guardar cambios):

```bash
tsc --watch
```

La salida compilada se genera en la carpeta `dist/`, según lo definido en [tsconfig.json](tsconfig.json).

## Contenido

- [tipos/](tipos/) — tipos primitivos y básicos: `any`, `arrays`, `booleans`, `enums`, `never`, `null-undefined`, `numbers`, `strings`, `tuples`, `void`.
- [objetos/](objetos/) — objetos, alias de tipo (`type`) y uniones de tipos (`union-types`).
- [funciones/](funciones/) — parámetros requeridos, opcionales, por defecto y rest; tipado de funciones (`function-type`).
- [clases/](clases/) — clases básicas, herencia (`extends`), clases abstractas y constructores privados.
- [interfaces/](interfaces/) — interfaces básicas, aplicadas a clases, a funciones y casos más complejos.
- [namespace/](namespace/) — organización de código mediante `namespace` (ejemplo de validaciones).
- [ES6/](ES6/) — características de ES6 usadas en TypeScript: `let`/`var`, desestructuración, `for...of` y clases ES6.

## Archivos de práctica

- [app.ts](app.ts) — ejercicios de interfaces (validación de objetos, propiedades opcionales, interfaces para funciones y para clases).
- [app-tipos.ts](app-tipos.ts), [app-funciones.ts](app-funciones.ts), [app-clases.ts](app-clases.ts) — ejercicios adicionales por tema.
- [index.html](index.html) — archivo HTML de prueba para ejecutar el código compilado en el navegador.
