var https = require("q-io/http")

https.read('http://localhost:1337')
    .then(response => JSON.parse(response))
    .then(console.log)