import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Config = (props) => {
  const secretPassword = 'UuNR,2@ge;__w~Lg';
  const [password, setPassword] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [URL, setURL] = useState('');

  const handlePasswordCheck = () => {
    if (password === secretPassword) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleURLChange = () => {
    localStorage.setItem('baseURL', URL);
  };

  return (
    <div className='config'>
      <div className='config__box'>
        <div className='config__box__title'>Cambiar baseURL</div>
        {!isCorrect ? (
          <div>
            <label>
              Ingresa el pin secreto
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button onClick={handlePasswordCheck}>Ingresar</button>
          </div>
        ) : (
          <div>
            <label>
              Ingresa la nueva url
              <input value={URL} onChange={(e) => setURL(e.target.value)} />
            </label>
            <button onClick={handleURLChange}>Cambiar URL</button>
          </div>
        )}
      </div>
    </div>
  );
};

Config.propTypes = {};

export default Config;
