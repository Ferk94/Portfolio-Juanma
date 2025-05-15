// components/AboutSection.tsx
"use client";

import styles from "./About.module.css";

export default function AboutSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Sobre mí</h2>
      <p className={styles.intro}>
        Soy Juan Manuel Belluschi, profesor de batería con más de 2 años de experiencia formando bateristas de todas las edades.
      </p>

      <div className={styles.content}>
        <div className={styles.block}>
          <h3>🎓 Formación y experiencia</h3>
          <p>
            Estudié en la Escuela de Música de Buenos Aires <a href="https://www.emba.com.ar/" target="_blank" rel="noopener noreferrer">(EMBA)</a>.
            Durante mi carrera he tocado en proyectos de rock, jazz y música latinoamericana, tanto en vivo como en estudio.
          </p>
        </div>

        <div className={styles.block}>
          <h3>🥁 Enfoque en las clases</h3>
          <p>
            Las clases están pensadas para que aprendas desde el primer día, con un enfoque práctico y adaptado a tus objetivos.
            Trabajo técnica, lectura, independencia y musicalidad en cada encuentro.
          </p>
        </div>

        <div className={styles.block}>
          <h3>🌟 Filosofía</h3>
          <p>
            Creo firmemente que cualquiera puede aprender a tocar un instrumento con la guía adecuada, motivación y práctica.
            Mi objetivo es acompañarte en ese camino, con paciencia y compromiso.
          </p>
        </div>
      </div>
    </section>
  );
}
