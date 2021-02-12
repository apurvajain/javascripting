function first() {
    return new  Promise((resolve, reject) => {
        resolve('SECRET')
    })
}

function second(res) {
    return new Promise((resolve, reject) => {
        resolve(res)
    })
}

function getPromise1() {
    return new  Promise((resolve, reject) => {
        resolve('a')
    })
  }
  function getPromise2() {
    return new  Promise((resolve, reject) => {
        resolve('b')
    })
  }

process.argv = ["", "", '{"obj":{"a":10}']

global.first = first
global.second = second

global.getPromise1 = getPromise1
global.getPromise2 = getPromise2