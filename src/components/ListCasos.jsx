import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getCasos } from '../helpers/requestHelpers';

import '../styles/containers/ListCasos.scss';

const ListCasos = (props) => {
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [length, setLength] = useState(6);

  useEffect(() => {
    getCasos(setList);
  }, []);

  const handleSearch = () => {
    if (name) {
      const searchedList = list.filter((caso) => caso.nombre === name);
      setList(searchedList);
    } else {
      getCasos(setList);
    }
  };

  return (
    <div className='wrapper'>
      <ul className='list'>
        <li className='list__titles'>
          <input
            className='list__titles__title'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Nombre:'
          />
          <input
            className='list__titles__title'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Apellido:'
          />
          <div>Departamento:</div>
          <div>Estado:</div>
          <button className='list__titles__search' onClick={handleSearch}>
            Buscar
          </button>
        </li>
        {list && list.length > 0 ? (
          list.slice(0, length).map((caso) => (
            <li className='list__caso'>
              <div className='list__caso__nombre'>{caso.nombre}</div>
              <div className='list__caso__nombre'>{caso.apellido}</div>
              <div className='list__caso__departamento'>
                {caso.departamento}
              </div>
              <div className='list__caso__estado'>{caso.estado}</div>
              <Link
                to={{
                  pathname: `/casos/${caso.id}/editar`,
                  state: { estado: 'Confirmado' },
                }}
                className='list__caso__link'
              >
                Editar
              </Link>
            </li>
          ))
        ) : (
          <div className='list__empty'>Aun no hay casos</div>
        )}
        {list && list.length > length && (
          <button
            className='list__more-button'
            onClick={() => setLength(length + 10)}
          >
            Mostrar Más
          </button>
        )}
      </ul>
    </div>
  );
};

ListCasos.propTypes = {};

export default ListCasos;
