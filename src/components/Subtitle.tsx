import { ReactNode } from "react";

const Subtitle = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="font-semibold text-4xl text-center mb-8">{children}</h2>
  );
};

export default Subtitle;
