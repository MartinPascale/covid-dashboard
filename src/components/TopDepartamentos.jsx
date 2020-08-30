import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import '../styles/components/TopDepartamentos.scss';

const TopDepartamentos = () => {
  const departamentos = useSelector((state) => state.toJS().departamentos);

  return (
    <div className='top-departamentos'>
      <div className='top-departamentos__titulo'>Top Departamentos</div>
      <div className='top-departamentos__lista__departamento'>
        <div className='top-departamentos__lista__departamento__nombre fixed'>
          Departamento
        </div>
        <div className='top-departamentos__lista__departamento__cantidad fixed'>
          Cantidad
        </div>
      </div>
      <div className='top-departamentos__lista'>
        {departamentos &&
          departamentos.length > 0 &&
          departamentos.map((departamento) => (
            <div
              className='top-departamentos__lista__departamento'
              key={departamento.departamento}
            >
              <div className='top-departamentos__lista__departamento__nombre'>
                {departamento.departamento}
              </div>
              <div className='top-departamentos__lista__departamento__cantidad'>
                {departamento.cantidad}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

TopDepartamentos.propTypes = {};

export default TopDepartamentos;
