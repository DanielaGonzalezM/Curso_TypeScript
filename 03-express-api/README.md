# 03 - Express API con TypeScript

Pequeña API construida con Express y TypeScript.

## Instalación

Después de descargar el código, instala las dependencias:

```
npm install
```

Esto instalará Express y sus tipos (`@types/express`), entre otras dependencias necesarias.

Si necesitas instalarlas manualmente en un proyecto nuevo:

```
npm i express --save
npm i --save-dev @types/express
```

## Compilar y ejecutar

Este proyecto no usa un compilador en caliente, así que primero se compila el TypeScript a JavaScript y luego se ejecuta el resultado:

```
npx tsc
node dist/index.js
```

El código fuente está en [index.ts](index.ts) y el resultado compilado se genera en la carpeta `dist/`.

## Endpoints

* `GET /` — responde con un JSON de prueba:

```json
{
  "ok": true,
  "msg": "Todo ok"
}
```

Por defecto el servidor escucha en el puerto `3000` (http://localhost:3000).
