import styles from './LandingPageProfessor.module.css';
import Image from 'next/image';

export default function LandingPageProfessor() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <Image
          src="/perfilProfessor.jpeg" // reemplazar con tu imagen
          alt="Profesor de batería"
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <div className={styles.textInfo}>
          <h1>Clases de Batería con Juan Manuel Belluschi</h1>
          <p>Aprendé batería desde cero o perfeccioná tu técnica con un enfoque personalizado.</p>
        </div>
      </div>

      <div className={styles.classDetails}>
        <h2>🎵 Detalles de las clases</h2>
        <ul>
          <li><strong>Modalidad:</strong> Presencial o a domicilio (zona norte o CABA).</li>
          <li><strong>Ubicación:</strong> Olivos, Buenos Aires</li>
          <li><strong>Días disponibles:</strong> Lunes a Sábado</li>
          <li><strong>Horarios:</strong> 10:00 a 20:00 hs</li>
          <li><strong>Precio:</strong> $7.500 por clase individual / $30000 mensual (4 clases)</li>
        </ul>
      </div>

      <div className={styles.cta}>
        <a href="#contacto" className={styles.ctaButton}>
          Agendá tu primera clase
        </a>
      </div>
    </section>
  );
}
