import styles from "./ViewToggle.module.css"
import React from "react";
import Image from "next/image";
import IconDrumsVector from '@/public/drumps.svg'
import GraduationIcon from '@/public/graduation.svg'

interface ViewToggleProps {
  modo: "professor" | "artist";
  setModo: React.Dispatch<React.SetStateAction<"professor" | "artist">>;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ modo, setModo }) => {
  return (
    <div className={styles.container}>
      
        <button onClick={() => setModo(modo === "professor" ? "artist" : "professor")}
              className={modo === "professor" ? styles.button : styles.button2}
            >
        {/* Cambiar a {modo === "professor" ? "Artista" : "Profesor"} */}
        {
          modo === "professor" ? <Image
          src={IconDrumsVector}
          alt="Cambiar modo"
          width={50}
          height={50}
        /> : 
          <Image
            src={GraduationIcon}
            alt="Cambiar modo"
            width={50}
            height={50}
          />
        }
        
        </button>
    </div>
  );
};

export default ViewToggle;