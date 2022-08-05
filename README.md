## Aplicación creada en Next.js | la app utiliza el gestor de paquetes pnpm 


## Para poder utilizar la app instalar los módulos 
```bash o cmd
# or
pnpm install
```


## Para realizar el build de producción 
```
pnpm run build
```
## Para ejecutar la app en producción 
```
pnpm start
```
## Para ejecutar la app en desarrollo 
```
pnpm dev
```

## Información extra
```
La app utiliza:
    -typescript.
    -sass.
    -context.
    -AOS (librería de animaciones scroll).
    -Animate.css.
    -Los estilos se dividen por página y por componentes dentro de la carpeta styles cada sección posee un archivo main .scss
     que exporta componentes scss al archivo main.scss de mayor jerarquía el último de estos archivos es exportado a la carpeta
     globals la cual se importa en pages/_app.tsx.
    -La carpeta pages contiene las páginas y components los componentes modularizados.
    -Cada carpeta con archivos de typescript utiliza un archivo index.ts como archivo de barril (excepto en pages).

```


## Información de la app en funcionamiento
```
- El único formulario funcional es el de la sección de contacto, realiza un llamado a la API de next.
- Los inputs de búsqueda no realizan ninguna funcionalidad.
```
```
- Las páginas web son la sección de bienvenida y la sección de contacto.
```
