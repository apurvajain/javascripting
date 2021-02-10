const https = require("https");

function getCountryData(country) {
  https
    .get(`https://restcountries.eu/rest/v2/name/${country}`, (resp) => {
      let data = "";

      // A chunk of data has been received.
      resp.on("data", (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on("end", () => {
        console.log(`Data Received ${country}: `)
        console.log(JSON.parse(data));
        console.log(`<---------END--------->`)
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
}

getCountryData("portugal");
getCountryData("india");
getCountryData("germany");
