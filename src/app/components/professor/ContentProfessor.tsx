// /components/professor/ContentProfessor.tsx
import React from "react";
// import CalendarComponent from "./Calendar"; // Componente de calendario
// import AvailableClasses from "./AvailableClasses"; // Componente de clases disponibles
import Resources from "./Resources"; // Componente de recursos educativos
import Testimonials from "./Testimonials"; // Componente de testimonios

interface ContentProfessorProps {
  activeSection: string; // Prop para saber qué sección renderizar
}

const ContentProfessor: React.FC<ContentProfessorProps> = ({ activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case "calendar":
        // return <CalendarComponent />;
        return 'por ahora calendar'
      case "classes":
        // return <AvailableClasses />;
        return 'por ahora clases'
      case "resources":
        return <Resources />;
      case "testimonials":
        return <Testimonials />;
      default:
        // return <CalendarComponent />;
        return 'por ahora calendar'
    }
  };

  return (
    <section>
      <h2>Bienvenido Profesor</h2>
      <p>Este es el área donde los profesores pueden gestionar su contenido.</p>
      {renderSection()}
    </section>
  );
};

export default ContentProfessor;



