import { useState } from 'react';
import styles from './NavBarArtist.module.css';
import HouseIcon from '@/public/houseIcon.jpeg';
import Image from 'next/image';
import { FiMenu, FiX } from "react-icons/fi";

interface Props {
  onSectionChange: (section: string) => void;
}

export default function NavBarArtist({ onSectionChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'songs', label: '🎵 Temas' },
    { id: 'Drumps', label: '🥁 Batería' },
    { id: 'bands', label: '🎤 Bandas' },
    {id: 'shows', label: '🎸 Shows'}
  ];

  const handleClick = (id: string) => {
    onSectionChange(id);
    setIsOpen(false); // cerrar menú al hacer clic
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <button className={styles.navButtonHome} onClick={() => onSectionChange('landing page')}>
          <Image
            src={HouseIcon}
            alt="landing page"
            className={styles.houseIcon}
            width={40}
            height={40}
          />
        </button>
      </div>
      {/* <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div> */}

      {/* Ícono hamburguesa (solo en mobile) */}
      <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={28} color="#fff" /> : <FiMenu size={28} color="#fff" />}
      </div>

      <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className={styles.navButton}
          >
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
