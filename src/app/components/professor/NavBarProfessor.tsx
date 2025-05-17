import { useState } from "react";
import styles from "./NavBarProfessor.module.css";
import Image from "next/image";
import HouseIcon from '@/public/houseIcon.jpeg';
import { FiMenu, FiX } from "react-icons/fi";

interface Props {
  onSectionChange: (section: string) => void;
}

export default function NavBarProfessor({ onSectionChange }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSectionChange = (section: string) => {
    onSectionChange(section);
    setIsMenuOpen(false); // Cierra el menú
  };

  return (
    <nav className={styles.navBar}>
      {/* Botón de inicio a la izquierda */}
      <div className={styles.leftSection}>
        <button className={styles.navButtonHome} onClick={() => handleSectionChange('landing page')}>
          <Image
            src={HouseIcon}
            alt="landing page"
            className={styles.houseIcon}
            width={40}
            height={40}
          />
        </button>
      </div>

      {/* Ícono hamburguesa (solo en mobile) */}
      <div className={styles.menuIcon} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FiX size={28} color="#fff" /> : <FiMenu size={28} color="#fff" />}
      </div>

      {/* Botones del centro (desktop o menú mobile abierto) */}
      <div className={`${styles.centerSection} ${isMenuOpen ? styles.open : ""}`}>
        {/* <button className={styles.navButton} onClick={() => handleSectionChange("calendar")}>Calendario</button> */}
        <button className={styles.navButton} onClick={() => handleSectionChange("classes")}>Clases</button>
        <button className={styles.navButton} onClick={() => handleSectionChange("resources")}>Recursos</button>
        <button className={styles.navButton} onClick={() => handleSectionChange("testimonials")}>Testimonios</button>
        <button className={styles.navButton} onClick={() => handleSectionChange("about")}>Sobre Mí</button>
      </div>
    </nav>
  );
}
