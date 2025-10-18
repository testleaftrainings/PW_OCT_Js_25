//replace -> replace single old char to new char
let info="TestLeaf"
//'e' to 'E'
let replace=info.replace('e','E')
console.log(replace)

//replaceAll
let input="Welcome to 2026"
let all=input.replaceAll(/[^A-Z ]/g, "@")
console.log(all)
///g -> es2021 ->/g flag ->golbal flag
//^ -> retain the value

//substring->print value based on the index : index 5 to index 10 -> 
let data="Limited"
//index value will be start '0'
console.log(data.substring(2)) 
console.log(data.substring(-2,-6)) //end index -1

//slice ->expect the negative value also
let word="Java Script"
console.log(word.slice(2,4))
console.log(word.slice(4))
console.log(word.slice(-6))
//10-6=4 -> from index 4 
console.log(word.slice(-6,-5))
//11-6 => 5
//11-5=>6 (4,7)//-6,-5,-4,-3,-2,-1,0,1,2,3
//-6 ,-5 => 5,6(S)