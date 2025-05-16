"use client";

import styles from "./Bands.module.css";

const bands = [
  {
    name: "Los Rítmicos",
    role: "Baterista principal (2018 - 2021)",
    description:
      "Participé en giras nacionales, grabaciones de estudio y múltiples festivales. Fusión de rock y jazz. Experiencia clave para mi desarrollo en vivo.",
  },
  {
    name: "Groove Machine",
    role: "Baterista sesionista (2021 - 2022)",
    description:
      "Colaboré en sesiones de grabación y tocatas en vivo. Proyecto de funk instrumental con músicos reconocidos de la escena local.",
  },
  {
    name: "Proyecto Belluschi",
    role: "Proyecto personal (2023 - Presente)",
    description:
      "Trabajo en composiciones propias, explorando el lado creativo y experimental de la batería como eje central del sonido.",
  },
];

export default function Bands() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Bandas y Proyectos</h2>
      <p className={styles.description}>
        A lo largo de los años, tuve el placer de formar parte de proyectos musicales diversos que enriquecieron mi experiencia como baterista.
      </p>
      <div className={styles.bandList}>
        {bands.map((band, index) => (
          <div key={index} className={styles.bandCard}>
            <h3 className={styles.bandName}>{band.name}</h3>
            <p className={styles.role}>{band.role}</p>
            <p className={styles.text}>{band.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
