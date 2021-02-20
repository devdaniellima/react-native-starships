import axios from 'axios';

import Constants from './constants';

const Api = {
  getStarships: (page = 1) =>
    new Promise((resolve, reject) => {
      axios
        .get(`${Constants.endpoint}starships/?page=${page}`)
        .then((result) => {
          resolve(result.data);
        })
        .catch((e) => {
          reject(e);
        });
    }),
};

export default Api;
