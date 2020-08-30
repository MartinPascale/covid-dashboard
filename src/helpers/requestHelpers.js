import axios from 'axios';
import { GoogleSpreadsheet } from 'google-spreadsheet';

import { setDepartamentos, setCasos } from '../reducers/actions';

export const getURL = async () => {
  const doc = new GoogleSpreadsheet(
    '1DgPNrwIg5e1NSLKCGnHP5iqxctnEwToAa7kN9jZzf5w'
  );
  doc.useApiKey('AIzaSyCGTXQtR5IK2ko9rTkA4XxzZpcafBb76sA');
  await doc.loadInfo(); // loads sheets
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  localStorage.setItem('baseURL', rows[0].baseURL);
};

export const baseURL = localStorage.getItem('baseURL');

export const login = async (username, password, history, displayToast) => {
  try {
    const response = await axios.post(
      `${baseURL}/login`,
      { username, password },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    displayToast(false, username);
    localStorage.setItem('isAuthenticated', true);
    await new Promise((r) => setTimeout(r, 800));
    history.push('/');
  } catch (error) {
    displayToast(true, username);
    console.error(error);
  }
};

export const signUp = async (
  username,
  email,
  password,
  entidad,
  displayToast
) => {
  try {
    const response = await axios.post(
      `${baseURL}/registro`,
      { username, email, password, entidad, tipo: 2 },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    displayToast(false);
  } catch (error) {
    displayToast(true);
    console.error(error);
  }
};

export const getCasos = async (setList, dispatch) => {
  try {
    const response = await axios.get(`${baseURL}/casos`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    setList(response.data.casos);
    dispatch(setCasos(response.data.casos));
  } catch (error) {
    console.error(error);
  }
};

export const getCasosHoy = async (setList) => {
  try {
    const response = await axios.get(`${baseURL}/casoshoy`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    setList(response.data.casos);
  } catch (error) {
    console.error(error);
  }
};

export const addCaso = async (caso, history) => {
  try {
    await axios.post(`${baseURL}/caso`, caso, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    history.push('/');
  } catch (error) {
    console.error(error);
  }
};

export const editCaso = async (documento, caso, history) => {
  try {
    const response = await axios.put(`${baseURL}/editar/${documento}`, caso, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    console.log(response.data);
    history.push('/');
  } catch (error) {
    console.error(error);
  }
};

export const getGrafico = async (setGrafico, setDisplayGraph) => {
  try {
    const {
      data: { datos },
    } = await axios.get(`${baseURL}/grafico`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      proxy: {
        host: 'https://127.0.0.1',
        port: 4000,
      },
    });

    const data = [
      ['Mes', 'Casos Totales'],
      ['Marzo', datos.Mar],
      ['Abril', datos.Abr],
      ['Mayo', datos.May],
      ['Junio', datos.Jun],
      ['Julio', datos.Jul],
      ['Agosto', datos.Ago],
    ];

    setGrafico(data);
    setDisplayGraph(true);
  } catch (error) {
    console.error(error);
  }
};

export const getDepartamentos = async (dispatch) => {
  try {
    const response = await axios.get(`${baseURL}/departamentos`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    dispatch(setDepartamentos(response.data.casos));
  } catch (error) {
    console.error(error);
  }
};
