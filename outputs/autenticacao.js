"use strict";
/// <reference path = "./autenticacao/index.ts"/>
const novoRegistro = new Autenticacao.LoginRegistro();
const acesso = novoRegistro.registro({
    nome: 'José Luís',
    email: 'joseluis"teste.com.br',
    senha: 'jose1234',
    dataNascimento: new Date('2000-02-21')
});
console.log(acesso);
//# sourceMappingURL=autenticacao.js.map