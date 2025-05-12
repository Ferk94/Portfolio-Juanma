"use client";

import { useState } from "react";
import NavBarArtist from "./NavBarArtist";
import ContentArtist from "./ContentArtist";

export default function ArtistView() {
  const [activeSection, setActiveSection] = useState("calendar");

  return (
    <>
      <NavBarArtist onSectionChange={setActiveSection} />
      <ContentArtist activeSection={activeSection} />
    </>
  );
}

