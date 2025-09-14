import applyMixins from "./applyMixins"

class ProdutoFinal {

    vender(quantidade: number) {
        return `Foram vendidos ${quantidade}  de itens desse produto.`
    }

    comprar(quantidade: number) {
        return `Foram comprados ${quantidade}  de itens desse produto.`
    }
}

class Movel{

    sentar(){
        return `Você sentou no móvel.`
    }

    empurrar(metros: number){
        return `O móvel foi empurrado por ${metros} metros.`
    }
}

class Sofa {
    constructor(public nome:string){
        // super();
    }
}

interface Sofa extends ProdutoFinal, Movel{}

applyMixins(Sofa, [ProdutoFinal, Movel]);

const produto = new Sofa('Meu sofá')

console.log(produto.comprar(10));
console.log(produto.empurrar(5));
console.log(produto.vender(7));
console.log(produto.sentar());