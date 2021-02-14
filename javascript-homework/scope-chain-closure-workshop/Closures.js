function foo() {
  var bar;
  quux = 2;
  function zip() {
    var quux = 5;
    bar = true;
  }
  return zip;
}
