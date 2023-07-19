import { IconType } from "react-icons";

interface TechContainerProps {
  name: string;
  color: string;
  Icon: IconType;
  ex: number;
}

const TechContainer = ({ Icon, name, color, ex }: TechContainerProps) => {
  return (
    <div
      className="flex gap-4 items-center p-4 rounded-lg bg-black/25 border-[2px] min-w-[160px]"
      style={{ width: ex + "%", borderColor: color }}
    >
      <Icon className="text-2xl" style={{ color }} />
      <span>{name}</span>
    </div>
  );
};

export default TechContainer;
