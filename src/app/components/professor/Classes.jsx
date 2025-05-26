// components/ClassesSection.tsx
"use client";

import styles from "./Classes.module.css";
import { FaMapMarkerAlt, FaClock, FaCalendarAlt, FaMoneyBillAlt, FaChalkboardTeacher } from "react-icons/fa";

export default function Classes() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Clases de Batería</h2>

      <div className={styles.grid}>
        <div className={styles.details}>
          <h3 className={styles.subtitle}>Detalles de las clases</h3>
          <div className={styles.cards}>
            <div className={styles.card}><FaChalkboardTeacher /> <span><strong>Modalidad:</strong> Presencial</span></div>
            <div className={styles.card}><FaMapMarkerAlt /> <span><strong>Ubicación:</strong> Olivos, Buenos Aires</span></div>
            <div className={styles.card}><FaCalendarAlt /> <span><strong>Días:</strong> Lunes a Viernes</span></div>
            <div className={styles.card}><FaClock /> <span><strong>Horario:</strong> 11:00 a 20:00 hs</span></div>
            <div className={styles.card}><FaMoneyBillAlt /> <span><strong>Precio:</strong> $12.000 / clase - $45.000 mensual</span></div>
          </div>

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
          <h3 className={styles.subtitle}>Mirá una clase en acción</h3>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
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
