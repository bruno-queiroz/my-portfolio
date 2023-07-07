import { ReactNode } from "react";

interface LinkIconProps {
  children: ReactNode;
  href: string;
}

const LinkIcon = ({ href, children }: LinkIconProps) => {
  return (
    <a
      href={href}
      className="grid place-items-center z-10 border-primary hover:text-black focus:text-black text-primary border-[3px] p-2 rounded-full relative link-icon-hover"
    >
      {children}
    </a>
  );
};

export default LinkIcon;
