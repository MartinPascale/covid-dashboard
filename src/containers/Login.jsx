import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../styles/containers/Login.scss';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../helpers/requestHelpers';

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login(username, password);
  };

  return (
    <div className='login'>
      <div className='login__form'>
        <h1>Ingresar</h1>
        <input
          className='login__form__input'
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className='login__form__input'
          placeholder='Contraseña'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='login__form__bottom'>
          <button onClick={handleLogin} disabled={!username || !password}>
            INGRESAR
          </button>
          <div className='login__form__bottom__link'>
            No tienes cuenta? <Link to='/signup'>Crea una aquí.</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
