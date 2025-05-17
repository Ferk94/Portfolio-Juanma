import styles from './LandingPageArtist.module.css';


interface LandingPageArtistProps {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}


const LandingPageArtist: React.FC<LandingPageArtistProps> = ({setActiveSection}) => {
  return (
    <section className={styles.container}>
      <div className={styles.backgroundOverlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>Modo Artista</h1>
        <p className={styles.subtitle}>
          El espacio donde comparto música, shows y mis composiciones.
        </p>

        <div className={styles.buttons}>
          <button className={styles.cta} onClick={() => setActiveSection('songs')}>🎶 Composiciones</button>
          <button className={styles.ctaOutline} onClick={() => setActiveSection('shows')}>👥 Explorar Shows</button>
        </div>
      </div>
    </section>
  );
}

export default LandingPageArtist;
