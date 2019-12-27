const scope = require('./javascript/scope');
const builtin = require('./javascript/builtin');
const objectAndArrays = require('./javascript/objects_array');

scope.run();
builtin.run();
objectAndArrays.run();

const DOG_URL = 'https://dog.ceo/api/breeds/image/random';
const dogContainer = document.querySelector('.dog-container');

const createImage = url => {
  const img = document.createElement('img');
  img.src = url;
  img.alt = 'Random Dog';
  dogContainer.appendChild(img);
};

const addNewDoggo = () => {
  const promise = fetch(DOG_URL);
  promise
    .then(response => response.json())
    .then(response => {
      createImage(response.message);
    });
};

document.querySelector('.add-dog').addEventListener('click', () => addNewDoggo());
