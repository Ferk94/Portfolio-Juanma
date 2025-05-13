import styles from "./FooterFerk.module.css";
import React from "react";

const FooterFerk = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Sitio desarrollado por{" "}
        <a
          href="https://portfolio-2024-green-seven.vercel.app" // Cambiá por tu web o LinkedIn
          target="_blank"
          rel="noopener noreferrer"
        >
          Ferk Lamar
        </a>{" "}
        🚀 | Todos los derechos reservados
      </p>
    </footer>
  );
};

export default FooterFerk;
