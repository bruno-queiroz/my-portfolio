const Header = () => {
  return (
    <div className="flex justify-center px-4 py-6">
      <header className="flex justify-between p-4 rounded-[100vh] w-full border-transparent border-[3px] border-l-primary border-l-[3px] border-r-primary border-r-[3px]">
        <a href="#" className="font-semibold text-lg">
          {"<Bruno Queiroz />"}
        </a>

        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
