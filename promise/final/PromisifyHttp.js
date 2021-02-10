const https=require('https');


function httpRequest(url){
    return new Promise(function (resolve,reject){

        https.get(url,function(response){

            let data="";
            response.on("data",function(chunk){
                data+=chunk;
            })
            response.on("end",function(){
                const jsonData=JSON.parse(data);
                resolve(jsonData);
            })

        })
        .on("error",function(error){
            reject(error);
        })

    })
}


function getCountryAndNeighbourData(country){
    httpRequest(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(function(countryData){
        console.log(countryData);
        const [neighbour]=countryData[0].borders;
        if(!neighbour){
            return;
        }
        return  httpRequest(`https://restcountries.eu/rest/v2/name/${neighbour}`);
    })
    .then(function(neighbourData){
        console.log(neighbourData);
    })

}
getCountryAndNeighbourData('germany');