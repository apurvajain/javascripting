const https = require("https");
function httpRequest(url){
    return new Promise (function(resolve, reject){
        https.get(url,(resp)=>{
            let data = "";
            resp.on("data",(chunk)=>{
                 data += chunk;
            });
            resp.on("end",()=>{
                resolve(JSON.parse(data));
            });            
        }).on("error",(err)=>{
            console.log("Error:" + err.message);
        });
    });
}

httpRequest('https://restcountries.eu/rest/v2/name/usa')
.then(function(countryData){
    const [neighbour] = countryData[0].borders;
    if(!neighbour) return;
    return httpRequest(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
}).then(function(neighbourData){
  
   console.log(neighbourData);
});
