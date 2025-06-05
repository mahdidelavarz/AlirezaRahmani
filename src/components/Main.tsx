import { Icon } from "@iconify/react";
import Portfolios from "./Portfolios";
function Main() {
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <div className="mb-[36px] mt-[60px] flex items-center">
        <div className="flex gap-4 w-full justify-center items-center">
          <div className="w-7 h-7 flex justify-center items-center  bg-white rounded-full">
            <Icon icon="basil:instagram-outline" width="20" height="20" />
          </div>
          <div className="w-7 h-7 flex justify-center items-center  bg-white rounded-full">
            <Icon icon="ri:twitter-fill" width="20" height="20" />
          </div>
          <div className="w-7 h-7 flex justify-center items-center  bg-white rounded-full">
            <Icon icon="line-md:linkedin" width="20" height="20" />
          </div>
          <div className="w-7 h-7 flex justify-center items-center  bg-white rounded-full">
            <Icon icon="basil:instagram-outline" width="20" height="20" />
          </div>
          <div className="w-7 h-7 flex justify-center items-center  bg-white rounded-full">
            <Icon icon="basil:instagram-outline" width="20" height="20" />
          </div>
        </div>
      </div>
      <h1 className="font-extrabold text-white text-[32px]">Alireza Rahmani</h1>
      <div className="text-white w-full flex flex-col items-center mt-[12px] gap-2">
        <h2 className="font-bold text-[22px]">UI/UX Designer</h2>
        <p>Helping brands improve their product experience</p>
      </div>
      <div className="w-[240px] h-[240px] ring-8 ring-black mt-[36px] rounded-full">
        <img
          src="../../public/night-portrait-girl-model-wear-glasses-jeans-leather-jacket-with-backpack-against-lights-city-streets.pngش.png"
          alt="profile"
          className=" object-cover"
        />
      </div>
      <div className="w-full flex justify-center gap-2 mt-[45px] text-white relative">
        <Icon icon="mdi:email" width="24" height="24" />
        <p className="font-bold text-[16px]">ar.sing7979@gmail.com</p>
      </div>
      <img
        src="../../public/Vector.png"
        alt="goat"
        className="absolute -bottom-39"
      />
      <div className="text-white mt-[103px] w-full flex flex-col items-center">
        <button className="w-[105px] h-[35px] bg-[#34343442] text-[12px] rounded-4xl border border-[#34343454]">
          Who am i?
        </button>
        <h2 className="font-extrabold text-[22px] mt-[20px]">About Me</h2>
        <p className="mt-[15px] w-[310px] leading-7">
          I Am Alireza Rahmani With 3 years of work Experience as a product
          designer and I have acquired the necessary skills and knowledge for
          the success of various projects.
        </p>
        <button className="w-[180px] h-[35px] bg-[#34343442] text-[12px] rounded-4xl border border-[#34343454] mt-[77px]">
          What do I know how to do?
        </button>
        <span className="font-extrabold text-[22px] mt-[20px]">
          our mission
        </span>
        <p className="font-bold text-14px mt-[15px]">
          Skills I have acquired over the years
        </p>
      </div>
      <div className="mt-[35px]">
        <div className="flex">
          <img src="../../public/Group 1000001884.png" alt="" />
          <img src="../../public/Group xd.png" alt="" />
        </div>
        <div className="flex">
          <img src="../../public/Group ps.png" alt="" />
          <img src="../../public/Group ai.png" alt="" />
        </div>
        <div className="flex">
          <img src="../../public/Group html.png" alt="" />
          <img src="../../public/Group sketch.png" alt="" />
        </div>
      </div>
      <img src="../../public/Vector2.png" alt="goat" className="mt-[36px]" />
      <div className="text-white w-full flex flex-col items-center">
        <button className="w-[105px] h-[35px] bg-[#34343442] text-[12px] rounded-4xl border border-[#34343454]">
          Portfolio
        </button>
        <h2 className="font-extrabold text-[22px] mt-[20px]">My portfolio</h2>
        <p className="mt-[15px] w-[320px] leading-7">
          Projects that I had the honor of collaborating with these dear people.
        </p>
      </div>
      <div className="relative">
        <Portfolios />
        <Portfolios />
        <Portfolios />
        <Portfolios />
        <Portfolios />
        <Portfolios />
        <Portfolios />
        <Portfolios />
        <Portfolios />
        <Portfolios />
        <Portfolios />
        <Portfolios />
        <img
          src="../../public/Vector 3.png"
          alt="goat"
          className="absolute -bottom-[295px] w-[200px]"
        />
      </div>
      <div className="text-white w-full flex flex-col items-center mt-[124px]">
        <button className="w-[71px] h-[35px] bg-[#34343442] text-[12px] rounded-4xl border border-[#34343454]">
          Call me
        </button>
        <h2 className="font-extrabold text-[22px] mt-[20px]">Contact us</h2>
        <p className="mt-[15px] w-[320px] leading-7">
          Our Services is high-end with best quality that you could ever seen
        </p>
      </div>
      <Portfolios />
    </div>
  );
}

export default Main;
