function parsedPromise(json_data) {
    return new  Promise((resolve, reject) => {
       try {
           resolve(JSON.parse(json_data))
       }
       catch(error){
           reject(error.message)
       }
    })
}

parsedPromise(process.argv[2]).then(console.log).catch(console.log)

module.exports = parsedPromise