function foo() {
    var bar;
    quux = 2;
    function zip() {
      var quux = 9;
      bar = true;
    }
    return zip
  }