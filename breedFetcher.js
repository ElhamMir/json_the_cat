const request = require('request');
console.log(typeof body);

const fetchBreedDescription = function(name, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${name}`;
  request(url, (err, res, body) => {

    if (err) {
      callback(`Failed ${err}`,null);
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      callback(null,breed.description);
    } else {
      callback(`Failed ${name}`,null);
    }
  });
  
};
module.exports = { fetchBreedDescription };
