//add 10 to every number of array

const numArray = [1, 2, 3, 4, 5];

function recursiveMap(arr, func, sumArr) {
  if (arr.length === 0) {
      console.log('here')
    return sumArr;
  }

  sumArr.push(func(arr[0]));
  recursiveMap(arr.slice(1), func, sumArr);
  return sumArr;
}

const sumArray = recursiveMap(numArray, function (item) {
  return item+10;
},[]);

console.log(sumArray);
