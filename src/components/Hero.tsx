import { BsGithub as Githubicon } from "react-icons/bs";
import { FaLinkedinIn as LinkInIcon } from "react-icons/fa";

import LinkIcon from "./LinkIcon";

const Hero = () => {
  return (
    <section className="flex justify-center p-4 hero-height">
      <div className="flex flex-col max-w-[1350px] w-full mt-[20vh]">
        <span className="text-primary font-semibold">Oi, meu nome é</span>

        <h1 className="flex flex-col gap-2 font-bold text-[3rem] leading-[3rem] smm:text-[4rem] smm:leading-[4rem]">
          <span className="text-gray-300">Bruno Queiroz</span>
          <span className="text-gray-300">
            E eu faço Web Devolopment<span className="text-primary">.</span>
          </span>
        </h1>

        <p className="max-w-[600px] mt-8">
          Eu gosto de construir aplicações FullStack, principalmente aquelas que
          me desafiam, me tiram da minha zona de conforto e me fazem aprender
          coisas novas.
        </p>

        <div className="flex gap-2 text-lg mt-4">
          <LinkIcon href="https://github.com/bruno-queiroz">
            <Githubicon />
          </LinkIcon>

          <LinkIcon href="https://www.linkedin.com/in/bruno-queiroz-dev">
            <LinkInIcon />
          </LinkIcon>
        </div>

        <a
          href="#about"
          id="cta-btn"
          className="w-[max-content] relative transition-shadow duration-500 border-primary border-[3px] py-3 px-8 rounded mt-8 text-glowy-shadow text-primary box-glowy-shadow"
        >
          Sobre mim
        </a>
      </div>
    </section>
  );
};

export default Hero;
