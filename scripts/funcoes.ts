// TODO: Módulo 4 - Funções em TypeScript

function mostrarMensagem(texto: string | number | object):boolean{

    console.log(texto);

    return true;
}

// mostrarMensagem('Rogério');

// TODO: Retornando o valor da função
console.log(mostrarMensagem('Rogério'));
console.log(mostrarMensagem(100));
console.log(mostrarMensagem({ nome: 'Rafael'}));

//TODO:  Aplicação com arrow function
const show = (codigo: number): number | Date | object => new Date();

console.log(show(1));