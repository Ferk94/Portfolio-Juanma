// /components/artist/ContentArtist.tsx
import React from "react";
import LandingPageArtist from "./LandingPageArtist";
import Songs from "./Songs";              
import Drumps from "./Drumps";    
import Bands from "./Bands";
import Shows from "./Shows";
import styles from "./ContentArtist.module.css";

interface ContentArtistProps {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const ContentArtist: React.FC<ContentArtistProps> = ({ activeSection, setActiveSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case "songs":
        return <Songs />;
      case "Drumps":
        return <Drumps />;
      case "bands":
        return <Bands />;
      case "shows":
        return <Shows />;
      case "landing page":
        return <LandingPageArtist setActiveSection={setActiveSection}/>;
      default:
        return <LandingPageArtist setActiveSection={setActiveSection} />;
    }
  };

  return (
    <section className={styles.container}>
      {renderSection()}
    </section>
  );
};

export default ContentArtist;
