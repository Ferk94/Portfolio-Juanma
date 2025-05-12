interface Props {
  onSectionChange: (section: string) => void;
}

export default function NavBarArtist({ onSectionChange }: Props) {
  return (
    <nav>
      <button onClick={() => onSectionChange("songs")}>Temas</button>
      <button onClick={() => onSectionChange("solos")}>Solos</button>
      <button onClick={() => onSectionChange("Drumps")}>Bateria</button>
      <button onClick={() => onSectionChange("bands")}>Bandas</button>
    </nav>
  );
}
