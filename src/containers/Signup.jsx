import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { signUp } from '../helpers/requestHelpers';
import { setIsAuthenticated } from '../reducers/actions';

import '../styles/containers/Login.scss';

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [entidad, setEntidad] = useState('');

  const handleSignUp = () => {
    signUp(name, email, password, entidad, displayToast);
    history.push('/');
  };

  const displayToast = (isError, message) => {
    if (isError) {
      toast.error(`Ha ocurrido un error`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success(`Resgistrado con exito!`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(setIsAuthenticated(true));
    }
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
