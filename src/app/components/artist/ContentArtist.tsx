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
}

const ContentArtist: React.FC<ContentArtistProps> = ({ activeSection }) => {
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
