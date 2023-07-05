import { ReactNode } from "react";

const Subtitle = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="font-semibold text-4xl text-center mb-4">{children}</h2>
  );
};

export default Subtitle;
