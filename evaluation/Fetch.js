const { get } = require("http");
const https = require("https");
var LocalStorage = require("node-localstorage").LocalStorage,
localStorage = new LocalStorage("./scratch");

let arr=[]
function httpRequest(url) {
    return new Promise(function (resolve, reject) {
      https
        .get(url, (resp) => {
          let data = "";
            resp.on("data", (chunk) => {
            data += chunk;
          });
            resp.on("end", () => {
            resolve(JSON.parse(data));
          });
        })
        .on("error", (err) => {
          console.log("Error: " + err.message);
          reject(err);
        });
    });
  }

  function getData(){
      httpRequest(`https://randomuser.me/api`).then((data)=>{
          title= data.results[0].name.title;
          firstName= data.results[0].name.first;
          lastName= data.results[0].name.last;
          money = Math.floor(Math.random()*((Math.random()*10)>5?10**5:10**6));
          let fullName= {
            name: title+". "+firstName+" "+lastName,
            wealth: money
          }
          console.log(fullName);
          arr.push(fullName)
          return fullName;
                    //console.log(`${title}. ${firstName} ${lastName}`);
      })
  };
console.log(arr);
module.exports= getData;