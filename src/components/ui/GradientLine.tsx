type gradientLineType = {
  CWidth: string;
  CHeight: string;
  isAbsolute: string;
  gradient: string;
};
function GradientLine({
  CWidth,
  CHeight,
  isAbsolute,
  gradient,
}: gradientLineType) {
  return (
    <div
      className={`${CHeight} ${CWidth} ${isAbsolute} ${gradient} from-[#FFFFFF00] via-[#FFFFFF33] to-[#FFFFFF00]`}
    ></div>
  );
}

export default GradientLine;
