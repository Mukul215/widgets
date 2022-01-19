const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal p-6 border-b-2 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <svg
            className="h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg
              className="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-1/2 block flex-grow justify-center lg:flex items-center lg:items-center lg:w-auto">
          <div className="text-lg lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter mr-4 text-lg"
            >
              Accordion
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter mr-4 text-lg"
            >
              List
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter mr-4 text-lg"
            >
              Dropdown
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter mr-4 text-lg"
            >
              Translate
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
