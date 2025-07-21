import { useEffect, useMemo, useState } from "react";
import { Particles, initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type RecursivePartial,
  type IOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticleComponent = () => {
  const [init, setInit ] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
        setInit(true);
      });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles loaded:", container);
  };

  const options: RecursivePartial<IOptions> = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "#000000", // Dark night sky background
        },
      },
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 100, // Increased for more stars
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: ["#FFFFFF", "#E0E0E0", "#CCCCCC"], // White and light grays for star-like colors
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: { min: 0.2, max: 1.0 },
          animation: {
            enable: true,
            speed: 1.5, // Slower animation for subtle twinkling
            minimumValue: 0.2,
            sync: false, // Random twinkling
            random: {
              enable: true,
              minimumValue: 0.2,
            },
          },
        },
        size: {
          value: { min: 0.5, max: 2 }, // Smaller sizes for star-like dots
          animation: {
            enable: false, // No size animation for stars
          },
        },
        move: {
          enable: true, // Fixed position for stars
          speed: 0.1,
        },
        wobble: {
          enable: false, // Disable wobble for static stars
        },
      },
      detectRetina: true,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    []
  );

  if (!init) {
    return null;
  }

  return <Particles id="tsparticles" options={options} particlesLoaded={particlesLoaded} />;
};

export default ParticleComponent;