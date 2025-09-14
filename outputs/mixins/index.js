"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixins_1 = __importDefault(require("./applyMixins"));
class ProdutoFinal {
    vender(quantidade) {
        return `Foram vendidos ${quantidade}  de itens desse produto.`;
    }
    comprar(quantidade) {
        return `Foram comprados ${quantidade}  de itens desse produto.`;
    }
}
class Movel {
    sentar() {
        return `Você sentou no móvel.`;
    }
    empurrar(metros) {
        return `O móvel foi empurrado por ${metros} metros.`;
    }
}
class Sofa {
    constructor(nome) {
        this.nome = nome;
        // super();
    }
}
(0, applyMixins_1.default)(Sofa, [ProdutoFinal, Movel]);
const produto = new Sofa('Meu sofá');
console.log(produto.comprar(10));
console.log(produto.empurrar(5));
console.log(produto.vender(7));
console.log(produto.sentar());
//# sourceMappingURL=index.js.map