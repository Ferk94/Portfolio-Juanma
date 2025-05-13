import styles from './NavBarArtist.module.css';

interface Props {
  onSectionChange: (section: string) => void;
}

export default function NavBarArtist({ onSectionChange }: Props) {
  const sections = [
    { id: 'songs', label: '🎵 Temas' },
    { id: 'solos', label: '🎸 Solos' },
    { id: 'Drumps', label: '🥁 Batería' },
    { id: 'bands', label: '🎤 Bandas' },
  ];

  return (
    <nav className={styles.navbar}>
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionChange(section.id)}
          className={styles.navButton}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
}
