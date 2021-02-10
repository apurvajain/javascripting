const https = require("https");

// 'data' 'end' are events that happen during response life cycle
function getCountryData(country) {
  https
    .get(`https://restcountries.eu/rest/v2/name/${country}`, (resp) => {
      let data = "";

      resp.on("data", (chunk) => {
        data += chunk;
      });

      resp.on("end", () => {
        console.log(JSON.parse(data));
      });
    })
    .on("error", (err) => {
      console.log("Error:" + err.message);
    });
}

// The order of calling the function is not same as the order of response received as js is async
getCountryData("usa");
