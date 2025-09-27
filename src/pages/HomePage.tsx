import Main from "../components/Main";
import ParticleComponent from "../components/ParticleComponent";

function HomePage() {
  return (
    <div>
      <ParticleComponent />
      <div className="absolute top-0 right-0 -mt-24 translate-8 md:w-180 md:h-120 overflow-hidden ">
        <img
          src="/light-3.png"
          alt="lightEffect"
          className=" w-full rotate-45 md:-mt-32 md:translate-x-17 light"
        />
      </div>
      <div className="absolute top-0 left-0 md:w-180 md:h-120 overflow-hidden ">
        <img
          src="/light-3.png"
          alt="lightEffect"
          className=" w-full -rotate-45 -mt-8.5 -translate-8 md:-mt-32 md:-translate-x-17 light"
        />
      </div>
      <Main />
    </div>
  );
}

export default HomePage;
