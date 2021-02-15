const { count } = require('console');

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }

  function getMill(){
    for (var i = 0; i < localStorage.length; i++) {

        // set iteration key name
        var key = localStorage.key(i);
      
        // use key name to retrieve the corresponding value
        console.log("*******millionares are********")
        var value = parseFloat(localStorage.getItem(key));

        if (value>=1000000)
        {
            console.log('Key: ' + key + ', Value: ' + value);  

        }
      
        // // console.log the iteration key and value
        // console.log('Key: ' + key + ', Value: ' + value);  

        
  }
}
getMill()