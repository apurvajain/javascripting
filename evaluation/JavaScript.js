const fetch = require("node-fetch");
var names=[];
function start()
{
    console.log("Hello")
}


function getdata()
{
    var a=[];
    bool=1

    // fetch("https://randomuser.me/api")

    // if (typeof localStorage === "undefined" || localStorage === null) {
    //     var LocalStorage = require('node-localstorage').LocalStorage;
    //     localStorage = new LocalStorage('./scratch');
    //   }
       
    //   localStorage.setItem('myFirstKey', 'myFirstValue');
    //   console.log(localStorage.getItem('myFirstKey'));

    const getName = (data) => 
    {
        //console.log("hello 2");
    let {results} = data;

    let [profile] = results;

    for (person in [profile])
    {
        namePerson=[profile][person].name.title+" "+[profile][person].name.first+" "+[profile][person].name.last;
        //console.log(namePerson)
        return namePerson;
    }

    console.log([profile])

    };

    const getAUserProfile = () => 
    {
        var nameOfUser;
        const api = 'https://randomuser.me/api/';
    
        // make API call here
    
        fetch(api)
        .then((resp) => resp.json())
        // .then(data => {getName(data)});  //this line is changed
        .then(function(data){
            var nameOfUser=getName(data);
            names.push(nameOfUser);
            console.log(names)
            //console.log(typeof nameOfUser)
            //console.log(nameOfUser);
        });

        //console.log(names)
        //return names;
        //console.log(nameOfUser);
        //return nameOfUser;
    
        //notify(`requesting profile data ...`);
    }; 

    while(bool)
    {
    for(let i=0; i<3; i++)
    {
   getAUserProfile();
    }
    return a;
    bool=0;
    }

}

function printNames()
{
    console.log(names)
}

function createList()
{
    var obj=[];
    obj=[{name:names[0], wealth:}, {name:names[1], wealth:}, {name:names[2], wealth:}]

}

start();
getdata();
setTimeout(function(){ printNames(); }, 3000);
createList();



