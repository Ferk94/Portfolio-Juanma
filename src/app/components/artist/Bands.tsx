"use client";

import styles from "./Bands.module.css";

const bands = [
  {
    name: "Santi Attadia y lex equilibristas",
    role: "Baterista principal (2022 - presente)",
    description:
      "Colaboré en sesiones de grabación y Shows en vivo, siempre con temas compuestos por Santiago",
  },
  {
    name: "Anael",
    role: "Baterista (2020 - 2022)",
    description:
      "Colaboré en sesiones de grabación y tocatas en vivo. Proyecto de rock progresivo con músicos reconocidos de la escena local.",
  },
  {
    name: "Jona's Band",
    role: "Baterista (2014 - 2014)",
    description:
      "Colaboré en sesiones de grabación tocando temas del lider. ",
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
            <p className={styles.role}><strong>{band.role}</strong></p>
            <p className={styles.text}>{band.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
