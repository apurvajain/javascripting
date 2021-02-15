const { count } = require('console');

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }

  function getRichest(){
      var max=-999
      var name=""
    for (var i = 0; i < localStorage.length; i++) {

        // set iteration key name
        var key = localStorage.key(i);
      
        // use key name to retrieve the corresponding value
        var value = parseFloat(localStorage.getItem(key));

        if (value>max)
        {
            max=value 
            name=key

        }
      
        
        

    
  }
  console.log("Richest man is ")
  console.log(': ' + name + ', Value: ' + max);  

}
getRichest()