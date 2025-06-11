import { Icon } from "@iconify/react";
import Portfolios from "./Portfolios";
import Skills from "./Skills";
import { portfolios, skills } from "../data/data";
function Main() {
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <div className="mb-[36px] mt-[60px] flex items-center z-50">
        <div className="flex gap-4 w-full justify-center items-center">
          <div className="w-7 h-7 lg:w-9 lg:h-9 flex justify-center items-center   rounded-full">
            <img src="/iconmonstr-instagram-14 1.png" alt="" />
          </div>
          <div className="w-7 h-7 lg:w-9 lg:h-9 flex justify-center items-center rounded-full">
            <img src="/twitter.png" alt="" />
          </div>
          <div className="w-7 h-7 lg:w-9 lg:h-9 flex justify-center items-center rounded-full">
            <img src="/iconmonstr-linkedin-4 1.png" alt="" />
          </div>
          <div className="w-7 h-7 lg:w-9 lg:h-9 flex justify-center items-center rounded-full">
            <img src="/Behance.png" alt="" />
          </div>
          <div className="w-7 h-7 lg:w-9 lg:h-9 flex justify-center items-center rounded-full">
            <img src="/icon D.png" alt="" />
          </div>
        </div>
      </div>
      <h1 className="font-extrabold text-white text-[32px] lg:text-[50px] z-50">
        Alireza Rahmani
      </h1>
      <div className="text-white w-full flex flex-col items-center mt-[12px] gap-2 z-50">
        <h2 className="font-bold text-[22px] lg:text-[24px]">UI/UX Designer</h2>
        <p className="lg:text-[16px]">
          Helping brands improve their product experience
        </p>
      </div>
      <div className="w-[240px] h-[240px] lg:w-[300px] lg:h-[300px]  mt-[36px] z-50 rounded-full relative">
        <div className="w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] p-1 bg-[#1F1E22CC] rounded-sm blur-md] absolute top-10 left-3">
          <img src="/adobe-xd-icon 1.png" alt="adobe" />
        </div>
        <div className="w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] p-1 bg-[#1F1E22CC] rounded-sm blur-md] absolute top-10 right-3 flex justify-center items-center">
          <img
            src="/figma0.png"
            alt="adobe"
            className="w-[16px] lg:w-[23px] object-cover"
          />
        </div>
        <div className="w-[109px] h-[35px] lg:w-[152px] lg:h-[42px] p-1 bg-[#1F1E22CC] rounded-sm blur-md] absolute bottom-10 -left-5 flex justify-center items-center gap-1">
          <img
            src="/icon 2.png"
            alt="adobe"
            className="w-[18px] lg:w-[26px] object-cover"
          />
          <span className="text-[10px] lg:text-[14px] font-bold text-white">
            FLOW CHART
          </span>
        </div>
        <div className="w-[75px] h-[35px] lg:w-[100px] lg:h-[42px] p-1 bg-[#1F1E22CC] rounded-sm blur-md] absolute bottom-10 right-0 flex justify-center items-center gap-1">
          <img
            src="/uikit-seek icon.png"
            alt="adobe"
            className="w-[18px] lg:w-[22px] object-cover"
          />
          <span className="text-[10px] lg:text-[14px] font-bold text-white">
            UI KIT
          </span>
        </div>
        <img src="/profile.png" alt="profile" className=" object-cover" />
      </div>
      <div className="w-full flex justify-center gap-2 mt-[45px] text-white">
        <Icon icon="mdi:email" width="24" height="24" />
        <p className="font-bold text-[16px] lg:text-20px underline">
          ar.sing7979@gmail.com
        </p>
      </div>
      <div className="text-white mt-[103px] lg:mt-[200px] w-full flex flex-col items-center relative">
        <img
          src="/Vector.png"
          alt="goat"
          className="absolute lg:-top-45 -top-20 lg:w-[461px] right-[50%] left-[50%] -translate-x-[40%]"
        />
        <button className="w-[105px] h-[35px] bg-[#34343442] text-[12px] rounded-4xl border border-[#34343454]">
          Who am i?
        </button>
        <h2 className="font-extrabold text-[22px] lg:text-[34px] mt-[20px]">
          About Me
        </h2>
        <p
          className="mt-[15px] w-[310px] lg:w-[1420px] lg:text-[22px] lg:ml-6 text-[15px]"
          style={{ wordSpacing: "3px" }}
        >
          i Am Alireza Rahmani With 3 Years Of Work Experience As A Product
          Designer And I Have Acquired The Necessary Skills And Knowledge For
          The Success Of Various Projects.
        </p>
        <button className="w-[180px] h-[35px] bg-[#34343442] text-[12px] rounded-4xl border border-[#34343454] mt-[77px] lg:mt-[300px]">
          What do I know how to do?
        </button>
        <span className="font-extrabold text-[22px] mt-[20px] lg:text-[34px]">
          our mission
        </span>
        <p className="text-14px mt-[15px] lg:text-[18px]">
          Skills I have acquired over the years
        </p>
      </div>
      <div className="w-[320px] h-[330px] lg:w-[1416px] lg:h-[360px] mt-[35px] grid grid-cols-12 grid-rows-3 lg:grid-rows-2 justify-items-center">
        {skills.map((skill) => (
          <Skills key={skill.id} hasBottomBorder={skill.hasBottomBorder}>
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="w-[42px] h-[42px] ring-4 ring-[#34343442] flex justify-center items-center rounded-full">
                <img src={skill.img} alt="" className="" />
              </div>
              <p className="text-[12px] lg:text-[16px] font-bold mt-2 text-white text-shadow-md text-shadow-white/10">
                {skill.title}
              </p>
            </div>
          </Skills>
        ))}
      </div>
      <div className="text-white w-full flex flex-col items-center mt-28 lg:mt-[385px] relative">
        <img
          src="/Vector2.png"
          alt="goat"
          className="w-42 lg:w-[247px] absolute -bottom-10 mr-10"
        />
        <button className="w-[80px] h-[35px] bg-[#34343442] text-[12px] rounded-4xl border border-[#34343454]">
          Portfolio
        </button>
        <h2 className="font-extrabold text-[22px] lg:text-[30px] mt-[20px]">
          My portfolio
        </h2>
        <p className="mt-[15px] lg:text-18px w-[320px] lg:w-[622px] leading-7 lg:flex lg:justify-center">
          Projects that I had the honor of collaborating with these dear people.
        </p>
      </div>
      <div className="relative lg:grid lg:grid-cols-4 mt-10 gap-x-[70px] ">
        {portfolios.map((portfolio) => (
          <Portfolios
            key={portfolio.id}
            style="h-[462px] w-[310px] lg:w-[303px] h-[484px]"
          >
            <div className="w-full h-full p-4 flex flex-col items-center relative">
              <img
                src={portfolio.img}
                alt={portfolio.title}
                className="w-full h-full object-cover object-top rounded-md"
              />
              <div
                className="w-full h-[449px] lg:h-[451px] absolute top-7"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(1, 1, 0, 0) 60%, #000000 85%)",
                }}
              ></div>
              <button
                className="w-[177px] h-[35px]  bg-[#121212] text-white font-bold underline text-[14px] rounded-[6px] border border-[#34343454] absolute bottom-[26px] cursor-pointer"
                onClick={() => window.open(portfolio.link, "_blank")}
              >
                {portfolio.title}
              </button>
            </div>
          </Portfolios>
        ))}
      </div>
      <div className="text-white w-full flex flex-col items-center mt-[124px] lg:mt-[302px] relative">
        <img
          src="/Vector 3.png"
          alt="goat"
          className="absolute bottom-[20px] lg:-bottom-[45px] right-[50%] left-[50%] -translate-x-[60%] lg:w-[247px]"
        />
        <button className="w-[71px] h-[35px] bg-[#34343442] text-[12px] rounded-4xl border border-[#34343454]">
          Call me
        </button>
        <h2 className="font-extrabold text-[22px] lg:text-[30px] mt-[20px]">
          Contact us
        </h2>
        <p className="mt-[15px] w-[320px] leading-7 lg:text-[18px] lg:w-[606px] lg:flex lg:justify-center">
          Our Services is high-end with best quality that you could ever seen
        </p>
      </div>
      <Portfolios style="h-[530px] w-[310px] lg:mt-[100px] ">
        <div className="w-full h-full flex flex-col items-center py-8">
          <div className="w-[50px] h-[50px] bg-[#101010] flex justify-center items-center rounded-full">
            <Icon
              icon="mingcute:phone-call-line"
              width="20"
              height="20"
              className="text-white"
            />
          </div>
          <div className="flex gap-2 text-white items-center mt-[35px]">
            <Icon icon="uil:phone" width="20" height="20" className="mt-2" />
            <span>+0991-1476750</span>
          </div>
          <div className="flex gap-2 text-white items-center mt-[20px]">
            <Icon icon="solar:letter-bold" width="20" height="20" />
            <span>ar.sing7979@gmail.com</span>
          </div>
          <div className="flex gap-4 w-full justify-center items-center mt-[40px]">
            <div className="w-7 h-7 flex justify-center items-center   rounded-full">
              <img src="/iconmonstr-instagram-14 1.png" alt="" />
            </div>
            <div className="w-7 h-7 flex justify-center items-center rounded-full">
              <img src="/twitter.png" alt="" />
            </div>
            <div className="w-7 h-7 flex justify-center items-center rounded-full">
              <img src="/iconmonstr-linkedin-4 1.png" alt="" />
            </div>
            <div className="w-7 h-7 flex justify-center items-center rounded-full">
              <img src="/Behance.png" alt="" />
            </div>
            <div className="w-7 h-7 flex justify-center items-center rounded-full">
              <img src="/icon D.png" alt="" />
            </div>
          </div>
          <img src="/Vector 4.png" alt="" className="w-[254px] h-[225px]" />
        </div>
      </Portfolios>
    </div>
  );
}

export default Main;
