console.log('Hello World! é o primeiro código do curso!!!')

console.log('==============================================');

const nome = 'Rogério';

console.log('Olá ' + nome + '. Seja benvindo!');

console.log('==============================================');

class Produto{
    
    nome: string;
    valor:number;
    
    // TODO: método construtor - usado para inicialização.
    constructor( produtoNome:string, produtoValor:number){
        
        this.nome = produtoNome;
        this.valor = produtoValor;
        
    }
}

console.log('==============================================');

const playstation5 = new Produto('Playstation 5', 5000);