import axios from 'axios';

const api = process.env.REACT_APP_PET_FINDER_BASE_URL;

const authBody = {
  grant_type: 'client_credentials',
  client_id: process.env.REACT_APP_PET_FINDER_CLIENT_ID,
  client_secret: process.env.REACT_APP_PET_FINDER_CLIENT_SECRET
};
export const getAuthenticated = () =>
  axios
    .post(`${api}/oauth2/token`, authBody, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(resp => {
      if (resp.status === 200) {
        sessionStorage.setItem('token', resp.data.access_token);
      }
    })
    .catch(console.error);

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${sessionStorage.getItem('token')}`
};

export const getBreeds = type =>
  axios
    .get(`${api}/types/${type}/breeds`, { headers })
    .then(response => response.data);
