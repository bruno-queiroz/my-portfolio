import TechContainer from "./TechContainer";
import { technologies } from "../content/technologies";
import profilePic from "../../public/profile-pic.jpg";
import Subtitle from "./Subtitle";
import { about_en } from "../content/languages/english/about";
import { about_pt } from "../content/languages/portuguese/about";
import { useLanguage } from "../context/languageContext";

export const About = () => {
  const [languageIndex] = useLanguage();
  const language = [about_en, about_pt];
  return (
    <section className="p-4 py-12" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1350px] mx-auto">
        <div className="flex flex-col gap-4 items-center py-4">
          <Subtitle>{language[languageIndex].sub_title1}</Subtitle>
          <img
            src={profilePic}
            alt="uma foto minha"
            className="w-[120px] h-[120px] object-cover rounded-full bg-black/70"
          />
          <p className="text-center">{language[languageIndex].text1}</p>

          <p className="text-center">{language[languageIndex].text2}</p>

          <p className="text-center">{language[languageIndex].text3}</p>
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
