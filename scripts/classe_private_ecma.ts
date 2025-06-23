class Documento{

    private valor: string = '123456789-01';     //TS
    #numero:number = 35;    // ECMAScript

    mostrarDocumento(){
        return this.#numero;
    }
}

class CNPJ extends Documento{

    // private valor: string = '987654321-89';  //TS
    #numero: number = 50;

    mostrarCNPJ(){
        return this.#numero;
    }
}

const rg = new Documento;
console.log(rg.mostrarDocumento());

const cnpj = new CNPJ;
console.log(cnpj.mostrarCNPJ());
console.log('class CNPJ - documento: ' + cnpj.mostrarDocumento());
