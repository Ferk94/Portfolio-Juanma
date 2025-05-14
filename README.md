# Proyecto Plataforma Artista & Profesor - Landing + Paneles Interactivos

Este proyecto fue desarrollado para un **profesor de batería** que buscaba una presencia online más moderna y flexible, tanto para su perfil profesional como artístico. La idea fue construir una **landing page visual y atractiva**, y dos **paneles separados**: uno orientado a su rol como **Profesor** y otro a su faceta como **Artista**, cada uno con navegación, estética y funcionalidades propias.

---

## ✨ Objetivos del cliente

El cliente solicitó:

- Una **landing page** clara, con presentación personal, llamados a la acción y acceso a ambos paneles (Profesor / Artista).
- Dos paneles internos con navegaciones diferenciadas:
  
  ### 🔸 Panel del Profesor
  - Vista de calendario.
  - Sección de clases disponibles.
  - Recursos didácticos descargables.
  - Testimonios de alumnos.
  - Estética sobria y profesional.
  
  ### 🔸 Panel del Artista
  - Misma estructura general que el de profesor, pero con **diseño más expresivo**.
  - Incluye una **radio personalizada** que reproduce temas grabados por el cliente tocando la batería.
  - Cada tema cargado en la radio es de autoría propia, respetando los derechos de uso.

- Todo el sitio debía ser **modular y fácilmente escalable**.
- Diseño **responsive**, visualmente atractivo y funcional en dispositivos móviles.

---

## 🧪 Tecnologías utilizadas

### 🔹 Next.js
Framework basado en React que permite SSR y generación estática. Ideal para proyectos con rutas diferenciadas (landing + dos paneles).

### 🔹 TypeScript
Lenguaje con tipado fuerte que mejora la mantenibilidad, reduce errores y da soporte a largo plazo.

### 🔹 CSS Modules
Permiten aplicar estilos encapsulados por componente, lo que ayudó a mantener separados y bien definidos los estilos del modo Artista y Profesor.

### 🔹 HTML5 Audio API
Utilizada en el panel Artista para la creación de una radio con temas en formato `.mp3`. Se incorporó un `<audio>` personalizado.

### 🔹 Next/Image
Usada para optimizar imágenes automáticamente y mejorar la performance de la landing y los paneles.

### 🔹 Git + GitHub
Control de versiones completo con ramas organizadas por funcionalidad y fases del proyecto.

---

## 🎨 Detalles de diseño

- Se implementaron **dos barras de navegación diferentes**:
  - En el modo Profesor: diseño sobrio (fondo celeste oscuro), con botón flotante para volver a la landing.
  - En el modo Artista: diseño más contrastante (negro/gris oscuro) con hover interactivo y colores llamativos.
- Los estilos fueron ajustados para mantener una altura consistente, sombras sutiles, y un diseño centrado tanto en funcionalidad como en estética.

---

## 🔐 Legalidad y propiedad de contenido

- Todos los temas usados en la **radio del panel Artista** fueron grabados por el profesor personalmente en batería.
- No se utilizaron pistas comerciales protegidas por derechos de autor.
- El reproductor fue diseñado para emitir únicamente esos contenidos, cumpliendo así con los requisitos legales.

---

## 👨‍💻 Autor

Este proyecto fue desarrollado por **Fernando Kaganovicz** como desarrollador freelance full stack. Me encargué del diseño, estructura técnica, componentes funcionales, y adaptación visual en base al feedback del cliente.

---

## 🚀 Posibles mejoras futuras

- Incorporar un CMS (como Sanity, Strapi o Contentful) para que el cliente pueda cargar fácilmente nuevos recursos o testimonios.
- Integrar autenticación para que el cliente acceda a un panel editable.
- Mejorar el reproductor con lista de reproducción, orden aleatorio, etc.
- Añadir formulario de contacto con reserva de clase automática desde el calendario.

