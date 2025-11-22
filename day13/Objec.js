"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Class_1 = require("./Class");
var Obj1 = new Class_1.Browser("Firefox", 30);
console.log(Obj1.browserName);
Obj1.launchBrowser();
