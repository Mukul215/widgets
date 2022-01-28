import React from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import Search from './components/Search';
import Translate from './components/Translate';
import { items, options, language } from './helper';

const App = () => {
  return (
    <div className='bg-gray-50 w-full h-screen'>
      <Header />
      <div className='flex flex-col items-center pt-28'>
        {/* <Accordion key={items.id} items={items} /> */}
        {/* <Search /> */}
        {/* <Dropdown options={options} /> */}
        <Translate options={language} />
      </div>
    </div>
  );
};

export default App;
