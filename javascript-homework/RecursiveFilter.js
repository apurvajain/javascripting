const numArray = [1, 2, 3, 4, 5];

function recursiveFilter(arr, func, newArr) {
    if (arr.length === 0) {
      return newArr;
    }
    if (func(arr[0])){
        newArr.push(arr[0]);
    }
    recursiveFilter(arr.slice(1), func, newArr);
    return newArr;
  }
  
  const filteredArray = recursiveFilter(numArray, function (item) {
    return item>3;
  },[]);
  
  console.log(filteredArray);