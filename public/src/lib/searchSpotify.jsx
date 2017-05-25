import axios from 'axios';

const searchSpotify = (type, query, cb) => {
  let data = {
    q: query,
    type: type,
    limit: 50
  };
  axios.get('https://api.spotify.com/v1/search', {params: data})
  .then((results) => {
    console.log('Success!');
    console.log(results);
    cb(results);
  })
  .catch((err) => {
    console.log('Error...');
    console.log(err);
  });
};

export default searchSpotify;
