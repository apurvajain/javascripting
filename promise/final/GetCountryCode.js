const https = require("https");

function getCountryData(country) {
    https
    .get(`https://restcountries.eu/rest/v2/name/${country}`, (resp) => {
      let data = "";
      resp.on("data", (chunk) => {
        data += chunk;
      });
      resp.on("end", () => {
        console.log(`<--------${country}: START-------->`);
        console.log(JSON.parse(data));
        console.log(`<---------${country}: END--------->`);
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
}

getCountryData("portugal");
getCountryData("usa");
getCountryData("germany");