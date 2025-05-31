"use strict";
class Domicilio {
    constructor(cor, endereco) {
        this.cor = cor;
        this.endereco = endereco;
    }
    tocarInterfone() {
        return 'Interfone tocado!!';
    }
    atenderInterfone(mensagem) {
        return mensagem;
    }
}
class Casa extends Domicilio {
    entrarNaCasa() {
        return this.atenderInterfone('Olá! Quem é?');
    }
}
const casaDoHomer = new Casa('Rosa', 'Springfield');
console.log(casaDoHomer.tocarInterfone());
console.log(casaDoHomer.entrarNaCasa());
//# sourceMappingURL=classe_protected.js.map