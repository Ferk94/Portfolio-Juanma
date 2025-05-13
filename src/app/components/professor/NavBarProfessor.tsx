import styles from "./NavBarProfessor.module.css";
import Image from "next/image";
import HouseIcon from '@/public/houseIcon.jpeg'

interface Props {
  onSectionChange: (section: string) => void;
}

export default function NavBarProfessor({ onSectionChange }: Props) {
  return (
    <nav className={styles.navBar}>
      {/* Botón de inicio alineado a la izquierda */}
      <div className={styles.leftSection}>
        <button className={styles.navButton} onClick={() => onSectionChange("landing page")}>
          <Image
            src={HouseIcon}
            alt="landing page"
            width={40}
            height={40}
          />
        </button>
      </div>

      {/* Botones del centro */}
      <div className={styles.centerSection}>
        <button className={styles.navButton} onClick={() => onSectionChange("calendar")}>Calendario</button>
        <button className={styles.navButton} onClick={() => onSectionChange("classes")}>Clases</button>
        <button className={styles.navButton} onClick={() => onSectionChange("resources")}>Recursos</button>
        <button className={styles.navButton} onClick={() => onSectionChange("testimonials")}>Testimonios</button>
      </div>
    </nav>
  );
}
