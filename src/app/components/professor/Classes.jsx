// components/ClassesSection.tsx
"use client";

import styles from "./Classes.module.css";

export default function Classes() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Clases de Batería</h2>

      <div className={styles.contentWrapper}>
        <div className={styles.classDetails}>
          <h3 className={styles.subtitle}>Detalles de las clases</h3>
          <ul>
            <li><strong>Modalidad:</strong> Presencial</li>
            <li><strong>Ubicación:</strong> Olivos, Buenos Aires</li>
            <li><strong>Días disponibles:</strong> Lunes a Viernes</li>
            <li><strong>Horarios:</strong> 11:00 a 20:00 hs</li>
            <li><strong>Precio:</strong> $12.000 por clase individual / $45.000 mensual (4 clases)</li>
          </ul>

          <div className={styles.cta}>
            <a
              href="https://wa.me/5491128778436"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Agendá tu primera clase
            </a>
          </div>
        </div>

        <div className={styles.videoWrapper}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // video random por ahora
            title="Video de presentación"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
