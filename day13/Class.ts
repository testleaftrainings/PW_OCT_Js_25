//if you want to use class in other files use export keyword
export class Browser{

    //property
    browserName: string="Chrome"
    browserVersion:number

    //methods
    launchBrowser(){
        console.log("Launch Chrome Browser")
    }
//whether needed to create object inside class or outside class - outside class
//constructor
// constructor(){
// console.log("I am default constructor")
// }

constructor(bName:string,browserVersion:number){
    console.log(bName)
    //thids.browserName=browserName //assign value to property
    //access current class property, method and constructor use this keyword
    console.log(this.browserVersion=browserVersion)
}

}
//create object oustside class
let obj1=new Browser("Dilip",20)
//access property
console.log(obj1.browserName)
//access method
obj1.launchBrowser()