"use strict";
var Permission;
(function (Permission) {
    Permission[Permission["ADMIN"] = 0] = "ADMIN";
    Permission[Permission["USER"] = 1] = "USER";
    Permission[Permission["READONLY"] = 2] = "READONLY";
})(Permission || (Permission = {}));
console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);
console.log('\n================================================================\n');
var Car;
(function (Car) {
    Car[Car["FORD"] = 0] = "FORD";
    Car[Car["CHEVROLET"] = 1] = "CHEVROLET";
    Car[Car["BMW"] = 2] = "BMW";
    Car[Car["VOLKSWAGEN"] = 3] = "VOLKSWAGEN";
})(Car || (Car = {}));
console.log(Car[0]);
console.log(Car[1]);
console.log(Car[2]);
console.log(Car[3]);
console.log('\n================================================================\n');
console.log(Car.BMW);
console.log(Car.CHEVROLET);
console.log(Car.FORD);
console.log(Car.VOLKSWAGEN);
//# sourceMappingURL=enum.js.map