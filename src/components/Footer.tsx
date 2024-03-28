import { BsGithub as Githubicon } from "react-icons/bs";
import { FaLinkedinIn as LinkInIcon } from "react-icons/fa";

import LinkIcon from "./LinkIcon";
import { header_en } from "../content/languages/english/header";
import { header_pt } from "../content/languages/portuguese/header";
import { useLanguage } from "../context/languageContext";

const Footer = () => {
  const [languageIndex] = useLanguage();
  const language = [header_en, header_pt];
  return (
    <footer className="bg-black/30 p-4 mt-8">
      <div className="flex flex-col items-center">
        <a href="#" className="font-semibold text-lg">
          {"<Bruno Queiroz />"}
        </a>

        <div className="flex gap-2 text-lg mt-4">
          <LinkIcon href="https://github.com/bruno-queiroz">
            <Githubicon />
          </LinkIcon>

          <LinkIcon href="https://www.linkedin.com/in/bruno-queiroz-dev">
            <LinkInIcon />
          </LinkIcon>
        </div>

        <nav className="mt-4 ">
          <ul className="flex flex-col gap-1 text-center">
            <li>
              <a href="#about">{language[languageIndex].about}</a>
            </li>
            <li>
              <a href="#projects">{language[languageIndex].projects}</a>
            </li>
            <li>
              <a href="#contact">{language[languageIndex].contact}</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
