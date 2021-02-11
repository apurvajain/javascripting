function parsePromised(json) {
    return new Promise(function (fulfill, reject) {
      try {
        fulfill(JSON.parse(json));
      } catch (e) {
        reject(e);
      }
    });
  }
  
  function onReject(error) {
    console.log(error.message);
  }

function executePromise() {
    parsePromised(process.argv[2])
.then({}, onReject);
}
executePromise();
module.exports = {parsePromised, onReject,executePromise}