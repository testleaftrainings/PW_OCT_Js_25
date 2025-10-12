
let comName="TestLeaf" //205
let com="Testleaf"     //205
let br="Chrome"


let browserName=new String("Chrome") //105
let browser=new String("Chrome") //106

// count no of chars in the String -> length
console.log("total number of chars :"+comName.length)
//inde will be start from '0' 

//charAt -> print the value based on index
console.log("CharAt Method : "+comName.charAt(3))

//indexOf -> its going print character in which index its presented
console.log("Index value of chars : "+com.indexOf("e"))
console.log("Last value : "+ com.lastIndexOf("e"))

console.log(`My Company Name is : ${comName} , Welcome to ${com}`)
//template literal ->${}

//split -> split the word -> Welcome Testleaf for Playwright Session
let value="Welcome Testleaf for Playwright Session" //" " -> will be the delimiter to break the string
console.log(value.split(" "))

// touppercase and tolowercase
let n1="PlaYwright"
console.log(n1.toLowerCase())
console.log(n1.toUpperCase())

//convert string into number
let price="35000"
let num=parseInt(price)
console.log(`${typeof(num)} value is ${num}`)

// Strict equality (===) -> value & location is compared
// let comName="TestLeaf" //205
// let com="TestLeaf"     //205
// let br="Chrome"
// let browserName=new String("Chrome") //105
// let browser=new String("Chrome") 
console.log(comName===com)

console.log(br==browserName) //compare only the value