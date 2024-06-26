import { useState } from "react";
import { RiMenu5Fill as MenuIcon } from "react-icons/ri";
import { useLanguage } from "../context/languageContext";
import { header_en } from "../content/languages/english/header";
import { header_pt } from "../content/languages/portuguese/header";

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [languageIndex, setLanguageIndex] = useLanguage();
  const language = [header_en, header_pt];

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const closeNav = () => {
    setIsNavActive(false);
  };

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguageIndex(Number(e.target.value));
  };

  return (
    <div className="flex justify-center px-4 py-8 bg-transparent absolute right-0 left-0">
      <header className="flex justify-between rounded-[100vh] w-full max-w-[1350px]">
        <a href="#" className="flex items-center font-semibold text-lg">
          {"<Bruno Queiroz />"}
        </a>

        <nav className="grid place-content-center relative">
          <ul
            className={`flex flex-col sm:flex-row sm:relative sm:scale-y-100 sm:p-0 sm:bg-transparent sm:top-0 sm:translate-x-0 scale-y-0 text-lg text-center absolute rounded-md top-[100%] duration-300 right-0 transition-transform z-30 backdrop-blur-sm bg-black/30 origin-top ${
              isNavActive ? "scale-y-100" : "scale-y-0"
            }`}
          >
            <li className={`${isNavActive ? "mr-0" : "mr-4"}`}>
              <select
                name="select"
                onChange={changeLanguage}
                className="py-2 px-6 bg-transparent"
              >
                <option value="" className="bg-black" disabled selected hidden>
                  Language
                </option>
                <option value="0" className="bg-black">
                  English
                </option>
                <option value="1" className="bg-black">
                  Portuguese
                </option>
              </select>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeNav}
                className={`block py-2 px-6 sm:px-2 sm:opacity-100 sm:rounded-md hover:bg-black/30 transition-opacity ${
                  isNavActive ? "opacity-100 delay-200" : "opacity-0 delay-0"
                }`}
              >
                {language[languageIndex].about}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={closeNav}
                className={`block py-2 px-6 sm:px-2 sm:opacity-100 sm:rounded-md hover:bg-black/30 transition-opacity ${
                  isNavActive ? "opacity-100 delay-200" : "opacity-0 delay-0"
                }`}
              >
                {language[languageIndex].projects}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeNav}
                className={`block py-2 px-6 sm:px-2 sm:opacity-100 sm:rounded-md hover:bg-black/30 transition-opacity ${
                  isNavActive ? "opacity-100 delay-200" : "opacity-0 delay-0"
                }`}
              >
                {language[languageIndex].contact}
              </a>
            </li>
          </ul>

          <button className="text-2xl sm:hidden" onClick={toggleNav}>
            <MenuIcon />
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
