"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./LandingPageProfessor.module.css";
import { useRef } from "react";
import ParticlesBackground from "./animations/ParticlesBackground"; // ruta según tu estructura

interface LandingPageProfessorProps {
  setActiveSection: any;
}

 const LandingPageProfessor: React.FC<LandingPageProfessorProps> = ({setActiveSection}) => {
  const exploreRef = useRef<HTMLElement>(null);

  const handleExploreClick = () => {
    exploreRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
  <ParticlesBackground />
  <section className={styles.landingContainer}>
    {/* el resto del contenido */}
      {/* HERO animado */}
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/perfilProfessor.jpeg"
          alt="Profesor de batería"
          width={280}
          height={280}
          className={styles.heroImage}
        />
        <div className={styles.text}>
          <h1>Juan Manuel Belluschi</h1>
          <p>Clases de batería con pasión y técnica</p>
          <button onClick={() => setActiveSection('classes')} className={styles.ctaButton}>
            Explorar Clases
          </button>
        </div>
      </motion.div>

      {/* SECCIÓN EXPLORAR */}
      <section ref={exploreRef} className={styles.explorar}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explorá el mundo de la batería
        </motion.h2>

        <div className={styles.benefitGrid}>
          <motion.div
            className={styles.benefitCard}
            whileHover={{ scale: 1.05 }}
          >
            🥁 Técnica para todos los niveles
          </motion.div>
          <motion.div
            className={styles.benefitCard}
            whileHover={{ scale: 1.05 }}
          >
            🎧 Adaptado a tu estilo
          </motion.div>
          <motion.div
            className={styles.benefitCard}
            whileHover={{ scale: 1.05 }}
          >
            🎼 Ejercicios prácticos
          </motion.div>
        </div>
      </section>
  </section>
</>

    
  );
}

export default LandingPageProfessor;