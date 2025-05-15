"use client";

import Particles from "react-tsparticles";
import type { ISourceOptions } from "tsparticles-engine";

export default function ParticlesBackground() {
  const options: ISourceOptions = {
    fullScreen: {
      enable: true,
      zIndex: -1, // Importante
    },
    background: {
      color: { value: "#f7e7da" },
    },
    particles: {
      number: { value: 40 },
      size: { value: 3 },
      move: { enable: true, speed: 1 },
      opacity: { value: 0.5 },
      links: {
        enable: true,
        color: "#920909",
        distance: 150,
      },
    },
  };

  return <Particles id="tsparticles" options={options} />;
}
