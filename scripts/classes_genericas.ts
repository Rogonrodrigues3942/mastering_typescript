interface CadastroPadrao {
    readonly id: number;
    nome: string;
    readonly created_at: Date;
    readonly updated_at: Date;
}

interface CadastroUsuario extends CadastroPadrao {
    email: string;
    senha: string;

}

interface CadastroCategoria extends CadastroPadrao {

}

class CadastroBasico<InterfaceBasica> {

    criar(dados: InterfaceBasica): InterfaceBasica {

        console.log('Criando novo registro.');

        return dados;
    }

    selecionar(id: number) {

        console.log(`Dados do registro de id: ${id}`);

        return {} as InterfaceBasica
    }

    editar(
        id: number,
        dadosAtualizacao: InterfaceBasica
    ): InterfaceBasica {

        console.log(`Editando dados do id: ${id}.`);

        return dadosAtualizacao;
    }

    excluir(id: number): boolean {

        console.log(`Excluindo dados do id: ${id}.`);

        return true;
    }
}

const novoUsuario = new CadastroBasico<CadastroUsuario>();

console.log(novoUsuario.criar({
    id: 1,
    nome:'Rogerto Silva',
    email: 'roberto.silva@teste.com.br',
    senha: 'r0b3r70',
    created_at: new Date('2010-02-28'),
    updated_at: new Date('2025-03-19')
}))

// console.log(novoUsuario);

const novaCategoria = new CadastroBasico<CadastroCategoria>();

console.log(novaCategoria.criar({
    
    id: 1,
    nome:'JavaScript',
    created_at: new Date('2010-02-28'),
    updated_at: new Date('2025-03-19')
}))