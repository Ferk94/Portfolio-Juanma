// /components/FooterProfessor.tsx
import styles from "./FooterProfessor.module.css";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const FooterProfessor = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>© 2025 Juan Manuel Belluschi - Baterista Profesional</p>
      <div className={styles.icons}>
        <a
          href="https://www.instagram.com/bata_alpalo/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/juan-manuel-belluschi-134389a3/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.youtube.com/@juanmanuelbelluschi5145"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default FooterProfessor;
