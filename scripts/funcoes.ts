// TODO: Módulo 4 - Funções em TypeScript
import { mostrarMensagem } from "./funcoes/mostrarMensagem";
// mostrarMensagem('Rogério');

// TODO: Retornando o valor da função
console.log(mostrarMensagem('Rogério'));
console.log(mostrarMensagem(100));
console.log(mostrarMensagem({ nome: 'Rafael'}));
console.log(mostrarMensagem({ nome: 'Samuel'}));
console.log(mostrarMensagem( 'Florizia'));

//TODO:  Aplicação com arrow function
const show = (codigo: number): number | Date | object => new Date();

console.log(show(1));