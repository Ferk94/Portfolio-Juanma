// /components/professor/ContentProfessor.tsx
import React from "react";
import styles from './ContentProfessor.module.css';
import CalendarView from "./CalendarView"; // Componente de calendario
import Classes from "./Classes"; // Componente de clases disponibles
import Resources from "./Resources"; // Componente de recursos educativos
import Testimonials from "./Testimonials"; // Componente de testimonios
import LandingPageProfessor from "./LandingPageProfessor"

interface ContentProfessorProps {
  activeSection: string; // Prop para saber qué sección renderizar
}

const ContentProfessor: React.FC<ContentProfessorProps> = ({ activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case "calendar":
        return <CalendarView />;
      case "classes":
        return <Classes />;
        // return 'por ahora clases'
      case "resources":
        return <Resources />;
      case "testimonials":
        return <Testimonials />;
      default:
        // return <CalendarComponent />;
        return <LandingPageProfessor/>
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



