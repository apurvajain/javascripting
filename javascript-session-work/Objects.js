const address={
    city:'blr',
    state:'karnataka',
    getAddress:function(){
        return this.city+" "+this.state
    }
}

for(i in address)
{
    console.log(address[i])
}
console.log(address.city)
console.log(address.getAddress())

//keys
console.log(Object.keys(address))
//values
console.log(Object.values(address))

//adding property
address.pincode=311001
console.log(address)

//deleting property
//delete address.state



//tempAdress is not a copy of address, it is the address
//so changes will reflect in both of them

const tempAddress=address
address.city='jaipur'
console.log(address)
console.log(tempAddress)

