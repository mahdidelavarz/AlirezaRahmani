import Main from "../components/Main";
import ParticleComponent from "../components/ParticleComponent";

function HomePage() {
  return (
    <div>
      <ParticleComponent />
      <img
        src="/light effect.png"
        alt="lightEffect"
        className="absolute z-0 w-[366px] top-0 right-0"
      />
      <img
        src="/light effect left.png"
        alt="lightEffect"
        className="absolute z-0 w-[366px] top-0 right-left"
      />
      <Main />
    </div>
  );
}

export default HomePage;
