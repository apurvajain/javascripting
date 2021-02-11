
var https = require("q-io/http")

https.read('http://localhost:7000')
.then((response) => {
    stringResponse=response.toString();
    return https.read(`http://localhost:7001/${stringResponse}`);
})
.then((response)=>console.log(JSON.parse(response)));
