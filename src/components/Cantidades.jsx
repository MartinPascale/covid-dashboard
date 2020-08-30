import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import confirmados from '../assets/confirmados.svg';
import fallecidos from '../assets/fallecidos.svg';
import recuperados from '../assets/recuperados.svg';

import { getCasos, getCasosHoy } from '../helpers/requestHelpers';

import '../styles/components/Cantidades.scss';

const Cantidades = (props) => {
  const dispatch = useDispatch();
  const casos = useSelector((state) => state.toJS().casos);
  const [casosHoy, setCasosHoy] = useState(0);

  useEffect(() => {
    if (!casos || casos.length === 0) {
      getCasos(() => null, dispatch);
    }
    getCasosHoy(setCasosHoy);
  }, []);

  const casosConfirmados =
    casos && casos.filter((caso) => caso.estado === 'CONFIRMADO');
  const casosFallecidos =
    casos && casos.filter((caso) => caso.estado === 'FALLECIDO');
  const casosRecuperados =
    casos && casos.filter((caso) => caso.estado === 'RECUPERADO');

  return (
    <div className='cantidades'>
      <div className='cantidades__box'>
        <div className='cantidades__box__left'>
          <img src={confirmados} alt='casos confirmados' />
        </div>
        <div className='cantidades__box__middle'>
          <div>Confirmados</div>
          <div>{casosConfirmados && casosConfirmados.length}</div>
        </div>
        <div className='cantidades__box__right'>+{casosHoy.length || 0}</div>
      </div>
      <div className='cantidades__box'>
        <div className='cantidades__box__left'>
          <img src={recuperados} alt='casos recuperados' />
        </div>
        <div className='cantidades__box__middle'>
          <div>Recuperados</div>
          <div>{casosRecuperados && casosRecuperados.length}</div>
        </div>
      </div>
      <div className='cantidades__box'>
        <div className='cantidades__box__left'>
          <img src={fallecidos} alt='casos fallecidos' />
        </div>
        <div className='cantidades__box__middle'>
          <div>Fallecidos</div>
          <div>{casosFallecidos && casosFallecidos.length}</div>
        </div>
      </div>
    </div>
  );
};

export default Cantidades;
