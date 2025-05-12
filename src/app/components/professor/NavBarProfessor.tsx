import styles from "./NavBarProfessor.module.css";

interface Props {
  onSectionChange: (section: string) => void;
}

export default function NavBarProfessor({ onSectionChange }: Props) {
  return (
    <nav className={styles.navBar}>
      <button className={styles.button} onClick={() => onSectionChange("calendar")}>Calendario</button>
      <button className={styles.button} onClick={() => onSectionChange("classes")}>Clases</button>
      <button className={styles.button} onClick={() => onSectionChange("resources")}>Recursos</button>
      <button className={styles.button} onClick={() => onSectionChange("testimonials")}>Testimonios</button>
    </nav>
  );
}






