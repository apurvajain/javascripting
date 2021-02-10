const https=require('https');

function getCountryAndNeighbourData(country){
    https.get(`https://restcountries.eu/rest/v2/name/${country}`,function (response){
        let data="";
        response.on("data",function(chunk){
            data+=chunk;
        });
        response.on("end",function(){
            const jsonData=JSON.parse(data);
            console.log("Data Received, Moving to other countries");
            const [neighbour]=jsonData[0].borders;
            console.log(neighbour);
            if(!neighbour){
                return;
            }
            https.get(`https://restcountries.eu/rest/v2/name/${neighbour}`,function(response){
                let data="";
                response.on("data",function(chunk){
                    data+=chunk;
                });
                response.on("end",function(){
                    const jsonDataNeighbour=JSON.parse(data);
                    console.log(jsonDataNeighbour);
                })

            })
        })
    }).on("error",function(errorMessage){
        console.log(errorMessage);
    })
}

getCountryAndNeighbourData('germany');
