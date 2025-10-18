//Arrow Function -> 2015 -> ES6
//normal function
function session(batchName,batchSize){
    console.log(batchName +" "+batchSize)
}

session("playwright",45)

//Arrow function - ()=>
const arrow=(batchName,batchSize) => batchName+" "+batchSize
console.log(arrow("js"))