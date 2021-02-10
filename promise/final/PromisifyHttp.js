const http = require("https")

function httpRequest(url) {
     return new Promise((resolve, reject) => {
         http.get(url, (resp) => {
             let data = "";
             resp.on("data", (chunk) => {
                 data += chunk;
             })
             
             resp.on("end", () => {
                 resolve(JSON.parse(data))
             });

             resp.on("error", (err) => {
                console.log("Error: " + err.message);
                reject(err);
              });
         })

     })

}

function getCountryandNeighbour(country) {
    httpRequest(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((countryData) => {
      console.log(`<--------${country} country: START-------->`);
      console.log(countryData);
      console.log(`<---------${country} country: END--------->`);

      const [neighbour] = countryData[0].borders;
      if (!neighbour) return;
      return httpRequest(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then((neighbourData) => {
      console.log(`<--------${country} neighbour: START-------->`);
      console.log(neighbourData);
      console.log(`<---------${country} neighbour: END--------->`);
    });
}

getCountryandNeighbour("portugal");
