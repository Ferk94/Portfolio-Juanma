// components/Testimonials.tsx
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>Testimonios de Alumnos</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <p className={styles.text}>
            “Juan es un excelente profesor, muy paciente y didáctico. Aprendí más en 2 meses con él que en un año solo.”
          </p>
          <p className={styles.author}>— Martín, alumno desde 2023</p>
        </div>
        <div className={styles.card}>
          <p className={styles.text}>
            “Me ayudó a pulir mi técnica y encontrar un estilo propio. Las clases siempre son motivadoras.”
          </p>
          <p className={styles.author}>— Camila, baterista intermedia</p>
        </div>
        <div className={styles.card}>
          <p className={styles.text}>
            “Gracias a Juan me animé a tocar en vivo por primera vez. Súper recomendable como profe y persona.”
          </p>
          <p className={styles.author}>— Leo, alumno desde 2022</p>
        </div>
      </div>
    </section>
  );
}
