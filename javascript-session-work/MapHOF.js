const birthYear = [1975, 1997, 2002, 1995, 1985];
const age = birthYear.map(function (year) {
  return 2021 - year;
});
//map callback can takes 3 values:element,index,array
//map returns same number if items
const arr1 = [1, 2, 3];
const arr2 = arr1.map(item => item * 2);

console.log(arr2);
console.log(arr1)

//this method does not change the original array.

var item=[
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
]
function getName(item){
    return [item.firstname,item.lastname].join(" ");
}

var names=item.map(getName)
console.log(names)