function curryN(fn, n) {
  if (!n) {
    n = fn.length;
  }
  return (param) => {
    if (n <= 1) {
      return fn(param);
    }
    return curryN(fn.bind(this, param), n - 1);
  };
}

module.exports = curryN;
