"use strict";
class Pedido {
    constructor(produto, valorTotal, previsaoEngtrega) {
        this.produto = produto;
        this.valorTotal = valorTotal;
        this.previsaoEngtrega = previsaoEngtrega;
    }
}
const meuPedido = new Pedido('TV 32 POLEGADAS', 4000.00, new Date('2025-06-26'));
console.log(meuPedido);
//# sourceMappingURL=classe_construtor.js.map