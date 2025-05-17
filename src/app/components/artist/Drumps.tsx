'use client';

import styles from './Drumps.module.css';

export default function Drumps() {
  return (
    <section className={styles.dumpsSection}>
      <div className={styles.content}>
        {/* <h2 className={styles.title}>Batería y otros Instrumentos</h2> */}
        <h2 className={styles.title}>Batería e instrumentos secundarios</h2>
        <p className={styles.description}>
          La batería es mi forma de expresión principal. 
          "Busco ser como un kiosco, teniendo a la mano diferentes recursos para aportar impronta y personalidad a los proyectos."
        </p>

        <div className={styles.block}>
          <h2>🎧 Estilo e Influencias</h2>
          <p>
            Mi enfoque combina diversos estilos entre los cuales destacan el rock progresivo, rock nacional e internacional, reggae moderno, clásico y blues.
            Me inspiran bateristas como John Bonjan, Juan Baratto o Phil Maturano.
          </p>
        </div>

        <div className={styles.block}>
          <h2>🥁 Set de Batería</h2>
          <ul className={styles.ul}>
            <li><strong>Batería:</strong> RMV (5 cuerpos)</li>
            <li><strong>Redoblante:</strong> Ludwig Supralite</li>
            <li><strong>Bombo:</strong> RMV 22"</li>
            <li><strong>Toms:</strong> RMV 10", 12", 14"(tom de piso)</li>
            <li><strong>Platos:</strong> Zildjian A custom 14", Stug DH exotic midium Crash 17", Stung Furia 20", Hihat 14" MainL classic custom, Splash MainL classic custom 10"</li>
            <li><strong>Parches:</strong> Remo Emperor, Remo Control Sound</li>
            {/* <li><strong>Micrófonos:</strong> Shure SM57 + Beta 52A</li> */}
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
