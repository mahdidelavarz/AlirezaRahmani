import GradientLine from "./ui/GradientLine";

function Skills({children, hasBottomBorder}: {children: React.ReactNode, hasBottomBorder?: boolean}) {
  return (
    <div className="w-[145px] h-[110px] relative col-span-6 row-span-1 overflow-hidden">
      
      <div className="w-[40px] h-[1px] rounded-sm bg-[#D9D9D9] absolute top-[1.5px] right-[50%] left-[50%] -translate-[50%]" style={{ boxShadow: "0px 24px 130px 50px #E9E9E92A" }}></div>
      <GradientLine
        CWidth={"w-full"}
        CHeight={"h-[1px]"}
        isAbsolute={"absolute top-0"}
        gradient={"bg-gradient-to-r"}
      />
      <GradientLine
        CWidth={"w-[1px]"}
        CHeight={"h-full"}
        isAbsolute={"absolute right-0 "}
        gradient={"bg-gradient-to-b"}
      />
      <GradientLine
        CWidth={hasBottomBorder ? "h-[1px]" : "h-0"}
        CHeight={"w-full"}
        isAbsolute={"absolute bottom-0 "}
        gradient={"bg-gradient-to-r"}
      />
      <GradientLine
        CWidth={"w-[1px]"}
        CHeight={"h-full"}
        isAbsolute={"absolute left-0 "}
        gradient={"bg-gradient-to-b"}
      />
      {children}
    </div>
  );
}

export default Skills;
