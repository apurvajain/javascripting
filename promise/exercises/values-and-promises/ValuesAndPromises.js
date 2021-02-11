function attachTitle(name) {
    return 'DR. ' + name;
  }
  
  const promise = Promise.resolve('MANHATTAN')
    .then(attachTitle)
    .then(console.log);

module.exports  = {promise}