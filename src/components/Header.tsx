import { useState } from "react";
import { RiMenuFoldLine as MenuIcon } from "react-icons/ri";
import { LuPanelRightClose as CloseIcon } from "react-icons/lu";

const Header = () => {
  const [isNavAcitve, setIsNavActive] = useState(false);

  const openNav = () => {
    setIsNavActive(true);
  };

  const closeNav = () => {
    setIsNavActive(false);
  };
  return (
    <div className="flex justify-center px-4 py-6">
      <header className="flex justify-between p-4 rounded-[100vh] w-full border-transparent border-[3px] border-l-primary border-l-[3px] border-r-primary border-r-[3px]">
        <a href="#" className="font-semibold text-lg">
          {"<Bruno Queiroz />"}
        </a>

        <nav>
          <ul
            className={`flex flex-col sm:flex-row sm:translate-x-0 gap-4 text-lg text-center fixed right-0 w-[60%] transition-transform z-30 bg-[#081b29] top-0 h-full sm:relative ${
              isNavAcitve ? "translate-x-0" : "translate-x-[100%]"
            }`}
          >
            <button
              className={`text-4xl my-4 mx-2 w-[max-content] sm:hidden`}
              onClick={closeNav}
            >
              <CloseIcon />
            </button>
            <li>
              <a href="#" onClick={closeNav}>
                About
              </a>
            </li>
            <li>
              <a href="#" onClick={closeNav}>
                Projects
              </a>
            </li>
            <li>
              <a href="#" onClick={closeNav}>
                Contact
              </a>
            </li>
          </ul>
          <div
            className={`${
              !isNavAcitve && "hidden"
            } sm:hidden fixed right-0 top-0 left-0 bottom-0 bg-black/50 z-20`}
            onClick={closeNav}
          />
          <button className="text-2xl sm:hidden" onClick={openNav}>
            <MenuIcon />
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
