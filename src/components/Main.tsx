import { Icon } from "@iconify/react";
import Portfolios from "./Portfolios";
import Skills from "./Skills";
import { portfolios, skills } from "../data/data";
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
      <div className="w-[240px] h-[240px]  mt-[36px] z-50 rounded-full relative">
        <div className="w-[35px] h-[35px] p-1 bg-[#1F1E22CC] rounded-sm blur-md] absolute top-10 left-3">
          <img src="../../public/adobe-xd-icon 1.png" alt="adobe" />
        </div>
        <div className="w-[35px] h-[35px] p-1 bg-[#1F1E22CC] rounded-sm blur-md] absolute top-10 right-3 flex justify-center items-center">
          <img
            src="../../public/figma0.png"
            alt="adobe"
            className="w-[16px] object-cover"
          />
        </div>
        <div className="w-[109px] h-[35px] p-1 bg-[#1F1E22CC] rounded-sm blur-md] absolute bottom-10 -left-5 flex justify-center items-center gap-1">
          <img
            src="../../public/icon 2.png"
            alt="adobe"
            className="w-[18px] object-cover"
          />
          <span className="text-[10px] font-bold text-white">FLOW CHART</span>
        </div>
        <div className="w-[75px] h-[35px] p-1 bg-[#1F1E22CC] rounded-sm blur-md] absolute bottom-10 right-0 flex justify-center items-center gap-1">
          <img
            src="../../public/uikit-seek icon.png"
            alt="adobe"
            className="w-[18px] object-cover"
          />
          <span className="text-[10px] font-bold text-white">UI KIT</span>
        </div>
        <img
          src="../../public/profile.png"
          alt="profile"
          className=" object-cover"
        />
      </div>
      <div className="w-full flex justify-center gap-2 mt-[45px] text-white relative">
        <Icon icon="mdi:email" width="24" height="24" />
        <p className="font-bold text-[16px] underline">ar.sing7979@gmail.com</p>
      </div>
      <img
        src="../../public/Vector.png"
        alt="goat"
        className="absolute -bottom-21"
      />
      <div className="text-white mt-[103px] w-full flex flex-col items-center">
        <button className="w-[105px] h-[35px] bg-[#34343442] text-[12px] rounded-4xl border border-[#34343454]">
          Who am i?
        </button>
        <h2 className="font-extrabold text-[22px] mt-[20px]">About Me</h2>
        <p
          className="mt-[15px] w-[310px] leading-7 text-[15px]"
          style={{ wordSpacing: "3px" }}
        >
          i Am Alireza Rahmani With 3 Years Of Work Experience As A Product
          Designer And I Have Acquired The Necessary Skills And Knowledge For
          The Success Of Various Projects.
        </p>
        <button className="w-[180px] h-[35px] bg-[#34343442] text-[12px] rounded-4xl border border-[#34343454] mt-[77px]">
          What do I know how to do?
        </button>
        <span className="font-extrabold text-[22px] mt-[20px]">
          our mission
        </span>
        <p className="text-14px mt-[15px]">
          Skills I have acquired over the years
        </p>
      </div>
      <div className="w-[320px] h-[330px] mt-[35px] grid grid-cols-12 grid-rows-3 justify-items-center">
        {skills.map((skill) => (
          <Skills key={skill.id} hasBottomBorder={skill.hasBottomBorder}>
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="w-[42px] h-[42px] ring-4 ring-[#34343442] flex justify-center items-center rounded-full">
                <img src={skill.img} alt="" className="" />
              </div>
              <p className="text-[12px] font-bold mt-2 text-white text-shadow-md text-shadow-white/10">
                {skill.title}
              </p>
            </div>
          </Skills>
        ))}
      </div>
      <div className="text-white w-full flex flex-col items-center mt-28 relative">
        <img
          src="../../public/Vector2.png"
          alt="goat"
          className="w-42 absolute bottom-0 mr-10"
        />
        <button className="w-[80px] h-[35px] bg-[#34343442] text-[12px] rounded-4xl border border-[#34343454]">
          Portfolio
        </button>
        <h2 className="font-extrabold text-[22px] mt-[20px]">My portfolio</h2>
        <p className="mt-[15px] w-[320px] leading-7">
          Projects that I had the honor of collaborating with these dear people.
        </p>
      </div>
      <div className="relative">
        {portfolios.map((portfolio) => (
          <Portfolios key={portfolio.id} style="h-[462px] w-[310px]">
            <div className="w-full h-full p-4 flex flex-col items-center relative">
              <img
                src={portfolio.img}
                alt={portfolio.title}
                className="w-full h-full object-cover object-top rounded-md"
              />
              <div
                className="w-full h-[429px] absolute top-7"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(1, 1, 0, 0) 60%, #000000 85%)",
                }}
              ></div>
              <button
                className="w-[177px] h-[35px]  bg-[#121212] text-white font-bold underline text-[14px] rounded-[6px] border border-[#34343454] absolute bottom-[26px]"
                onClick={() => window.open(portfolio.link, "_blank")}
              >
                {portfolio.title}
              </button>
            </div>
          </Portfolios>
        ))}
        <img
          src="../../public/Vector 3.png"
          alt="goat"
          className="absolute -bottom-[285px] ml-9 "
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
      <Portfolios style="h-[530px] w-[310px]">
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
          <img src="../../public/Vector 4.png" alt="" />
        </div>
      </Portfolios>
    </div>
  );
}

export default Main;
