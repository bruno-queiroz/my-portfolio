const Header = () => {
  return (
    <div className="flex justify-center bg-red-100 px-4 py-6">
      <header className="flex justify-between p-4 rounded-[100vh] bg-red-300 w-[95%]">
        <a href="#" className="font-semibold text-lg">
          Bruno Queiroz
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
