//my object
var person={

    firstName:'Kartik',
    lastName:'Aryan',

    }

//my function

function getFullname(des){
    console.log(des+" "+this.firstName+" "+this.lastName)
}

const myName=getFullname.bind(person,"Mr.")
myName()

