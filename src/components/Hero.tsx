import { BsGithub as Githubicon } from "react-icons/bs";
import { FaLinkedinIn as LinkInIcon } from "react-icons/fa";

import LinkIcon from "./LinkIcon";

const Hero = () => {
  return (
    <section className="flex justify-center p-4 hero-height">
      <div className="flex flex-col max-w-[1200px] w-full mt-4">
        <span className="text-primary font-semibold">Hi my name is</span>

        <h1 className="flex flex-col gap-2 font-bold text-[4rem] leading-[4rem]">
          <span className="text-gray-300">Bruno Queiroz</span>
          <span className="text-gray-300">
            I do Web Devolopment<span className="text-primary">.</span>
          </span>
        </h1>

        <p className="max-w-[600px] mt-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          cupiditate, error ut ducimus cum quisquam minima molestias sint
          pariatur sapiente facere rem asperiores ipsum accusantium omnis,
          beatae alias similique nostrum!
        </p>

        <div className="flex gap-2 text-lg mt-4">
          <LinkIcon href="#">
            <Githubicon />
          </LinkIcon>

          <LinkIcon href="#">
            <LinkInIcon />
          </LinkIcon>
        </div>

        <button className="w-[max-content] border-primary border-[3px] p-2 rounded mt-8 text-glowy-shadow text-primary box-glowy-shadow">
          Reach out
        </button>
      </div>
    </section>
  );
};

export default Hero;
