import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import NavBar from '../components/NavBar';
import { addCaso, editCaso } from '../helpers/requestHelpers';

import '../styles/containers/AltaCasos.scss';

const AltaCasos = ({
  isModify,
  location: { state },
  match: {
    params: { id },
  },
}) => {
  const [nombre, setNombre] = useState(
    (state && state.caso && state.caso.nombre) || ''
  );
  const [apellido, setApellido] = useState(
    (state && state.caso && state.caso.apellido) || ''
  );
  const [documento, setDocumento] = useState(
    (state && state.caso && state.caso.documento) || ''
  );
  const [edad, setEdad] = useState(
    (state && state.caso && state.caso.edad) || ''
  );
  const [estado, setEstado] = useState(
    (state && state.caso && state.caso.estado) || (state && state.estado) || ''
  );
  const [domicilio, setDomicilio] = useState(
    (state && state.caso && state.caso.domicilio) || ''
  );
  const [departamento, setDepartamento] = useState(
    (state && state.caso && state.caso.departamento) || ''
  );
  const [telefono, setTelefono] = useState(
    (state && state.caso && state.caso.telefonos) || ''
  );

  const history = useHistory();

  const caso = {
    nombre,
    apellido,
    documento,
    edad,
    estado,
    domicilio,
    departamento,
    telefono,
  };

  const departamentos = [
    'Artigas',
    'Canelones',
    'Cerro Largo',
    'Colonia',
    'Durazno',
    'Flores',
    'Florida',
    'Lavalleja',
    'Maldonado',
    'Montevideo',
    'Paysandú',
    'Rio Negro',
    'Rivera',
    'Rocha',
    'Salto',
    'San Jose',
    'Soriano',
    'Tacuarembó',
    'Treinta y Tres',
  ];

  const handleSubmit = () => {
    if (!isModify) {
      addCaso(caso, history);
    } else {
      editCaso(documento, caso, history);
    }
  };

  return (
    <div className='alta-casos'>
      <NavBar />
      <form className='alta-casos__form'>
        <h1>{isModify ? 'Editar Caso' : 'Alta Caso'}</h1>
        <div className='alta-casos__form__inputs'>
          <div className='alta-casos__form__inputs__wrapper'>
            <label>Nombre</label>
            <input
              className='alta-casos__form__inputs__wrapper__input'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className='alta-casos__form__inputs__wrapper'>
            <label>Apellido</label>
            <input
              className='alta-casos__form__inputs__wrapper__input'
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <div className='alta-casos__form__inputs__wrapper'>
            <label>Documento</label>
            <input
              type='number'
              className='alta-casos__form__inputs__wrapper__input'
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
            />
          </div>
          <div className='alta-casos__form__inputs__wrapper'>
            <label>Edad</label>
            <input
              type='number'
              className='alta-casos__form__inputs__wrapper__input'
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
            />
          </div>
          <div className='alta-casos__form__inputs__wrapper select'>
            <label>Estado</label>
            <select
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              className='alta-casos__form__inputs__wrapper__input'
            >
              <option>Confirmado</option>
              <option>Fallecido</option>
              <option>Recuperado</option>
              <option>Sospechoso</option>
            </select>
          </div>
          <div className='alta-casos__form__inputs__wrapper'>
            <label>Domicilio</label>
            <input
              className='alta-casos__form__inputs__wrapper__input'
              value={domicilio}
              onChange={(e) => setDomicilio(e.target.value)}
            />
          </div>
          <div className='alta-casos__form__inputs__wrapper select'>
            <label>Departamento</label>
            <select
              className='alta-casos__form__inputs__wrapper__input'
              onChange={(e) => setDepartamento(e.target.value)}
              value={departamento}
            >
              {departamentos.map((departamento) => (
                <option>{departamento}</option>
              ))}
            </select>
          </div>
          <div className='alta-casos__form__inputs__wrapper'>
            <label>Telefono</label>
            <input
              className='alta-casos__form__inputs__wrapper__input'
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
        </div>
        <button
          className='alta-casos__form__button'
          type='button'
          onClick={handleSubmit}
          disabled={
            !(
              telefono &&
              departamento &&
              domicilio &&
              estado &&
              edad &&
              documento &&
              apellido &&
              nombre
            )
          }
        >
          {isModify ? 'Editar' : 'Agregar'}
        </button>
      </form>
    </div>
  );
};

AltaCasos.propTypes = {
  isModify: PropTypes.bool.isRequired,
};

export default AltaCasos;
