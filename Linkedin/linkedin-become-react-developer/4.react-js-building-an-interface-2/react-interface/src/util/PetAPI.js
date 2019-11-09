const api = 'http://localhost:8080';

export const getPets = () =>
  fetch(`${api}/pets`)
    .then(data => data.json())
    .catch(e => console.log(e.message));

export const getPet = id =>
  fetch(`${api}/pets/${id}`)
    .then(data => data.json())
    .catch(e => console.log(e.message));
