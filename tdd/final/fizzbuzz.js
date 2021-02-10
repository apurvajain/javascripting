function fizzbuzz(value) {
    if(value%3===0)
    {
        if(value%5==0)
        {
            return 'FizzBuzz'
        }
        return 'Fizz'
    }
    if(value%5===0)
    {
        return 'Buzz'
    }

   return value.toString()
}

module.exports=fizzbuzz