import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link, useHistory } from 'react-router-dom';
import { login } from '../helpers/requestHelpers';

import '../styles/containers/Login.scss';
import { setIsAuthenticated } from '../reducers/actions';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const displayToast = (isError, username) => {
    if (isError) {
      toast.error(`Lo sentimos, ${username.toLowerCase()}, ocurrió un error`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success(`Bienvenido, ${username}!`, {
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

  const handleLogin = () => {
    login(username, password, history, displayToast);
  };

  return (
    <div className='login'>
      <ToastContainer />
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
