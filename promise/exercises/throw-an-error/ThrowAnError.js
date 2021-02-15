function parsePromised() {
  try {
    const data = JSON.parse(process.argv[2]);
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err.message);
  }
}

const usePromise = () => {
  parsePromised().then(console.log, console.log);
};

usePromise();
module.exports = {
  parsePromised,
  usePromise,
};
