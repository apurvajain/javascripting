const first = () => {
  return Promise.resolve("SECRET");
};

const second = (message) => {
  return Promise.resolve(message);
};

//for jest to know about these global
global.first = first;
global.second = second;
