"use strict";
let primeiraSoma;
primeiraSoma = (numero1, numero2) => numero1 + numero2;
console.log(primeiraSoma(10, 5));
let calculadora;
function adicao(a, b) { return a + b; }
const subtrair = (n1, n2) => n1 - n2;
calculadora = {
    dividir: (num1, num2) => num1 / num2,
    multiplicar: function (num1, num2) { return num1 * num2; },
    // multiplicar: (num1: number, num2: number) => num1 * num2,
    // somar: (num1: number, num2: number) => num1 + num2,
    somar: adicao,
    subtrair
};
console.log(calculadora.dividir(3, 2));
console.log(calculadora.multiplicar(3, 3));
console.log(calculadora.somar(2, 2));
console.log(calculadora.subtrair(2, 3));
//# sourceMappingURL=interface_funcoes.js.map