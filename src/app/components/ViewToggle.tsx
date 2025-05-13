// /components/ViewToggle.tsx
import styles from "./ViewToggle.module.css"
import React from "react";
import Image from "next/image";
import IconDrumsVector from '@/public/drumps.svg'
import GraduationIcon from '@/public/graduation.svg'

// Definir el tipo de las props de ViewToggle
interface ViewToggleProps {
  modo: "professor" | "artist"; // Definimos que "modo" puede ser solo "professor" o "artist"
  setModo: React.Dispatch<React.SetStateAction<"professor" | "artist">>; // Tipo correcto para setModo
}

const ViewToggle: React.FC<ViewToggleProps> = ({ modo, setModo }) => {
  return (
    <div className={styles.container}>
      
        <button onClick={() => setModo(modo === "professor" ? "artist" : "professor")}
              className={styles.button}
            >
        {/* Cambiar a {modo === "professor" ? "Artista" : "Profesor"} */}
        {
          modo === "professor" ? <Image
          src={IconDrumsVector}
          alt="Cambiar modo"
          width={50} // Ajustá el tamaño como prefieras
          height={50}
        /> : 
          <Image
            src={GraduationIcon}
            alt="Cambiar modo"
            width={50} // Ajustá el tamaño como prefieras
            height={50}
          />
        }
        
        </button>
    </div>
  );
};

export default ViewToggle;