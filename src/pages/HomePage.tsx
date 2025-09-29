import Main from "../components/Main";
import ParticleComponent from "../components/ParticleComponent";

function HomePage() {
  return (
    <div>
      <ParticleComponent />
      <div className="absolute top-0 right-0 md:w-180 md:h-screen overflow-hidden ">
        <img
          src="/light-3.png"
          alt="lightEffect"
          className=" w-full rotate-45 -mt-24 translate-7.5 md:-mt-40 md:translate-x-16.5 light"
        />
      </div>
      <div className="absolute top-0 left-0 md:w-180 md:h-screen overflow-hidden ">
        <img
          src="/light-3.png"
          alt="lightEffect"
          className=" w-full -rotate-45 -mt-7.5 -translate-8.5 md:-mt-24 md:-translate-x-16.5 light"
        />
      </div>
      <Main />
    </div>
  );
}

export default HomePage;
