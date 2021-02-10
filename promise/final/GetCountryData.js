const https=require('https');

function getCountryData(country){
    https.get(`https://restcountries.eu/rest/v2/name/${country}`,function (response){
        let data="";
        response.on("data",function(chunk){
            data+=chunk;
        });
        response.on("end",function(){
            const jsonData=JSON.parse(data);
            console.log(`Data Received for ${country}`);
            console.log(jsonData)
        })
    }).on("error",function(errorMessage){
        console.log(errorMessage);
    })
}

getCountryData('portugal');
getCountryData('usa');
getCountryData('germany');