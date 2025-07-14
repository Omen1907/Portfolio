import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const BackgroundParticles = () => {
    const particlesInit = async (main) => {
        await loadSlim(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: { color: "#DCD7C9" },
                fpsLimit: 60,
                interactivity: {
                    events: { onHover: { enable: true, mode: "grab" }, resize: true },
                    modes: { grab: { distance: 140, links: { opacity: 0.5 } } }
                },
                particles: {
                    color: { value: "#000000" },
                    links: { color: "#000000", distance: 150, enable: true, opacity: 0.3, width: 1 },
                    move: { enable: true, speed: 0.3, direction: "none", outModes: "out" },
                    number: { value: 50 },
                    opacity: { value: 0.5 },
                    size: { value: { min: 1, max: 3 } }
                },
                detectRetina: true
            }}
        />
    );
};

export default BackgroundParticles;
