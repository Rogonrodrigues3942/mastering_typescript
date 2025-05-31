class Vehicle{

    cor:string;

    constructor (cor: string){
        this.cor = cor;
    }

    abirPorta(){
        return 'Somente com a chave.'
    }
}

const carro = new Vehicle('Branco');
console.log(carro.cor);

carro.cor = 'Preto'
console.log(carro.cor);
console.log(carro.abirPorta());