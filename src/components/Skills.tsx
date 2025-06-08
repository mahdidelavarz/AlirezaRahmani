import GradientLine from "./ui/GradientLine";

function Skills() {
  return (
    <div className="w-[145px] h-[110px] relative col-span-6 row-span-1">
      <GradientLine
        CWidth={"w-full"}
        CHeight={"h-0.5"}
        isAbsolute={"absolute top-0"}
        gradient={"bg-gradient-to-r"}
      />
      <GradientLine
        CWidth={"w-0.5"}
        CHeight={"h-full"}
        isAbsolute={"absolute right-0 "}
        gradient={"bg-gradient-to-b"}
      />
      <GradientLine
        CWidth={"h-0.5"}
        CHeight={"w-full"}
        isAbsolute={"absolute bottom-0 "}
        gradient={"bg-gradient-to-r"}
      />
      <GradientLine
        CWidth={"w-0.5"}
        CHeight={"h-full"}
        isAbsolute={"absolute left-0 "}
        gradient={"bg-gradient-to-b"}
      />
    </div>
  );
}

export default Skills;
