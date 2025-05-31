class Domicilio {

    public cor: string;
    public endereco: string;

    constructor(cor: string, endereco: string) {
        this.cor = cor;
        this.endereco = endereco;
    }

    public tocarInterfone(): string {

        return 'Interfone tocado!!';
    }

    protected atenderInterfone( mensagem: string): string{
    
        return mensagem;
    }

}

class Casa extends Domicilio {

    public entrarNaCasa(){
        return this.atenderInterfone('Olá! Quem é?')
    }

}

const casaDoHomer = new Casa('Rosa', 'Springfield');
console.log(casaDoHomer.tocarInterfone());
console.log(casaDoHomer.entrarNaCasa());