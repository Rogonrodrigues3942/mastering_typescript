"use strict";
class Teacher {
    constructor(name, age, subject) {
        this.name = name;
        this.age = age;
        this.subject = subject;
    }
    introduce() {
        return `Meu nome ${this.name}, tenho ${this.age} anos e
        leciono ${this.subject}.`;
    }
    showGrades(...grades) {
        const totalGrades = grades.reduce((total, actualGrade) => total + actualGrade, 0);
        return totalGrades / grades.length;
    }
}
const glaucio = new Teacher('Glaucio Souza', 45, 'DBA');
console.log(glaucio.introduce());
console.log('\n**************\n');
const jose = new Teacher('Jose Silva', 35, 'Java');
console.log(jose.introduce());
console.log(jose.showGrades(10, 5, 8, 7.5));
//# sourceMappingURL=method_class.js.map