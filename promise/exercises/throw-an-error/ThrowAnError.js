//when u pass invalid jsonn it  will  reject
//process.argv = ["", "", '{"obj":{"a":10}']
//{"obj":{"a":10} this is  invalid because only 1 closing }

const parsePromised = () => {
  try {
    const data = JSON.parse(process.argv[2]);
    return Promise.resolve(data);
  } catch (e) {
    return Promise.reject(e.message);
  }
};
const executePromise = () => {
  parsePromised().then(console.log, console.log);
};

module.exports = {
  parsePromised,
  executePromise,
};
