"use client";

import { useState } from "react";
import NavBarProfessor from "./NavBarProfessor";
// import IntroProfessor from "./IntroProfessor";
import ContentProfessor from "./ContentProfessor";
import styles from "./ProfessorView.module.css";
import WhatsAppButton from './buttons/WhatsAppButton'

export default function ProfessorView() {
  const [activeSection, setActiveSection] = useState("landing page");

  return (
    <div >
      <NavBarProfessor onSectionChange={setActiveSection} />
      {/* <IntroProfessor /> */}
      <div className={styles.content}>
        <WhatsAppButton></WhatsAppButton>
        <ContentProfessor activeSection={activeSection} />
      </div>
    </div>
  );
}


