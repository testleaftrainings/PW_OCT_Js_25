"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = void 0;
//if you want to use class in other files use export keyword
var Browser = /** @class */ (function () {
    //whether needed to create object inside class or outside class - outside class
    //constructor
    // constructor(){
    // console.log("I am default constructor")
    // }
    function Browser(bName, browserVersion) {
        //property
        this.browserName = "Chrome";
        console.log(bName);
        //thids.browserName=browserName //assign value to property
        //access current class property, method and constructor use this keyword
        console.log(this.browserVersion = browserVersion);
    }
    //methods
    Browser.prototype.launchBrowser = function () {
        console.log("Launch Chrome Browser");
    };
    return Browser;
}());
exports.Browser = Browser;
//create object oustside class
var obj1 = new Browser("Dilip", 20);
//access property
console.log(obj1.browserName);
//access method
obj1.launchBrowser();
