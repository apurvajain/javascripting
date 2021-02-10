//The slice() method returns the selected elements in an array, as a new array object.

//The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

var color= ["Red", "Orange", "Blue", "Green", "Yello"];

//return value at index at 1,2
var selectedColors = color.slice(1, 3);
console.log(selectedColors)


//return all the values at index starting from 1 till end
selectedColors = color.slice(1);
console.log(selectedColors)

//returns last index value
selectedColors = color.slice(-1);
console.log(selectedColors)