import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import confirmados from '../assets/confirmados.svg';
import fallecidos from '../assets/fallecidos.svg';
import recuperados from '../assets/recuperados.svg';

import '../styles/components/AgregarCasos.scss';

const AgregarCasos = (props) => {
  return (
    <div className='agregar'>
      <div className='agregar__title'>Ingresar</div>
      <div className='agregar__container'>
        <div className='agregar__container__confirmados'>
          <img src={confirmados} />
        </div>
        <div className='agregar__container__middle'>
          <Link
            to={{
              pathname: '/casos/alta',
              state: { estado: 'Confirmado' },
            }}
          >
            Caso Confirmado
          </Link>
        </div>
        <div className='agregar__container__right'>+</div>
      </div>
      <div className='agregar__container'>
        <div className='agregar__container__confirmados'>
          <img src={recuperados} />
        </div>
        <div className='agregar__container__middle'>
          <Link
            to={{
              pathname: '/casos/alta',
              state: { estado: 'Recuperado' },
            }}
          >
            Recuperado
          </Link>
        </div>
        <div className='agregar__container__right'>+</div>
      </div>
      <div className='agregar__container'>
        <div className='agregar__container__confirmados'>
          <img src={fallecidos} alt='fallecidos' />
        </div>
        <div className='agregar__container__middle'>
          <Link
            to={{
              pathname: '/casos/alta',
              state: { estado: 'Fallecido' },
            }}
          >
            Fallecimiento
          </Link>
        </div>
        <div className='agregar__container__right'>+</div>
      </div>
    </div>
  );
};

AgregarCasos.propTypes = {};

export default AgregarCasos;
