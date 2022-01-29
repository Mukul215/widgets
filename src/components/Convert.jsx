import { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ selected, text, googleApiKey }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setdebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setdebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: selected.value,
            key: googleApiKey,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [selected, debouncedText, googleApiKey]);

  return (
    <div>
      <h1 className='text-2xl'>{translated}</h1>
    </div>
  );
};

export default Convert;
