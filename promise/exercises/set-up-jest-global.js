const first = () => {
  return Promise.resolve("SECRET");
};

const second = (message) => {
  return Promise.resolve(message);
};

function getPromise1(){
  return Promise.resolve('Promise1');
}
function getPromise2(){
  return Promise.resolve('Promise2');
}


//for jest to know about these global
global.first = first;
global.second = second;

global.getPromise1 = getPromise1
global.getPromise2 = getPromise2
