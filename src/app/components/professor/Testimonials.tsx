// components/Testimonials.tsx
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>Testimonios de Alumnos</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <p className={styles.text}>
            “Juan es un excelente profesor, muy paciente y didáctico. Siempre tiene nuevas estrategias para que uno pueda absorver lo aprendido.”
          </p>
          <p className={styles.author}>— Fernando, alumno desde 2020</p>
        </div>
        <div className={styles.card}>
          <p className={styles.text}>
            “Me ayudó a pulir mi técnica y encontrar un estilo propio. Las clases siempre son motivadoras.”
          </p>
          <p className={styles.author}>— Alberto, alumno desde 2021</p>
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
