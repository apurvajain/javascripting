const person={
    firstName:'Michael',
    lastName:'Scott',
    joinName:function(){
        return this.firstName+" "+this.lastName;
    }
}

const greeting=function(greetingType){
    var fullName=this.joinName();
    console.log(`${greetingType} ${fullName}`);
}

var greetingByName=greeting.bind(person,"Good Morning");

greetingByName()