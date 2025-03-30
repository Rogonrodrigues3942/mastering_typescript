console.log('Hello World! é o primeiro código do curso!!!');
console.log('==============================================');
var nome = 'Rogério';
console.log('Olá ' + nome + '. Seja benvindo!');
console.log('==============================================');
var Produto = /** @class */ (function () {
    // TODO: método construtor - usado para inicialização.
    function Produto(produtoNome, produtoValor) {
        this.nome = produtoNome;
        this.valor = produtoValor;
    }
    return Produto;
}());
