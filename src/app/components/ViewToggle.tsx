// /components/ViewToggle.tsx
import styles from "./ViewToggle.module.css"
import React from "react";

// Definir el tipo de las props de ViewToggle
interface ViewToggleProps {
  modo: "professor" | "artist"; // Definimos que "modo" puede ser solo "professor" o "artist"
  setModo: React.Dispatch<React.SetStateAction<"professor" | "artist">>; // Tipo correcto para setModo
}

const ViewToggle: React.FC<ViewToggleProps> = ({ modo, setModo }) => {
  return (
    <div>
      <button onClick={() => setModo(modo === "professor" ? "artist" : "professor")}
              className={styles.button}
            >
        Cambiar a {modo === "professor" ? "Artista" : "Profesor"}
      </button>
    </div>
  );
};

export default ViewToggle;