import { useState } from "react";
import { RiMenu5Fill as MenuIcon } from "react-icons/ri";

const Header = () => {
  const [isNavAcitve, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavAcitve);
  };

  const closeNav = () => {
    setIsNavActive(false);
  };
  return (
    <div className="flex justify-center px-4 py-8 bg-transparent absolute right-0 left-0">
      <header className="flex justify-between rounded-[100vh] w-full ">
        <a href="#" className="font-semibold text-lg">
          {"<Bruno Queiroz />"}
        </a>

        <nav className="grid place-content-center relative">
          <ul
            className={`flex flex-col sm:flex-row sm:relative sm:scale-y-100 sm:p-0 sm:bg-transparent sm:top-0 sm:translate-x-0 sm:gap-4 scale-y-0 text-lg text-center absolute rounded-md top-[100%] duration-300 right-0 transition-transform z-30 backdrop-blur-sm bg-black/30 origin-top ${
              isNavAcitve ? "scale-y-100" : "scale-y-0"
            }`}
          >
            <li>
              <a
                href="#about"
                onClick={closeNav}
                className={`block py-2 px-6 sm:p-0 sm:opacity-100 sm:hover:bg-transparent hover:bg-black/40 transition-opacity ${
                  isNavAcitve ? "opacity-100 delay-200" : "opacity-0 delay-0"
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={closeNav}
                className={`block py-2 px-6 sm:p-0 sm:opacity-100 sm:hover:bg-transparent hover:bg-black/40 transition-opacity ${
                  isNavAcitve ? "opacity-100 delay-200" : "opacity-0 delay-0"
                }`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeNav}
                className={`block py-2 px-6 sm:p-0 sm:opacity-100 sm:hover:bg-transparent hover:bg-black/40 transition-opacity ${
                  isNavAcitve ? "opacity-100 delay-200" : "opacity-0 delay-0"
                }`}
              >
                Contact
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
