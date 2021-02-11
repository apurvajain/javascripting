const rejected = Promise.reject(new Error('ERROR'));

rejected
  .catch((err) => console.log(err.message));

module.exports = {rejected}