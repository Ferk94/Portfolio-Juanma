"use client";

import styles from "./Shows.module.css";

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Show en The Roxy",
  },
  {
    id: "3JZ_D3ELwOQ",
    title: "Presentación en Café Vinilo",
  },
  {
    id: "L_jWHffIx5E",
    title: "Jam session en vivo",
  },
  {
    id: "eY52Zsg-KVI",
    title: "Ensayo en estudio",
  },
  {
    id: "9bZkp7q19f0",
    title: "Festival al aire libre",
  },
  {
    id: "oHg5SJYRHA0",
    title: "Concierto íntimo en sala",
  },
];


export default function Shows() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Presentaciones en Vivo</h2>
      <p className={styles.description}>
        Algunas grabaciones de shows donde participé como baterista. ¡Gracias al público por la energía!
      </p>
      <div className={styles.grid}>
        {videos.map((video) => (
          <div key={video.id} className={styles.videoWrapper}>
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className={styles.videoTitle}>{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
