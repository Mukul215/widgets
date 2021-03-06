import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeItem, setActiveItem] = useState(0);

  const onTitleClicked = (index) => {
    setActiveItem((prevIndex) => (index === prevIndex ? -1 : index));
  };

  return (
    <div className='flex flex-col w-1/2'>
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          <section className='border-b rounded' key={item.title}>
            <article className='border-b'>
              <div className='border-l-2 border-transparent'>
                <header className='flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none'>
                  <span className='text-grey-darkest font-thin text-xl'>
                    {item.title}
                  </span>
                  <div
                    className='rounded-full border border-grey w-7 h-7 flex items-center justify-center'
                    onClick={() => onTitleClicked(index)}
                  >
                    <svg
                      aria-hidden='true'
                      className=''
                      data-reactid='266'
                      fill='none'
                      height='24'
                      stroke='#606F7B'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      width='24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <polyline points='6 9 12 15 18 9'></polyline>
                    </svg>
                  </div>
                </header>
                <div>
                  {activeItem === index ? (
                    <div className='pl-8 pr-8 pb-5 text-grey-darkest'>
                      {item.content}
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          </section>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Accordion;
