
function repeat(operation, num) {
     operation(num)
}
function operation(num) {
     while(--num){
         operation(num)
     }
}

module.exports = repeat

// function repeat(operation, num) {
//     if (num <= 0) return
//     operation()
//     return repeat(operation, --num)
//   }
  
//   module.exports = repeat