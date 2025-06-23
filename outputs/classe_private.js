"use strict";
class Banco {
    constructor() {
        this.cofreQtd = 10000000;
    }
    debitarCofre(quantidade) {
        if (this.cofreQtd >= quantidade) {
            this.cofreQtd -= quantidade;
            return this.cofreQtd;
        }
        else {
            return 'O cofre não possui a quantidade requisitada';
        }
    }
    sacarDoCaixa(quantidade) {
        return this.debitarCofre(quantidade);
    }
    sacarDoCaixaEletronic(quantidade) {
        return this.debitarCofre(quantidade);
    }
}
class Banco24Horas extends Banco {
    sacar(qtd) {
        return this.sacarDoCaixa(qtd);
    }
}
const nibank = new Banco();
// nibank.sacarDoCaixaEletronic(100);
const banco24Horas = new Banco24Horas();
banco24Horas.sacar(200);
//# sourceMappingURL=classe_private.js.map