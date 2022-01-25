import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    // using a callback function to get the search term
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php?', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: searchTerm,
        },
      });

      // setting the results to the data
      setResults(data.query.search);
    };

    if (searchTerm && !results.length) {
      search();
    } else {
      // set timeout to avoid multiple requests
      const timeoutId = setTimeout(() => {
        if (searchTerm) {
          search();
        }
      }, 500);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [searchTerm, results.length]);

  // function to handle the search term and render it on page
  const renderedRestults = results.map((result) => {
    return (
      <ul className='list-reset flex flex-col w-full' key={result.pageid}>
        <li className='relative -mb-px block border p-4 border-grey w-full rounded-lg hover:bg-grey-lightest'>
          <a
            className='py-2 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 right-2 absolute -mt-2'
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
          <span className='text-lg'>{result.title}</span> <br />
          <span
            // dangerouslySetInnerHTML to render the content (do not use it in production)
            dangerouslySetInnerHTML={{ __html: result.snippet }}
            className='text-sm w-1/2 text-gray-600'
          ></span>
          <div></div>
        </li>
      </ul>
    );
  });

  return (
    <React.Fragment>
      <form className='flex'>
        <div className='flex'>
          <div className='mb-3 xl:w-96'>
            <div className='input-group relative flex flex-wrap items-stretch w-full mb-4'>
              <input
                type='search'
                className='form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-1/2'
                placeholder='Search'
                aria-label='Search'
                aria-describedby='button-addon2'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className='btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-r-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center'
                type='button'
                id='button-addon2'
              >
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='search'
                  className='w-4'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                >
                  <path
                    fill='currentColor'
                    d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </form>
      <div>{renderedRestults}</div>
    </React.Fragment>
  );
};

export default Search;
