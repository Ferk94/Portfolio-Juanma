"use client";

import { useState } from "react";
import ViewToggle from "./ViewToggle";
import ProfessorView from "./professor/ProfessorView";
import ArtistView from "./artist/ArtistView";

export default function HomePage() {
  const [modo, setModo] = useState<"professor" | "artist">("professor");

  return (
    <main>
      <ViewToggle modo={modo} setModo={setModo} />

      {modo === "professor" ? <ProfessorView /> : <ArtistView />}
    </main>
  );
}
