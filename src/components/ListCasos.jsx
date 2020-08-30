import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getCasos } from '../helpers/requestHelpers';
import { setCasos } from '../reducers/actions';

import '../styles/containers/ListCasos.scss';

const ListCasos = ({ isDeps }) => {
  const dispatch = useDispatch();
  const casos = useSelector((state) => state.toJS().casos);

  const [hasSearched, setHasSearched] = useState(false);
  const [list, setList] = useState(casos);
  const [searchedList, setSearchedList] = useState([]);
  const [documento, setDocumento] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [length, setLength] = useState(6);
  const [departamento, setDepartamento] = useState('');
  const [estado, setEstado] = useState('');

  useEffect(() => {
    if (!casos || casos.length === 0) {
      getCasos(setList, dispatch);
    }
  }, []);

  const handleSearch = () => {
    if (name) {
      const searchedList = list.filter((caso) => caso.nombre === name);
      setSearchedList(searchedList);
    } else if (lastName) {
      const searchedList = list.filter((caso) => caso.apellido === lastName);
      setSearchedList(searchedList);
    } else if (documento) {
      const searchedList = list.filter((caso) => caso.documento === documento);
      setSearchedList(searchedList);
    } else if (departamento) {
      const searchedList = list.filter(
        (caso) => caso.departamento === departamento.toUpperCase()
      );
      setSearchedList(searchedList);
    } else if (estado) {
      const searchedList = list.filter((caso) => caso.estado === estado);
      setSearchedList(searchedList);
    }
    setHasSearched(true);
  };

  const hanldeRemove = () => {
    if (hasSearched) {
      setList(casos);
      setLastName('');
      setName('');
      setDepartamento('');
      setEstado('');
      setHasSearched(false);
    }
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

  const finalList = !hasSearched ? list : searchedList;

  return (
    <div className='wrapper'>
      <ul className='list'>
        <li className='list__titles'>
          <input
            className='list__titles__title'
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            placeholder='Documento:'
          />
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
          <select
            className='list__titles__title'
            onChange={(e) => setDepartamento(e.target.value)}
            value={departamento}
            defaultValue='Departamento'
          >
            <option hidden selected>
              Departamento
            </option>
            {departamentos.map((departamento) => (
              <option>{departamento}</option>
            ))}
          </select>
          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value.toUpperCase())}
            className='list__titles__title'
          >
            <option hidden selected>
              Estado
            </option>
            <option>CONFIRMADO</option>
            <option>FALLECIDO</option>
            <option>RECUPERADO</option>
            <option>SOSPECHOSO</option>
          </select>
          <button
            className={
              hasSearched
                ? 'list__titles__search--remove'
                : 'list__titles__search'
            }
            onClick={!hasSearched ? () => handleSearch() : () => hanldeRemove()}
          >
            {!hasSearched ? 'Buscar' : 'X'}
          </button>
        </li>
        {finalList && finalList.length > 0 ? (
          finalList.slice(0, length).map((caso) => (
            <li className='list__caso'>
              <div className='list__caso__nombre'>{caso.documento}</div>
              <div className='list__caso__nombre'>{caso.nombre}</div>
              <div className='list__caso__nombre'>{caso.apellido}</div>
              <div className='list__caso__departamento'>
                {caso.departamento}
              </div>
              <div className='list__caso__estado'>{caso.estado}</div>
              <Link
                to={{
                  pathname: `/casos/${caso.id}/editar`,
                  state: { caso: caso },
                }}
                className='list__caso__link'
              >
                Editar
              </Link>
            </li>
          ))
        ) : (
          <div className='list__empty'>Aún no hay casos</div>
        )}
        {finalList && finalList.length > length && (
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
