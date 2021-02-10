const https = require("https");

function getCountryAndNeighbour(country) {
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
        console.log(`Data Received ${country}: `)
        console.log(parsedData);
        console.log(`<---------END--------->`)

        // Get neighbour country 2
        const [neighbour, neigh] = parsedData[0].borders;
        if (!neigh) return;

        https.get(
          `https://restcountries.eu/rest/v2/alpha/${neigh}`,
          (resp) => {
            let data = "";

            // A chunk of data has been received.
            resp.on("data", (chunk) => {
              data += chunk;
            });

            resp.on("end", () => {
                console.log(`Data Received ${country}: `)
                console.log(JSON.parse(data));
                console.log(`<---------END--------->`)
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
