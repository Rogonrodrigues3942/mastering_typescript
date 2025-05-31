"use strict";
class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
}
const ramon = new Person('Ramon Ortiz', 23, 1.89);
const sammy = new Person('Sammy Haggar', 70, 1.85);
console.log(ramon);
console.log(sammy);
ramon.name = 'Roberto Diaz';
console.log(ramon);
//# sourceMappingURL=first_class.js.map