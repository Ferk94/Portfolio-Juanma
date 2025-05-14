import { useState } from 'react';
import styles from './NavBarArtist.module.css';

interface Props {
  onSectionChange: (section: string) => void;
}

export default function NavBarArtist({ onSectionChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'songs', label: '🎵 Temas' },
    { id: 'solos', label: '🎸 Solos' },
    { id: 'Drumps', label: '🥁 Batería' },
    { id: 'bands', label: '🎤 Bandas' },
  ];

  const handleClick = (id: string) => {
    onSectionChange(id);
    setIsOpen(false); // cerrar menú al hacer clic
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
        ☰
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
