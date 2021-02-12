function all(promise1, promise2) {
 
  var arr = []
  return new Promise( (resolve, reject) => {
    let counter = 0;
      promise1.then((res) => {
        arr[0] = res;
        counter++;

        if(counter >= 2) resolve(arr)
      });

      promise2.then((res) => {
        arr[1] = res;
         counter++

         if(counter >= 2)   resolve(arr)
         });
      }).then(console.log)

}



all(getPromise1(), getPromise2())




module.exports = all