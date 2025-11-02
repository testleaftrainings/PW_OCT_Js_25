//array is collection item can stored in single variable
//[] let browser=["Chrome","Edge","Firefox","Webkit"]
//let broswerDetails=["chrome",131.45,true]
//array index will start from '0'


//for..of -> for(let value of empName)


let empName=["Gauthami","Sai","Udaya","","Yuvarani"]
//index =2 => udaya
console.log(empName[2])

//find the length of the array
console.log("Length of the array "+empName.length)

//add
empName[7]="dilip" //["Gauthami","sai","udaya","yuvarain","" ,"","","dilip"]
console.log(empName.length)

console.log(empName[4])

empName[2]="Ravi"

for (let i = 0; i < empName.length; i++) {
    console.log(empName[i])
    
}

//we can able add the value and remove values
//push,unshift,pop,shift

//push and unshift -> add value end and start of the array
empName.push("kumar")
console.log(empName)
empName.unshift("testleaf")
console.log(empName)

//pop and shift -> remove end and start value of an array
empName.pop()
console.log(empName)
empName.shift()
console.log(empName)

empName.splice(3,2,"Ravi","dilip")
//3-> which index 
//2-> how many values to delete
console.log(empName)

let arr=[1,6,8,9,22]

//sort value
arr.sort()

//for loop
// for .of -> arr will assign  new variable 
for(let value of arr){
    console.log(value)
}


for(let i=0;i<arr.length;i++){
    console.log(arr)
}