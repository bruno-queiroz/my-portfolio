import { IconType } from "react-icons";

interface TechMiniCardProps {
  name: string;
  color: string;
  Icon: IconType;
}

const TechMiniCard = ({ color, Icon, name }: TechMiniCardProps) => {
  return (
    <div className="flex group test" style={{ color }}>
      <div className="p-2 bg-black/70 rounded-tl-md rounded-bl-md">
        <Icon className="text-[24px]" />
      </div>
      <div className="grid place-items-center rounded-tr-md rounded-br-md p-1 w-0 scale-x-0 text-white text-center group-hover:w-[max-content] group-hover:scale-x-100 transition-transform origin-left bg-black/70">
        <span className="opacity-0 pr-2 duration-0 group-hover:opacity-100 group-hover: delay-200">
          {name}
        </span>
      </div>
    </div>
  );
};

export default TechMiniCard;
