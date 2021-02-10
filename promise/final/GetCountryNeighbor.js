const https = require("https");

function getCountryAndNeighbour(country) {
  https
    .get(`https://restcountries.eu/rest/v2/name/${country}`, (resp) => {
      let data = "";

      resp.on("data", (chunk) => {
        data += chunk;
      });

      resp.on("end", () => {
        const parsedData = JSON.parse(data);
        console.log(parsedData);

        // Array destructuring
        const [neighbour] = parsedData[0].borders;

        if (!neighbour) return;

        https.get(
          `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
          (resp) => {
            let data = "";

            resp.on("data", (chunk) => {
              data += chunk;
            });

            resp.on("end", () => {
              console.log(JSON.parse(data));
            });
          }
        );
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
}

getCountryAndNeighbour("usa");
