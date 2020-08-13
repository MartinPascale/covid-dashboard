import axios from 'axios';

const baseURL = 'http://127.0.0.1:4000';

export const getCasos = async (setList) => {
  try {
    const response = await axios.get(`${baseURL}/casos`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      proxy: {
        host: 'https://127.0.0.1',
        port: 4000,
      },
    });
    setList(response.data.casos);
  } catch (error) {
    console.log(error);
  }
};

export const getGrafico = async (setGrafico) => {
  try {
    const response = await axios.get(`${baseURL}/casos/grafico`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      proxy: {
        host: 'https://127.0.0.1',
        port: 4000,
      },
    });
    setGrafico(response.grafico);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (username, password) => {
  try {
    const response = await axios.post(
      `${baseURL}/usuarios/login`,
      { username, password },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        proxy: {
          host: 'https://127.0.0.1',
          port: 4000,
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (username, email, password, entidad) => {
  try {
    const response = await axios.post(
      `${baseURL}/usuarios/registro`,
      { username, email, password, entidad, tipo: 2 },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        proxy: {
          host: 'https://127.0.0.1',
          port: 4000,
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
