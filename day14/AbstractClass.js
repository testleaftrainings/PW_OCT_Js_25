var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Wrapper = /** @class */ (function () {
    function Wrapper() {
    }
    //0 to 100 abstract methods
    //both abstract and non-abstract methods
    //non-abstract method -normal method
    Wrapper.prototype.loadUrl = function () {
        console.log("Loading URL");
    };
    return Wrapper;
}());
var TestCase = /** @class */ (function (_super) {
    __extends(TestCase, _super);
    function TestCase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestCase.prototype.loginInfo = function () {
        console.log("Login Info");
    };
    return TestCase;
}(Wrapper));
var t1 = new TestCase();
t1.loadUrl();
t1.loginInfo();
