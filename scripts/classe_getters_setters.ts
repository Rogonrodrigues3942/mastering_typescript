class Permissao {

    constructor(
        private _nome: string,
        private _nivel: number
    ) { }

    get nome() {
        return this._nome.toLocaleUpperCase();
    }

    set nome(novoNome: string) {
        if (novoNome.length < 5){
            throw 'Nome deve ter pelo 5 caracteres!';
        }

        try {
            this._nome = novoNome;
        } catch (error) {
            console.log(error);
        }

    }

}

const permissao = new Permissao('Administrador', 1);
console.log(permissao);

console.log(permissao.nome)

permissao.nome = 'Caixa'
console.log(permissao.nome)