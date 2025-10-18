const { error } = require("console")

let promise = new Promise((resolve,reject)=>{

    console.log("1st output")

    setTimeout(()=>{
        resolve("2nd output")
    },3000)
})

promise.then(result => console.log(result)).catch(error=>console.log(error))



//ES2017 -> async/await
//await -> promise ,no