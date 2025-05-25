import styles from "./FooterFerk.module.css";
import React from "react";

const FooterFerk = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        Desarrollado por{" "}
        <a
          href="https://portfolio-2024-green-seven.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ferk Lamar
        </a>{" "}
        | &copy; {currentYear} - Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default FooterFerk;
