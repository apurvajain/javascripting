function first() { 
    return new Promise((resolve, reject) => { 
        resolve("RESOLVED FIRST")
    })
}

function second(res) { 
    return new Promise((resolve, reject) => { 
        resolve(res)
    })
}

global.first = first

global.second = second

process.argv = ["", "", '{"obj":{"a":10}']