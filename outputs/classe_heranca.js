"use strict";
class Cadastro {
    constructor(nome, nascimento) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}
class Cliente extends Cadastro {
    constructor(nome, nascimento, email, empresa) {
        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;
    }
}
const joseS = new Cliente('José Silva', new Date("2000-03-19"), 'jose.silva@email.com', 'Silva Comercial Ltda');
console.log(joseS);
//# sourceMappingURL=classe_heranca.js.map