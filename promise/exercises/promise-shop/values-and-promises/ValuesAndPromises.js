function attachTitle(arg){
    return `DR. ${arg}`
}
function usePromise()
{
Promise.resolve("MANHATTAN").then(attachTitle).then(console.log)

}
usePromise()
module.exports=usePromise