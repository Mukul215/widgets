import { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options }) => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const selectAColor = (color) => {
    setSelected(color);
  };

  const dropdownDivider = () => {
    setIsOpen(!isOpen);
  };

  // useEffect for clicking anywhere on the page to close the dropdown
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setIsOpen(false);
    };
    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      });
    };

    // used to listen for clicks anywhere on the page
    // document.body.addEventListener(
    //   'click',
    //   (e) => {
    //     if (ref.current.contains(e.target)) {
    //       return;
    //     }
    //     setIsOpen(false);
    //   },
    //   {
    //     capture: true,
    //   }
    // );
  }, []);

  // map over the options and display them on the page
  const renderedOptions = options.map((option) => {
    if (option.label === selected.label) {
      return null;
    } else {
      return (
        <li key={option.value}>
          <div
            className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
            onClick={() => selectAColor(option)}
          >
            {option.value}
          </div>
        </li>
      );
    }
  });

  return (
    <>
      <div ref={ref} className='text-md'>
        Select A Color:
      </div>
      <button
        onClick={dropdownDivider}
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-9 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        type='button'
      >
        {selected.label}
        <svg
          className='ml-2 w-4 h-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 9l-7 7-7-7'
          ></path>
        </svg>
      </button>
      <div
        className={`${
          isOpen ? '' : 'hidden'
        } z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
      >
        <ul className='py-1' aria-labelledby='dropdownDividerButton'>
          {renderedOptions}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
