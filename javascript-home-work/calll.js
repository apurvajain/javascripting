//But call() gives us a way to "borrow" a method from one object to use 
//for another by specifyng what that this binding would be
var steveJobs = {
    mission: "Change the world",
    describe: function() {
        console.log(this.mission);
    }
};
steveJobs.describe(); // Outputs: "Change the world",

// Now borrow the describe function with call() method
var steveWoz = {
    mission: "Do great engineering"
};
steveJobs.describe.call(steveWoz);
//console.log(steveJobs.describe.call(steveWoz)); // Outputs: "Do great engineering"