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
            “Es muy buena onda, a la hora de enseñar se le entiende cada palabra, le pone mucha energía a las clases y tiene mucha habilidad para tocar. 10/10”
          </p>
          <p className={styles.author}>— Juan, ex alumno</p>
        </div>
      </div>
    </section>
  );
}
