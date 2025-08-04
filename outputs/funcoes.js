"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: Módulo 4 - Funções em TypeScript
const mostrarMensagem_1 = require("./funcoes/mostrarMensagem");
// mostrarMensagem('Rogério');
// TODO: Retornando o valor da função
console.log((0, mostrarMensagem_1.mostrarMensagem)('Rogério'));
console.log((0, mostrarMensagem_1.mostrarMensagem)(100));
console.log((0, mostrarMensagem_1.mostrarMensagem)({ nome: 'Rafael' }));
console.log((0, mostrarMensagem_1.mostrarMensagem)({ nome: 'Samuel' }));
console.log((0, mostrarMensagem_1.mostrarMensagem)('Florizia'));
//TODO:  Aplicação com arrow function
const show = (codigo) => new Date();
console.log(show(1));
//# sourceMappingURL=funcoes.js.map