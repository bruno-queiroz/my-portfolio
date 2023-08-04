import TechContainer from "./TechContainer";
import { technologies } from "../content/technologies";
import profilePic from "../../public/profile-pic.jpg";
import Subtitle from "./Subtitle";

export const About = () => {
  return (
    <section className="p-4 py-12" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1350px] mx-auto">
        <div className="flex flex-col gap-4 items-center py-4">
          <Subtitle>Sobre</Subtitle>
          <img
            src={profilePic}
            alt="uma foto minha"
            className="w-[120px] h-[120px] object-cover rounded-full bg-black/70"
          />
          <p className="text-center">
            Tenho {new Date().getFullYear() - 2002} anos de idade e atualmente
            moro em São José do Rio preto, uma cidade localizada no interior de
            São Paulo.
          </p>

          <p className="text-center">
            Tenho estudado programação com o foco em desenvolvimento web por
            conta própria há {new Date().getFullYear() - 2021} anos. Comecei
            aprendendo Javascript, CSS e HTML. Logo após 6 meses comecei a
            utilizar frameworks e após 1 ano comecei a me aventurar no Backend.
          </p>

          <p className="text-center">
            Gosto bastante de criar novos projetos pessoais para consolidar os
            meus conhecimentos e aprender coisas novas.
          </p>
        </div>
        <div className="py-4">
          <Subtitle>Tecnologias</Subtitle>
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
