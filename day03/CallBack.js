//Callback function

function a(empName,b){
    console.log(empName)
    b(37,6)
}

function b(empId,b){
    console.log(empId,b)
}

a("dilip",b)
