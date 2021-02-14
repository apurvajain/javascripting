function foo() {
    var bar;
    quux = 2;
    //console.log(quux)
    function zip() {
      var quux = 5;
    }
  }
  // foo()
  // You assigned a value to quux, even though foo() doesn't have access to the
  // quux inside zip().