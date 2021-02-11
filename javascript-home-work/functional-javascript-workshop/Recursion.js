var slice = Array.prototype.slice;

function getDependencies(tree) {
    if (!tree.dependencies) {
        //console.log('In base!')
        return [];
    }
    let finalDependancyArray=[];
    const objectArray = Object.keys(tree.dependencies);
    objectArray.forEach(dependency => {
        //console.log(tree.dependencies[dependency]);
        let dependancyArray = getDependencies(tree.dependencies[dependency]);
        const valueToBePushed=`${dependency}@${tree.dependencies[dependency].version}`;
        //console.log(valueToBePushed);
        if(!dependancyArray.includes(valueToBePushed)){
            dependancyArray.push(valueToBePushed);
            finalDependancyArray=finalDependancyArray.concat(dependancyArray);
        }
        //console.log(dependancyArray);
        
    });
    return finalDependancyArray.sort().filter(function(item, pos) {
        return finalDependancyArray.indexOf(item) == pos;
    })
    ;
}


var loremIpsum = {
    "name": "lorem-ipsum",
    "version": "0.1.1",
    "dependencies": {
        "optimist": {
            "version": "0.3.7",
            "dependencies": {
                "wordwrap": {
                    "version": "0.0.2"
                },
                "inflection":{
                    "version":"1.2.6"
                }
            }
        },
        "inflection": {
            "version": "1.2.6"
        }
    }
}

console.log(getDependencies(loremIpsum));


module.exports = getDependencies