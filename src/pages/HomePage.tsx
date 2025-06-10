import Main from "../components/Main";

function HomePage() {
  return (
    <div>
      <img
        src="../../public/light effect.png"
        alt="lightEffect"
        className="absolute z-0 w-[366px] top-0 right-0"
      />
      <img
        src="../../public/light effect left.png"
        alt="lightEffect"
        className="absolute z-0 w-[366px] top-0 right-left"
      />
      <Main />
    </div>
  );
}

export default HomePage;
