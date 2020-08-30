import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { useHistory, Link } from 'react-router-dom';
import { setIsAuthenticated } from '../reducers/actions';

import logo from '../assets/logo.png';

import '../styles/components/NavBar.scss';

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.toJS().isAuthenticated);

  const handleLogout = () => {
    localStorage.setItem('isAuthenticated', false);
    dispatch(setIsAuthenticated(false));
    history.push('/');
  };

  return (
    <nav className='nav-bar'>
      <div>
        <img src={logo} alt='pandem logo' height={45} width={65} />
        <button onClick={() => history.push('/')}>PANDEM 2020</button>
      </div>

      {isAuthenticated ? (
        <div>
          <div>
            <Link to='/signup'>Registrar</Link>
          </div>
          <div>
            <button onClick={handleLogout}>Salir</button>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <Link to='/login'>Iniciar</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

NavBar.propTypes = {};

export default NavBar;
