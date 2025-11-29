var ReusableMethods = /** @class */ (function () {
    function ReusableMethods() {
    }
    ReusableMethods.prototype.ElementClick = function (locator, timeout) {
        if (timeout) {
            console.log("Add time ");
        }
        else {
            console.log("enter the username ".concat(locator));
        }
    };
    return ReusableMethods;
}());
var rm = new ReusableMethods();
rm.ElementClick("#username");
rm.ElementClick("#username", 5000);
