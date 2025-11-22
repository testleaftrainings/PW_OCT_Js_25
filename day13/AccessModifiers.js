var Access = /** @class */ (function () {
    function Access() {
    }
    //public access modifier - deafault access modifier
    //private access modifier - can be accessed only inside the class
    //protected access modifier - can be accessed inside the class and by the derived class
    Access.prototype.loadUrl = function () {
        console.log("Load URL method");
    };
    Access.prototype.loadUserName = function () {
        console.log("Load UserName method");
    };
    Access.prototype.info = function () {
        console.log("Info Method");
    };
    Access.prototype.getInfo = function () {
        this.loadUserName(); //directly we cannot call outside class-> so created public method call
        this.info();
    };
    return Access;
}());
var acc = new Access();
acc.loadUrl();
acc.getInfo();
