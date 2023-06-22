import TechContainer from "./TechContainer";
import { technologies } from "../content/technologies";

export const About = () => {
  return (
    <section className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 items-center py-4">
          <h3 className="font-semibold text-4xl text-center mb-4">About</h3>
          <img
            src=""
            alt=""
            className="w-[60px] h-[60px] rounded-full bg-blue-700"
          />
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non natus
            similique voluptas ullam aut harum ipsa labore totam officiis animi
            nemo molestiae, numquam maiores dolore fugiat excepturi facere ex?
            Maxime.
          </p>
        </div>
        <div className="py-4">
          <h3 className="font-semibold text-4xl text-center mb-4">
            Technologies
          </h3>
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
