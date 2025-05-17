"use client";

import RadioPlayer from '../artist/radioPlayer/RadioPlayer';

import { useState } from "react";
import NavBarArtist from "./NavBarArtist";
import ContentArtist from "./ContentArtist";

export default function ArtistView() {
  const [activeSection, setActiveSection] = useState("calendar");

  return (
    <div className="min-h-screen relative bg-[#121212] text-white">
      <NavBarArtist onSectionChange={setActiveSection} />
      <ContentArtist activeSection={activeSection} setActiveSection={setActiveSection} />
      <RadioPlayer/>
    </div>
  );
}

