"use client";

import { useState } from "react";
import NavBarProfessor from "./NavBarProfessor";
// import IntroProfessor from "./IntroProfessor";
import ContentProfessor from "./ContentProfessor";
import styles from "./ProfessorView.module.css";

export default function ProfessorView() {
  const [activeSection, setActiveSection] = useState("calendar");

  return (
    <div >
      <NavBarProfessor onSectionChange={setActiveSection} />
      {/* <IntroProfessor /> */}
      <div className={styles.content}>
        <ContentProfessor activeSection={activeSection} />
      </div>
    </div>
  );
}


