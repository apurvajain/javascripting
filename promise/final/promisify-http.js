const https = require("https");

function httpRequest(url) {
  return new Promise(function (resolve, reject) {
    https
      .get(url, (resp) => {
        let data = "";

        resp.on("data", (chunk) => {
          data += chunk;
        });

        resp.on("end", () => {
          resolve(JSON.parse(data));
        });
      })
      .on("error", (err) => {
        console.log("Error: " + err.message);
        reject(err);
      });
  });
}

function getCountryAndNeighbour(country) {
  httpRequest(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((countryData) => {
      console.log(countryData);
      const [neighbor] = countryData[0].borders;
      if (!neighbor) return;
      return httpRequest(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
    })
    .then((neighborData) => {
      console.log(neighborData);
    });
}
getCountryAndNeighbour("portugal");
