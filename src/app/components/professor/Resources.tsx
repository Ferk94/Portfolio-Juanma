import React from "react";
import styles from "./Resources.module.css";

const Resources: React.FC = () => {
  return (
    <section className={styles.resourcesSection}>
      <h2 className={styles.title}>Recursos Educativos</h2>

      <div className={styles.resourceCard}>
        <h3>📄 PDF: Introducción a la Batería</h3>
        <p>Descargá una guía para empezar con lo básico de la batería.</p>
        <a
          href="/pdf/introduccion-bateria.pdf"
          download
          className={styles.downloadButton}
        >
          Descargar PDF
        </a>
      </div>

      <div className={styles.resourceCard}>
        <h3>🎥 Video: Elementos que conforman la Batería</h3>
        <p>Un video corto para reconocer cada elemento y sus respectivos sonidos.</p>
        <iframe
          width="100%"
          height="315"
          src="https://youtube.com/embed/3oVT55Lg5y8" // 
          title="Video de Técnica"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.resourceCard}>
        <h3>📘 Libro Gratuito Recomendado</h3>
        <p>Lectura recomendada para todos los niveles.</p>
        <a
          href="https://www.balmacedartejoven.cl/site/wp-content/uploads/2020/04/Libro_Metodo-Manuel-Paez-Franco.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadButton}
        >
          Ver libro
        </a>
      </div>
    </section>
  );
};

export default Resources;

