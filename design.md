# Sistema de diseño

Este documento describe los estilos que usa actualmente la interfaz de Movies. Los tokens están definidos en `src/App.css` mediante `@theme` de Tailwind CSS v4; las utilidades personalizadas se generan a partir de esas variables.

## 1. Fundamentos de diseño

### Paleta

| Rol semántico | Token CSS / utilidades Tailwind | HEX | Uso |
|---|---|---:|---|
| Marca principal | `--color-brand` / `bg-brand`, `text-brand`, `border-brand` | `#be123c` | Acciones principales y elementos de marca |
| Marca intensa | `--color-brand-strong` / `*-brand-strong` | `#881337` | Extremo oscuro del gradiente y bordes de marca |
| Marca hover | `--color-brand-hover` / `*-brand-hover` | `#f43f5e` | Realce de acciones al pasar el cursor |
| Marca destacada | `--color-brand-highlight` / `*-brand-highlight` | `#fda4af` | Badge “Nuevo” |
| Marca clara | `--color-brand-pale` / `*-brand-pale` | `#ffe4e6` | Texto de acciones sobre fondos oscuros |
| Marca profunda | `--color-brand-deep` / `*-brand-deep` | `#4c0519` | Separadores y bordes oscuros |
| Superficie | `--color-surface` / `bg-surface` | `#09090b` | Fondo principal y encabezado |
| Superficie elevada | `--color-surface-raised` / `bg-surface-raised` | `#18181b` | Modales y fondo de los gradientes |
| Superficie de campo | `--color-surface-input` / `bg-surface-input` | `#27272a` | Campo de búsqueda |
| Superficie de tarjeta | `--color-surface-card` / `bg-surface-card` | `#3f3f46` | Extremo claro del fondo de tarjetas |
| Superficie cálida | `--color-surface-warm` / `bg-surface-warm` | `#3f3035` | Extremo cálido de los elementos de la watchlist |
| Texto principal | `--color-foreground` / `text-foreground` | `#f5f5f4` | Texto principal sobre superficies oscuras |
| Texto fuerte | `--color-foreground-strong` / `text-foreground-strong` | `#e7e5e4` | Títulos de elementos de la lista |
| Texto suave | `--color-foreground-soft` / `text-foreground-soft` | `#d6d3d1` | Mensajes de estado y texto secundario destacado |
| Texto secundario | `--color-foreground-muted` / `text-foreground-muted` | `#a8a29e` | Descripciones y metadatos |
| Texto tenue | `--color-foreground-subtle` / `text-foreground-subtle` | `#78716c` | Ayuda de menor jerarquía |
| Placeholder | `--color-placeholder` / `placeholder:text-placeholder` | `#a1a1aa` | Texto de ayuda del buscador |
| Borde del campo | `--color-border-input` / `border-border-input` | `#52525b` | Borde del buscador |

Los gradientes de marca tienen tokens de imagen independientes del color plano: `--background-image-brand-gradient` y `--background-image-brand-gradient-hover` habilitan `bg-brand-gradient` y `hover:bg-brand-gradient-hover`.

Los grises y rosas que anteriormente venían de la paleta estándar de Tailwind se han expresado arriba como colores semánticos propios. Los gradientes de tarjetas se aplican con las clases CSS `.movie-card-bg` y `.watchlist-item-bg`, que reutilizan los mismos tokens.

## 2. Tipografía

La familia declarada en `@theme` es `Inter, ui-sans-serif, system-ui, sans-serif`. No se carga una fuente web en el proyecto; si Inter no está instalada localmente, se verá la fuente sans-serif del sistema.

Jerarquía tipográfica presente en la interfaz:

| Uso | Clases actuales | Peso habitual |
|---|---|---|
| Título principal | `text-3xl` | `font-extrabold` |
| Título de modal | `text-xl` | `font-bold` |
| Título de tarjeta / mensaje vacío | tamaño base, `text-lg` para el mensaje | `font-semibold` |
| Texto de contenido | tamaño base | `font-medium` cuando se destaca |
| Metadatos y acciones secundarias | `text-sm` | normal o `font-semibold` |
| Etiquetas pequeñas | `text-xs` | normal o `font-semibold` |
| Icono/botón de cierre | `text-xl` | normal |

El espaciado entre letras se controla puntualmente con `tracking-tight` y `tracking-wide`. Mantén la jerarquía consistente: no uses tamaño o peso como único indicador de significado.

## 3. Sistema de espaciado y bordes

- **Espaciado:** la escala de Tailwind es la base. Los patrones visibles más comunes son `p-4` para tarjetas y elementos de lista, `p-5` para el encabezado/contenido del modal, `px-4 py-2` para botones, `gap-4` o `gap-6` para agrupaciones y `py-6`/`py-10` para secciones.
- **Radios:** `rounded-md` para acciones compactas, `rounded-lg` para imágenes y botones, `rounded-xl` para tarjetas y acciones, `rounded-2xl` para el modal y `rounded-full` para la acción principal de las tarjetas.
- **Bordes:** finos y de bajo contraste sobre las superficies oscuras; usa los tokens de marca con opacidad para contenedores de la lista y el token neutro para el campo de búsqueda.
- **Sombras:** `shadow-md` en controles y elementos pequeños, `shadow-lg` en el encabezado y `shadow-2xl` en el modal.
- **Layout:** el catálogo usa una grilla responsive con `gap-6`; el contenido se limita mediante `max-w-7xl` y se centra con `mx-auto`.

## 4. Guía de clases y buenas prácticas

1. **Usa tokens semánticos en lugar de hex o valores arbitrarios.** Para un color de marca, usa `bg-brand`/`text-brand`; para fondos, `bg-surface` o `bg-surface-raised`. Si aparece una nueva tonalidad repetida, agrégala a `@theme` con un nombre según su función, no según el componente que la usa.
2. **Reutiliza los gradientes existentes.** Usa `.movie-card-bg` para tarjetas de catálogo y `.watchlist-item-bg` para filas de la lista. Evita repetir gradientes `radial-gradient(...)` dentro de `className`.
3. **Extrae patrones de UI repetidos a componentes React.** Los botones deberían compartir un componente y variantes con nombres (`primary`, `secondary`, `danger`); las tarjetas y campos también deben centralizar estructura y estados interactivos.
4. **Si un grupo corto de clases se repite, crea una clase de componente en `src/App.css` con `@layer components`.** Si la repetición es estructural o incluye comportamiento, prefiere un componente React.
5. **Conserva estados interactivos y accesibilidad al extraer estilos.** Los botones necesitan texto comprensible, foco visible y estados `hover`/`focus`; el significado no debe depender únicamente del color.

### Configuración Tailwind CSS v4

El proyecto importa Tailwind desde `src/App.css`; no requiere un `tailwind.config.js` para registrar estos tokens:

```css
@import "tailwindcss";

@theme {
  --color-brand: #be123c;
  --color-brand-strong: #881337;
  --color-brand-hover: #f43f5e;
  --color-brand-highlight: #fda4af;
  --color-brand-pale: #ffe4e6;
  --color-brand-deep: #4c0519;

  --color-surface: #09090b;
  --color-surface-raised: #18181b;
  --color-surface-input: #27272a;
  --color-surface-card: #3f3f46;
  --color-surface-warm: #3f3035;

  --color-foreground: #f5f5f4;
  --color-foreground-strong: #e7e5e4;
  --color-foreground-soft: #d6d3d1;
  --color-foreground-muted: #a8a29e;
  --color-foreground-subtle: #78716c;
  --color-placeholder: #a1a1aa;
  --color-border-input: #52525b;

  --background-image-brand-gradient:
    radial-gradient(circle at center, var(--color-brand), var(--color-brand-strong) 75%);
  --background-image-brand-gradient-hover:
    radial-gradient(circle at center, var(--color-brand-hover), var(--color-brand) 75%);

  --font-sans: Inter, ui-sans-serif, system-ui, sans-serif;
  --font-display: Inter, sans-serif;
}

@layer components {
  .movie-card-bg {
    background: radial-gradient(
      circle at center,
      var(--color-surface-card),
      var(--color-surface-raised) 75%
    );
  }

  .watchlist-item-bg {
    background: radial-gradient(
      circle at center,
      var(--color-surface-warm),
      var(--color-surface-raised) 75%
    );
  }
}
```
