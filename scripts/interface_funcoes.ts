interface ISoma{

    ( num1: number, num2: number ): number;
}

let primeiraSoma: ISoma;

primeiraSoma = (numero1: number, numero2: number): number => numero1 + numero2;

console.log( primeiraSoma(10 ,5));

interface ICalculos{
    somar(a: number, b: number): number;
    subtrair(a: number, b: number): number;
    multiplicar(a: number, b: number): number;
    dividir(a: number, b: number): number;
}

let calculadora: ICalculos;

function adicao ( a: number, b: number){ return a + b}

const subtrair = (n1: number, n2: number) => n1 - n2;

calculadora = {
    dividir: (num1: number, num2: number) => num1 / num2,
    multiplicar: function (num1: number, num2: number) { return num1 * num2},
    // multiplicar: (num1: number, num2: number) => num1 * num2,
    // somar: (num1: number, num2: number) => num1 + num2,
    somar: adicao,
    subtrair
}

console.log( calculadora.dividir(3,2));
console.log( calculadora.multiplicar(3,3));
console.log( calculadora.somar(2,2));
console.log( calculadora.subtrair(2,3));