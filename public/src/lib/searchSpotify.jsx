import axios from 'axios';

const searchSpotify = (type, query, cb) => {
  if (!query.length) {
    return;
  }
  let data = {
    q: query,
    type: type,
    limit: 50
  };
  axios.get('https://api.spotify.com/v1/search', {params: data})
  .then((results) => {
    cb(results.data);
  })
  .catch((err) => {
    console.error(err);
  });
};

export default searchSpotify;
