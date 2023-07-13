import TechContainer from "./TechContainer";
import { technologies } from "../content/technologies";
import Subtitle from "./Subtitle";

export const About = () => {
  return (
    <section className="p-4" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1350px] mx-auto">
        <div className="flex flex-col gap-4 items-center py-4">
          <Subtitle>About</Subtitle>
          <img
            src=""
            alt=""
            className="w-[60px] h-[60px] rounded-full bg-black/70"
          />
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non natus
            similique voluptas ullam aut harum ipsa labore totam officiis animi
            nemo molestiae, numquam maiores dolore fugiat excepturi facere ex?
            Maxime.
          </p>
        </div>
        <div className="py-4">
          <Subtitle>Technologies</Subtitle>
          <div className="flex flex-col gap-4 ">
            {technologies.map((tech, i) => (
              <TechContainer {...tech} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
