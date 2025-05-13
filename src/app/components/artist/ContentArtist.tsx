// /components/artist/ContentArtist.tsx
import React from "react";
import LandingPageArtist from "./LandingPageArtist"; // Landing por defecto
import Songs from "./Songs";         // Tus temas
import Solos from "./Solos";        // Tus solos
import Drumps from "./Drumps";       // Batería
import Bands from "./Bands";         // Bandas
import styles from "./ContentArtist.module.css";

interface ContentArtistProps {
  activeSection: string;
}

const ContentArtist: React.FC<ContentArtistProps> = ({ activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case "songs":
        return <Songs />;
      case "solos":
        return <Solos />;
      case "Drumps":
        return <Drumps />;
      case "bands":
        return <Bands />;
      case "landing page":
        return <LandingPageArtist/>;
      default:
        return <LandingPageArtist />;
    }
  };

  return (
    <section className={styles.container}>
      {renderSection()}
    </section>
  );
};

export default ContentArtist;
