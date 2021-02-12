var http = require("q-io/http");

function  httpReq() { 
http.read('http://localhost:7000')
.then((res) => res)
.then(res => {
    http.read(`http://localhost:7001/${res}`)
    .then(JSON.parse)
    .then(console.log)
})
}
httpReq()

module.exports  = httpReq