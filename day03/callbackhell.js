function a(empName,callback){
    console.log(empName)
    callback(37)
}

function b(empId ,callback){
    console.log(empId)
    callback(true)
}

function c(empStatus){
    console.log(empStatus)
}

a("dilip",b)

