import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import confirmados from '../assets/confirmados.svg';
import fallecidos from '../assets/fallecidos.svg';
import recuperados from '../assets/recuperados.svg';

import { getCasos } from '../helpers/requestHelpers';

import '../styles/components/Cantidades.scss';

const Cantidades = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getCasos(setList);
  }, []);

  const casosConfirmados =
    list && list.filter((caso) => caso.estado === 'CONFIRMADO');
  const casosFallecidos =
    list && list.filter((caso) => caso.estado === 'FALLECIDO');
  const casosRecuperados =
    list && list.filter((caso) => caso.estado === 'RECUPERADO');

  return (
    <div className='cantidades'>
      <div className='cantidades__box'>
        <div className='cantidades__box__left'>
          <img src={confirmados} />
        </div>
        <div className='cantidades__box__middle'>
          <div>Totales</div>
          <div>{casosConfirmados && casosConfirmados.length}</div>
        </div>
        <div className='cantidades__box__right'>+4</div>
      </div>
      <div className='cantidades__box'>
        <div className='cantidades__box__left'>
          <img src={recuperados} />
        </div>
        <div className='cantidades__box__middle'>
          <div>Recuperados</div>
          <div>{casosRecuperados && casosRecuperados.length}</div>
        </div>
        <div className='cantidades__box__right'>+4</div>
      </div>
      <div className='cantidades__box'>
        <div className='cantidades__box__left'>
          <img src={fallecidos} />
        </div>
        <div className='cantidades__box__middle'>
          <div>Fallecidos</div>
          <div>{casosFallecidos && casosFallecidos.length}</div>
        </div>
        <div className='cantidades__box__right'>+4</div>
      </div>
    </div>
  );
};

Cantidades.propTypes = {};

export default Cantidades;
