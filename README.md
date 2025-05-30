
# 🎵 Proyecto Plataforma Artista & Profesor - Landing + Paneles Interactivos

Este proyecto fue desarrollado para un **profesor de batería** que buscaba una presencia online más moderna y flexible, tanto para su perfil profesional como artístico. La idea fue construir una **landing page visual y atractiva**, y dos **paneles separados**: uno orientado a su rol como **Profesor** y otro a su faceta como **Artista**, cada uno con navegación, estética y funcionalidades propias.

---

## ✨ Objetivos del cliente

- Una **landing page** clara, con presentación personal, llamados a la acción y acceso a ambos paneles (Profesor / Artista).
- Dos paneles internos con navegaciones diferenciadas:

### 🔸 Panel del Profesor

- Vista de calendario.
- Sección de clases disponibles.
- Recursos didácticos descargables.
- Testimonios de alumnos (con integración a Google Sheets y edición condicional).
- Estética sobria y profesional.

### 🔸 Panel del Artista

- Misma estructura general que el de profesor, pero con **diseño más expresivo**.
- Incluye una **radio personalizada** que ahora cuenta con **lista de reproducción**.
- Cada tema cargado en la radio es de autoría propia, respetando los derechos de uso.

- Todo el sitio debía ser **modular y fácilmente escalable**.
- Diseño **responsive**, visualmente atractivo y funcional en dispositivos móviles.

---

## 🧪 Tecnologías utilizadas

### 🔹 Next.js  
Framework basado en React que permite SSR y generación estática.

### 🔹 Next.js API Routes  
API Routes utilizadas como backend para manejar la lógica con **Google Sheets**, permitiendo operaciones CRUD desde el frontend.

### 🔹 TypeScript  
Tipado fuerte para mayor mantenibilidad y reducción de errores.

### 🔹 CSS Modules  
Estilos encapsulados por componente para separación clara entre los modos.

### 🔹 HTML5 Audio API  
Radio personalizada con **lista de reproducción dinámica** y controles avanzados.

### 🔹 Next/Image  
Optimización automática de imágenes para mejor performance.

### 🔹 Google Sheets API  
Gestión de testimonios. Los usuarios pueden editar o borrar solo sus propios testimonios gracias a `localStorage`.

### 🔹 Git + GitHub  
Control de versiones con ramas por funcionalidad.

---

## 🎨 Detalles de diseño

- **Navegación diferenciada** por panel:
  - Profesor: estilo sobrio (celeste oscuro).
  - Artista: estilo contrastante (negro con acentos llamativos).
- **Tarjetas de testimonios** con control condicional de edición/borrado según usuario.
- **Componentes reutilizables** para diseño y navegación.

---

## 🔐 Legalidad y propiedad de contenido

- Todos los temas musicales en la radio fueron grabados por el profesor en batería.
- No se usaron pistas protegidas por derechos de autor.
- El reproductor está limitado a contenido de autoría propia.

---

## 👨‍💻 Autor

Desarrollado por **Fernando Kaganovicz** como desarrollador freelance full stack. Me encargué del diseño visual, la lógica técnica, integración con servicios externos y adaptación basada en el feedback continuo del cliente.

---

## 🚀 Posibles mejoras futuras

- Incorporar CMS para gestión de contenidos.
- Añadir autenticación para un panel editable.
- Mejorar reproductor con funcionalidades como reproducción aleatoria o favoritos.
- Formulario con reserva automática de clase.

---
