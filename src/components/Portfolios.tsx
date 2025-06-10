import GradientLine from "./ui/GradientLine";
import React from "react";

function Portfolios({
  children,
  style,
}: {
  children: React.ReactNode;
  style: string;
}) {
  return (
    <div className={`relative my-10 overflow-x-hidden ${style}`}>
      <div
        className="w-[47px] h-[3px] rounded-sm bg-[#D9D9D9] absolute top-[1.5px] right-[50%] left-[50%] -translate-[50%]"
        style={{ boxShadow: "0px 24px 130px 100px #E9E9E91A" }}
      ></div>
      <GradientLine
        CWidth={"w-full"}
        CHeight={"h-[1.5px]"}
        isAbsolute={"absolute top-0"}
        gradient={"bg-gradient-to-r"}
      />
      <GradientLine
        CWidth={"w-[1.5px]"}
        CHeight={"h-full"}
        isAbsolute={"absolute right-0 "}
        gradient={"bg-gradient-to-b"}
      />
      <GradientLine
        CWidth={"h-[1.5px]"}
        CHeight={"w-full"}
        isAbsolute={"absolute bottom-0 "}
        gradient={"bg-gradient-to-r"}
      />
      <GradientLine
        CWidth={"w-[1.5px]"}
        CHeight={"h-full"}
        isAbsolute={"absolute left-0 "}
        gradient={"bg-gradient-to-b"}
      />
      {children}
    </div>
  );
}

export default Portfolios;
