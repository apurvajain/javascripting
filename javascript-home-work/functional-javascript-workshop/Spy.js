function Spy(target, method) {
    const spyObject={
        count:0,
    }
    function modifiedFunction(target){
        spyObject.count+=1;
        target[method];
    }
    target[method]=modifiedFunction;
    return spyObject;

}

module.exports = Spy