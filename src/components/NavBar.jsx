import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/NavBar.scss';
import { useHistory, Link } from 'react-router-dom';

const NavBar = ({ isAuthenticated }) => {
  const history = useHistory();
  return (
    <nav className='nav-bar'>
      <button onClick={() => history.push('/')}>COVID-19 DASHBOARD</button>
      {isAuthenticated ? (
        <div>
          <div>Salir</div>
        </div>
      ) : (
        <div>
          <div>
            <Link to='/login'>Iniciar</Link>
          </div>
          <Link to='/login'>Registrarse</Link>
        </div>
      )}
    </nav>
  );
};

NavBar.propTypes = {};

export default NavBar;
