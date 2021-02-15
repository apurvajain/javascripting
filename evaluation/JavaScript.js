const fetch = require("node-fetch");
const { exitCode } = require("process");
var names=[];
var obj=[];
function start()
{
    console.log("Welcome to the user wealth management system")
}

function printList()
{
    for(object in obj)
    {
        console.log("name: "+obj[object].name+" wealth :"+obj[object].wealth);

    }
    console.log("---------------------------------");
}

function updateList()
{
    const prompt = require('prompt-sync')();
    const newName=(prompt("Enter name "));
    const newWealth=parseInt(prompt("Enter wealth "));

    var newMember={name: newName, wealth: newWealth}
    obj.push(newMember);
    printList();
    menu();

}

function exitCode1()
{
    throw new Error("Stop script");


}

function doubleMoney()
{
    for(object in obj)
    {
        obj[object].wealth=obj[object].wealth*2;
        console.log("name: "+obj[object].name+" wealth :"+obj[object].wealth);

    }
    console.log("---------------------------------");

    printList();
    menu();

}

function calcTotalWealth()
{
    var sum=0;
    for(object in obj)
    {
        sum+=obj[object].wealth;
        //console.log("Total wealth is :"+sum);

    }
    console.log("Total wealth is :"+sum);
    console.log("---------------------------------");

    //printList();
    menu();

}

function showMillionaire()
{
    for(object in obj)
    {
        if(obj[object].wealth>=1000000)
        console.log("name: "+obj[object].name+" wealth :"+obj[object].wealth);

    }
    //printList();
    menu();

}

function sortByRichest()
{

    //console.log(obj.sort((a, b) => (a.wealth < b.wealth) ? 1 : -1));
    sorted=obj.sort((a, b) => (a.wealth < b.wealth) ? 1 : -1);
    for(object in sorted)
    {
        console.log("name: "+sorted[object].name+" wealth :"+sorted[object].wealth);

    }
    menu();

}

function menu()
{
    console.log("Please select option")
    console.log("1. Add user print new user list")
    console.log("2. Double money and print updated list")
    console.log("3. Show only millionaires")

    console.log("4. Sort by richest")

    console.log("5. Calculate total wealth and print")

    console.log("6. Exit")

    const prompt = require('prompt-sync')();
    const option=parseInt(prompt("Enter option "));
    //const var2=parseInt(prompt("Enter number 2"));

    //const var3=var1+var2;
    console.log("You have selected option"+option);
    if(option==1)
    {
        updateList();
    }
    if(option==2)
    {
        doubleMoney();
    }
    if(option==3)
    {
        showMillionaire();
    }
    if(option==4)
    {
        sortByRichest();
    }
    if(option==5)
    {
        calcTotalWealth();
    }
    if(option==6)
    {
        //exitCode1();
    }
    //console.log("---------------------------------");



}

function selectOption()
{

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
            //console.log(names)
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


function createList()
{
    console.log(`<------- User Details: START-------->`);
    obj=[{name:names[0], wealth:1200000}, {name:names[1], wealth:140000}, {name:names[2], wealth:160000}]
    for(object in obj)
    {
        console.log("name: "+obj[object].name+"wealth :"+obj[object].wealth);

    }
    console.log(`<--------- User Details: END---------->`);


}

start();
getdata();
setTimeout(function(){ createList(); }, 2100);
setTimeout(function(){ menu(); }, 2200);


//createList();



