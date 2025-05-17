// /components/professor/ContentProfessor.tsx
import React from "react";
import styles from './ContentProfessor.module.css';
// import CalendarView from "./CalendarView"; 
import Classes from "./Classes"; // Componente de clases disponibles
import Resources from "./Resources"; // Componente de recursos educativos
import Testimonials from "./Testimonials"; // Componente de testimonios
import About from "./About" // componente de Sobre Mí
import LandingPageProfessor from "./LandingPageProfessor"

interface ContentProfessorProps {
  activeSection: string; // Prop para saber qué sección renderizar
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const ContentProfessor: React.FC<ContentProfessorProps> = ({ activeSection, setActiveSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      // case "calendar":
      //   return <CalendarView />;
      case "classes":
        return <Classes />;
      case "resources":
        return <Resources />;
      case "testimonials":
        return <Testimonials />;
      case "about":
        return <About />;
      default:
        return <LandingPageProfessor setActiveSection={setActiveSection}/>
    }
  };

  return (
    <section className={styles.container}>
      {/* <h2>Bienvenidos!</h2>
      <p>Consultá precios, horarios y agendá directamente tu primer clase!.</p> */}
      {renderSection()}
    </section>
  );
};

export default ContentProfessor;



