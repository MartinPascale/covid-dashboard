import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getCasos } from '../helpers/requestHelpers';

const DepartamentosList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getCasos(setList);
  }, []);

  return <div className='list'></div>;
};

DepartamentosList.propTypes = {};

export default DepartamentosList;
