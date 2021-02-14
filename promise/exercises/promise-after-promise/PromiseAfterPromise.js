
function execute() {
first()
.then((message)=> {
    return second(message);
})

.then((message) => {
    console.log(message);
})
}

execute()