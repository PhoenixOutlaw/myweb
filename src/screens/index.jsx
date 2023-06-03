"use client";
import Home from "@/components/Home";
import Image from "next/image";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import config from "@/utils/particle.config.json";
import { useCallback } from "react";
import { About } from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default function MainPage(props) {
  console.log(props);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => null, []);
  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={config}
      />
      <div className="px-4 pb-10 md:px-28">
        <Home />
        <About />
        <Work />
        <Contact />
      </div>
    </div>
  );
}
