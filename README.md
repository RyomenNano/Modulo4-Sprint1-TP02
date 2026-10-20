Movies — Mi Watchlist

## 1. Descripción del proyecto

Es una aplicación de catálogo de películas con una watchlist personal. Permite buscar películas por título, recorrer el catálogo con paginación, agregarlas o quitarlas de una lista, abrir un panel para revisar la selección y vaciarla con confirmación. La selección se conserva en el navegador mediante `localStorage`.

El catálogo es estático y está definido en `src/data/movies.js`: contiene 20 películas con título, año, imagen y un indicador `nuevo`. Las imágenes están referenciadas mediante direcciones externas. La aplicación no consulta una API para cargar el catálogo.

## 2. Cómo correr el proyecto

Se necesita Node.js y npm. Desde la carpeta del proyecto:

```bash
npm install
npm run dev
```

Vite inicia el servidor local y muestra en la terminal la dirección para abrir la aplicación.

## 3. Tecnologías

- **React 19** y **React DOM**: interfaz basada en componentes y hooks.
- **Vite 7**: servidor de desarrollo y herramienta de build.
- **`@vitejs/plugin-react-swc`**: integración de React con Vite mediante SWC.
- **Tailwind CSS v4** y **`@tailwindcss/vite`**: estilos utilitarios; los tokens de diseño se declaran en `src/App.css` con `@theme`.
- **Web APIs**: `localStorage`, `document.title` y `window.confirm`.

## 4. Decisiones de estado

`src/main.jsx` monta `App` dentro de `<>...</>`. `App.jsx` compone el encabezado, el contenido principal y el pie de página, y obtiene los estados y acciones que necesitan esas partes mediante hooks.

### Watchlist

`App` llama a `useMyList()`, que usa `useLocalStorage('watchlist', [])` para obtener `movies` y su setter. El hook expone `movieToggle`, `removeMovie` y `vaciarLista`:

- `movieToggle(movie)` comprueba si la película ya está en la lista; si está, la quita con `filter`, y si no, crea una nueva lista con spread.
- `removeMovie(id)` quita una película por su identificador.
- `vaciarLista()` establece la lista en un array vacío.

`App` pasa los datos y acciones como props: `Header` recibe la lista para mostrar su contador; `Main` pasa la lista y el toggle a `MovieList` y a las tarjetas, y entrega la lista y las acciones de quitar/vaciar a `WatchlistModal`. Cada `MovieCard` calcula si su película está guardada a partir de `movies`; ese valor no se mantiene en un estado aparte.

### Persistencia

`useLocalStorage` recibe una clave y un valor inicial. Lee el valor de `localStorage` durante la inicialización lazy de `useState`, usando `JSON.parse`. Si la lectura o el parseo fallan, registra el error y devuelve el valor inicial. Un `useEffect` guarda los cambios con `JSON.stringify`; admite arrays y otros valores serializables. Cuando el valor es un array vacío o es `null`/`undefined`, elimina la clave con `removeItem`. También escucha el evento `storage` para actualizar el estado cuando esa clave cambia desde otra pestaña.

### Búsqueda

`useBuscador()` mantiene `busqueda`, inicialmente una cadena vacía, y devuelve también `setBusqueda`. `App` entrega ambos a `Main`; el input actualiza el valor y `MovieList` filtra el catálogo por título sin distinguir mayúsculas de minúsculas. Luego ordena las coincidencias para mostrar primero las películas marcadas como nuevas.

### Paginación

`usePaginacion(busqueda)` mantiene la página actual asociada al término de búsqueda. Si cambia la búsqueda, la lista vuelve a la primera página. `MovieList` muestra hasta 20 películas por página y ofrece controles para avanzar o retroceder, deshabilitados cuando se alcanza el inicio o el final. El catálogo actual tiene 20 películas, por lo que ocupa una sola página; la paginación permite recorrer páginas adicionales si el catálogo crece.

### Apertura del panel y título

`usePanel()` mantiene el booleano `open` y devuelve `setOpen`. `Header` recibe el setter para alternar el panel; `Main` usa `open` para montar condicionalmente `WatchlistModal` y le pasa el setter para cerrarlo.

`useContTitle(movies, "Movies")` actualiza `document.title` con la cantidad de películas guardadas o con el nombre de la aplicación cuando la lista está vacía.

## 5. Qué se simplificó con el refactor

`App.jsx` conserva la composición de la pantalla y conecta los datos y acciones con los componentes mediante props. La lógica de la lista persistida quedó en `useMyList` y `useLocalStorage`; el estado de búsqueda y el del panel están en `useBuscador` y `usePanel`; la actualización del título está en `useContTitle`.

Los componentes se ocupan de mostrar la interfaz: `MovieList` filtra y representa las tarjetas, `MovieCard` muestra cada película y su acción, y `WatchlistModal` presenta la lista y sus controles. `Button` delega la acción seleccionada a `ButtonController`. Esta separación evita concentrar toda la lógica de interacción y persistencia en un solo componente.
