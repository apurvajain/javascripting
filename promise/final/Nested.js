const https = require("https");

const getCountryAndNeighbour = function (country) {
  https
    .get(`https://restcountries.eu/rest/v2/name/${country}`, (resp) => {
      let data = "";

      // A chunk of data has been received.
      resp.on("data", (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on("end", () => {
        const parsedData = JSON.parse(data);
        console.log(`<--------${country} country: START-------->`);
        console.log(parsedData);
        console.log(`<---------${country} country: END--------->`);

        // Get neighbour country 2
        const [neighbour] = parsedData[0].borders;
        if (!neighbour) return;

        https.get(
          `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
          (resp) => {
            let data = "";

            // A chunk of data has been received.
            resp.on("data", (chunk) => {
              data += chunk;
            });

            resp.on("end", () => {
              console.log(`<--------${country} neighbour: START-------->`);
              console.log(JSON.parse(data));
              console.log(`<---------${country} neighbour: END--------->`);
            });
          }
        );
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
};

getCountryAndNeighbour("portugal");