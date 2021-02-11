const fetch = require("node-fetch");


const fetchDataHandler = (url,errorMessage) => {
    return fetch(url).then(response=>{
        if (!response.ok) {
            throw new Error(`${errorMessage} ${response.status}`);
        }
        return response.json();
    });   
};

function getCountryAndNeighbour(country) {
    fetchDataHandler(`https://restcountries.eu/rest/v2/name/${country}`,'COUNTRY NOT FOUND!')
        .then((countryData)=> {
            console.log(countryData);
            const [neighbour] = countryData[0].borders;
            if (!neighbour) return;
            return fetchDataHandler(`https://restcountries.eu/rest/v2/alpha/${neighbour}`,'NEIGHBOUR NOT FOUND!');
        })
        .then((neighbourData) => {
            console.log(neighbourData);
        })
        .catch((err) => {
            console.log(err.message);
        });
}



getCountryAndNeighbour("Barack");

// how can we optimize this?