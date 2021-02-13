// call method lets us"borrow" a method from one object to use for another

var person={

    firstName:'Kartik',
    lastName:'Aryan',

    fullName:function(){
        console.log(this.firstName+" "+this.lastName+" I am "+ arguments[0]+" . I like "+arguments[1])
    }
}
//person.fullName()

var person1={
    firstName:"Sara",
    lastName:"Khan"
}
person.fullName.call(person1,"actor","chocolates")
person.fullName.apply(person1,['dancer','pizza'])

// ************************//

var Website = {
    updatePageView: function() {
      for(var i = 0; i < arguments.length; i++) {
        this.pageViewNumber += arguments[i];
      }
      return this.pageViewNumber;
    }
  }
  
  var profilePage = {
    name: 'My Web page',
    pageViewNumber: 0
  };
  //console.log(Website.updatePageView.call(profilePage,2,3,4,1))


 