import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../styles/containers/Login.scss';
import { Link, useHistory } from 'react-router-dom';
import { signUp } from '../helpers/requestHelpers';

const Signup = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [entidad, setEntidad] = useState('');

  const handleSignUp = () => {
    signUp(name, email, password, entidad);
    history.push('/');
  };

  return (
    <div className='login'>
      <div className='login__form'>
        <h1>Registro</h1>
        <input
          className='login__form__input'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='login__form__input'
          placeholder='Usuario'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className='login__form__input'
          placeholder='Contraseña'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className='login__form__input'
          placeholder='Entidad'
          value={entidad}
          onChange={(e) => setEntidad(e.target.value)}
        />
        <div className='login__form__bottom'>
          <button onClick={handleSignUp}>REGISTRARSE</button>
          <div className='login__form__bottom__link'>
            Ya tienes una cuenta? <Link to='/login'>Iniciar sesión</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Signup.propTypes = {};

export default Signup;
