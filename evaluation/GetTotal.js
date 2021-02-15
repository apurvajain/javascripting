if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }

  function getTotal(){
    var total=0;
    for (var i = 0; i < localStorage.length; i++) {

        // set iteration key name
        var key = localStorage.key(i);
      
        // use key name to retrieve the corresponding value
        var value = parseFloat(localStorage.getItem(key));

        total+=value
        // console.log the iteration key and value
        

        
  }
  console.log("Total is: "+ total)
}
getTotal()