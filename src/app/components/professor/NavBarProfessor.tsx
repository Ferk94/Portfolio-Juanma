import styles from "./NavBarProfessor.module.css";
import Image from "next/image";
import HouseIcon from '@/public/houseIcon.jpeg'

interface Props {
  onSectionChange: (section: string) => void;
}

export default function NavBarProfessor({ onSectionChange }: Props) {
  return (
    <nav className={styles.navBar}>
      <button className={styles.button} onClick={() => onSectionChange("landing page")}>
        <Image
          src={HouseIcon}
          alt="landing page"
          width={50} // Ajustá el tamaño como prefieras
          height={50}
      />
      </button>
      <button className={styles.button} onClick={() => onSectionChange("calendar")}>Calendario</button>
      <button className={styles.button} onClick={() => onSectionChange("classes")}>Clases</button>
      <button className={styles.button} onClick={() => onSectionChange("resources")}>Recursos</button>
      <button className={styles.button} onClick={() => onSectionChange("testimonials")}>Testimonios</button>
    </nav>
  );
}






