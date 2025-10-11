//var -> 1995 -2015
//let -> 2015 ->ES6
//const -> 2015 -> ES6

//var -> will do re-assignment and re-declaration ,Function-Scoped
var empDetails="Dilip" 
empDetails=true//re-assignment
console.log(empDetails)

var comName="Testleaf"
var comName="TL" //re-declaration
console.log(comName)

//let -> will do only re-assignment , but cannot re-declaration ,Block Scoped{ }
let testcaseName="Leads"
testcaseName="Create Lead"
//testcaseName=true //re-assignment
console.log(testcaseName)

// let count =65
// count =60


let testcaseId=54
//let testcaseId=89 // is not possible to re-declaration variable

//const -> it will not allow re-assignment and re-declaration ,Block Scoped{ }
//final value 

const ts="45"
//re-assignment
ts="Dilip"
//re-declaration
//const ts=67
console.log(ts)
