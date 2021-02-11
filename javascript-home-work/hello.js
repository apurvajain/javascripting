a = 1;
var b = 2;
function outer(z) {
  b = 3;
  c = 4;
  var d = 5;
  e = 6;
function inner() {
    var e = 0;
    d = 2 * d;
    return d;
  }
  return inner();
  var e;
}
outer(1);

--------------

var Toaster = (function(){
    var setting = 0;
    var temperature;
    var low = 100;
    var med = 200;
    var high = 300;
    // public
    var turnOn = function(){
        return heatSetting();
    };
    var adjustSetting = function(setting){
        if(setting <= 3){
            temperature = low;
        }if (setting >3  && setting <= 6){
            temperature = med;
        }if (setting > 6 && setting <= 10){
            temperature = high;
}return temperature;
    };
    // private
    var heatSetting = function(adjustSetting){
        var thermostat = adjustSetting;
        return thermostat;
        };
    return{
            turnOn:turnOn,
            adjustSetting:adjustSetting
        };
})();
Toaster.adjustSetting(5);
Toaster.adjustSetting(8);
-----------------------------

function firstName(first){
    function fullName(last){
        console.log(first + " " + last);
    }
    return fullName;
}
var name = firstName("Mister");
name("Smith") // Mister Smith
name("Jones"); //Mister Jones