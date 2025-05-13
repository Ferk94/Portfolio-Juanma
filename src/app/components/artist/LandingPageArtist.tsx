import styles from './LandingPageArtist.module.css';

export default function LandingPageArtist() {
  return (
    <section className={styles.container}>
      <div className={styles.backgroundOverlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>Modo Artista</h1>
        <p className={styles.subtitle}>
          Tu espacio para compartir música, solos y tus bandas favoritas.
        </p>

        <div className={styles.buttons}>
          <button className={styles.cta}>🎶 Subí tu música</button>
          <button className={styles.ctaOutline}>👥 Explorar artistas</button>
        </div>
      </div>
    </section>
  );
}
