import styles from "./Classes.module.css";

export default function Classes() {
  return (
    <section className={styles.container}>
      <h2>Clases de Batería</h2>

      <p>
        Ofrezco clases personalizadas de batería para todos los niveles. Las clases están
        disponibles de <strong>lunes a domingo</strong>, con <strong>horarios a convenir</strong>.
      </p>

      <ul className={styles.schedule}>
        <li><strong>Lunes a Viernes:</strong> 10:00 - 20:00 hs</li>
        <li><strong>Sábados y Domingos:</strong> 11:00 - 18:00 hs</li>
      </ul>

      <div className={styles.videoContainer}>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video ilustrativo"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
