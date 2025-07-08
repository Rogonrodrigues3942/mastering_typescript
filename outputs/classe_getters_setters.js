"use strict";
class Permissao {
    constructor(_nome, _nivel) {
        this._nome = _nome;
        this._nivel = _nivel;
    }
    get nome() {
        return this._nome.toLocaleUpperCase();
    }
    set nome(novoNome) {
        if (novoNome.length < 5) {
            throw 'Nome deve ter pelo 5 caracteres!';
        }
        try {
            this._nome = novoNome;
        }
        catch (error) {
            console.log(error);
        }
    }
}
const permissao = new Permissao('Administrador', 1);
console.log(permissao);
console.log(permissao.nome);
permissao.nome = 'Caixa';
console.log(permissao.nome);
//# sourceMappingURL=classe_getters_setters.js.map