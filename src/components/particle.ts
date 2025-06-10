import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type RecursivePartial,
  IOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const Particle = () => {
  const [init, setInit] = useState(false);

  // Initialize tsParticles engine once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load the slim version of tsParticles
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Callback when particles are loaded
  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles loaded:", container);
  };

  // Particle configuration
  const options: RecursivePartial<IOptions> = useMemo(
    () => ({
      autoPlay: true,
      background: {
        image: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`, // Convert image import to CSS url
        size: "80% auto",
        repeat: "no-repeat",
        position: "center",
        opacity: 1,
      },
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 250,
          density: {
            enable: true,
            area: 800, // Simplified density configuration
          },
        },
        color: {
          value: ["#b18a4c", "#b3b56b", "#9e6e45"], // Earthy colors
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: { min: 0.2, max: 0.6 },
          animation: {
            enable: true,
            speed: 2,
            sync: false,
          },
        },
        size: {
          value: { min: 1, max: 3 },
          animation: {
            enable: true,
            speed: 5,
            minimumValue: 1,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "bounce",
          },
          attract: {
            enable: false,
          },
        },
        wobble: {
          enable: true,
          distance: 5,
          speed: {
            angle: 10,
            move: 10,
          },
        },
      },
      detectRetina: true,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    []
  );

  // Render Particles component only when initialized
  if (!init) {
    return null; // Return null instead of JSX fragment to avoid erasableSyntaxOnly issues
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
};

export default Particle;