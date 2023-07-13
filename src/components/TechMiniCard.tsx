import { IconType } from "react-icons";

interface TechMiniCardProps {
  name: string;
  color: string;
  Icon: IconType;
}

const TechMiniCard = ({ color, Icon, name }: TechMiniCardProps) => {
  return (
    <div className="flex" id="icon" style={{ color }}>
      <div className="p-2 bg-black/30 rounded-tl-md rounded-bl-md">
        <Icon className="text-[24px]" />
      </div>
      <div
        id="icon-name-container"
        className="grid place-items-center duration-300 origin-left transition-all rounded-tr-md rounded-br-md text-white bg-black/30"
      >
        <span id="icon-name" className="whitespace-pre-wrap">
          {name}
          {"  "}
        </span>
      </div>
    </div>
  );
};

export default TechMiniCard;
