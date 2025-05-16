'use client';

import styles from './Drumps.module.css';

export default function Drumps() {
  return (
    <section className={styles.dumpsSection}>
      <div className={styles.content}>
        <p className={styles.intro}>
          La batería es mi forma de expresión principal. Busco siempre aportar groove, musicalidad y personalidad a cada proyecto en el que participo.
        </p>

        <div className={styles.block}>
          <h2>🎧 Estilo e Influencias</h2>
          <p>
            Mi enfoque combina elementos del rock progresivo, jazz moderno y música experimental.
            Me inspiran bateristas como Gavin Harrison, Nate Smith y Jojo Mayer.
          </p>
        </div>

        <div className={styles.block}>
          <h2>🥁 Set de Batería</h2>
          <ul className={styles.ul}>
            <li><strong>Batería:</strong> Pearl Masters Maple Complete</li>
            <li><strong>Platos:</strong> Meinl Byzance</li>
            <li><strong>Caja:</strong> Ludwig Supraphonic</li>
            <li><strong>Parches:</strong> Remo Emperor Coated</li>
            <li><strong>Micrófonos:</strong> Shure SM57 + Beta 52A</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>🎙️ Colaboraciones</h2>
          <p>
            Actualmente estoy abierto a trabajar en sesiones de grabación, shows en vivo, giras o producciones a distancia.
            Siempre estoy en busca de proyectos que valoren la musicalidad y la exploración sonora.
          </p>
        </div>

        <div className={styles.cta}>
          <a href="mailto:juanmanuel@example.com">📩 Contactame para colaborar</a>
        </div>
      </div>
    </section>
  );
}
