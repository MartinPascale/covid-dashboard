import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'react-google-charts';

import NavBar from '../components/NavBar';
import ListCasos from '../components/ListCasos';
import Cantidades from '../components/Cantidades';
import AgregarCasos from '../components/AgregarCasos';

import '../styles/containers/Dashboard.scss';
import { getGrafico } from '../helpers/requestHelpers';

const Dashboard = (props) => {
  const [data, setData] = useState([]);

  const realData = [
    ['Mes', 'Casos Confirmados'],
    ['Marzo', data[2]],
    ['Abril', data[3]],
    ['Mayo', data[4]],
    ['Junio', data[5]],
    ['Julio', data[6]],
    ['Agosto', data[7]],
  ];

  const x = [
    ['Mes', 'Casos Confirmados'],
    ['Marzo', 10],
    ['Abril', 23],
    ['Mayo', 34],
    ['Junio', 89],
    ['Julio', 89],
    ['Agosto', 89],
  ];

  const options = {
    chart: {
      title: 'Curva de infección COVID-19',
      subtitle: 'Confirmados vs Activos',
    },
  };

  return (
    <div className='dashboard'>
      <NavBar />
      <Cantidades />
      <div className='dashboard__middle'>
        <ListCasos />
        <AgregarCasos />
      </div>
      <div className='dashboard__chart'>
        <Chart
          chartType='Line'
          width='100%'
          height='400px'
          data={x}
          options={options}
        />
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
