class Cadastro {

    nome: string;
    nascimento: Date;

    constructor(nome: string, nascimento: Date) {
        this.nome = nome;
        this.nascimento = nascimento
    }
}

class Cliente extends Cadastro {

    email: string;
    empresa: string;

    constructor(
        nome: string,
        nascimento: Date,
        email: string,
        empresa: string

    ) {
        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;
    }
}

const joseS = new Cliente(
    'José Silva',
    new Date("2000-03-19"),
    'jose.silva@email.com', 
    'Silva Comercial Ltda'
);

console.log(joseS);