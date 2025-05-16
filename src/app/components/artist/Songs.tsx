'use client';

import styles from './Songs.module.css';

export default function Songs() {
  return (
    <section className={styles.temasSection}>
      <div className={styles.content}>
        <p className={styles.intro}>
          Además de interpretar, compongo música instrumental con fuerte raíz rítmica y atmósferas experimentales. Cada tema busca contar una historia.
        </p>

        <div className={styles.tema}>
          <h2>🌊 "Corrientes Internas"</h2>
          <p>
            Una pieza que mezcla compases irregulares con texturas ambientales. Nació en cuarentena y representa el caos interno frente a lo incierto.
          </p>
          <span className={styles.detalles}>Género: Jazz Fusión / Duración: 4:33</span>
        </div>

        <div className={styles.tema}>
          <h2>🌌 "Tránsito Estelar"</h2>
          <p>
            Composición minimalista centrada en la repetición y la evolución de patrones. Inspirada en los ciclos de la naturaleza y el tiempo.
          </p>
          <span className={styles.detalles}>Género: Experimental / Duración: 5:12</span>
        </div>

        <div className={styles.tema}>
          <h2>🔥 "Pulso Crudo"</h2>
          <p>
            Tema cargado de groove y agresividad, con influencias del rock alternativo y el funk progresivo. Ideal para sesiones en vivo.
          </p>
          <span className={styles.detalles}>Género: Groove Rock / Duración: 3:47</span>
        </div>

        <div className={styles.cta}>
          <a href="mailto:juanmanuel@example.com">📩 Consultá para escuchar demos</a>
        </div>
      </div>
    </section>
  );
}
