import { projects } from "../content/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="p-4">
      <div>
        <h2 className="font-semibold text-4xl text-center mb-4">Projects</h2>

        <div className="flex gap-20 flex-col">
          {projects.map((project, i) => (
            <ProjectCard {...project} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
