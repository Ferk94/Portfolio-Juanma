import styles from "./LandingPageProfessor.module.css"

// interface ContentProfessorProps {
//   activeSection: string; // Prop para saber qué sección renderizar
// }

const LandingPageProfessor = () => {
  

  return (
    <section className={styles.section}>
      <h2 className={styles.parrafo}>Bienvenidos!</h2>
      
      <p>Consultá precios, horarios y agendá directamente tu primer clase!.</p>
    </section>
  );
};

export default LandingPageProfessor;