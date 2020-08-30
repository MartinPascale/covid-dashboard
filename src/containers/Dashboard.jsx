import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Chart } from 'react-google-charts';
import { ToastContainer, toast } from 'react-toastify';

import { getGrafico } from '../helpers/requestHelpers';

import NavBar from '../components/NavBar';
import ListCasos from '../components/ListCasos';
import Cantidades from '../components/Cantidades';
import AgregarCasos from '../components/AgregarCasos';

import '../styles/containers/Dashboard.scss';
import MapContainer from '../components/Map';
import TopDepartamentos from '../components/TopDepartamentos';

const Dashboard = (props) => {
  const [data, setData] = useState({});
  const [displayGraph, setDisplayGraph] = useState(false);
  const isAuthenticated = useSelector((state) => state.toJS().isAuthenticated);

  useEffect(() => {
    getGrafico(setData, setDisplayGraph);
  }, []);

  const options = {
    chart: {
      title: 'Curva de infección COVID-19',
      subtitle: 'Casos Confirmados',
    },
  };

  return (
    <div className='dashboard'>
      <NavBar />
      <ToastContainer />
      <Cantidades />
      {isAuthenticated && <ListCasos />}
      <div className='dashboard__middle'>
        <MapContainer />
        {isAuthenticated ? <AgregarCasos /> : <TopDepartamentos />}
      </div>
      <div className='dashboard__chart'>
        {displayGraph ? (
          <Chart
            chartType='Line'
            width='100%'
            height='400px'
            loader={<div>Loading Chart</div>}
            data={data}
            options={options}
          />
        ) : (
          <div className='list__empty'>Aún no hay casos</div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
