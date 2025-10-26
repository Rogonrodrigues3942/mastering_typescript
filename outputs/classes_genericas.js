"use strict";
class CadastroBasico {
    criar(dados) {
        console.log('Criando novo registro.');
        return dados;
    }
    selecionar(id) {
        console.log(`Dados do registro de id: ${id}`);
        return {};
    }
    editar(id, dadosAtualizacao) {
        console.log(`Editando dados do id: ${id}.`);
        return dadosAtualizacao;
    }
    excluir(id) {
        console.log(`Excluindo dados do id: ${id}.`);
        return true;
    }
}
const novoUsuario = new CadastroBasico();
console.log(novoUsuario.criar({
    id: 1,
    nome: 'Rogerto Silva',
    email: 'roberto.silva@teste.com.br',
    senha: 'r0b3r70',
    created_at: new Date('2010-02-28'),
    updated_at: new Date('2025-03-19')
}));
// console.log(novoUsuario);
const novaCategoria = new CadastroBasico();
console.log(novaCategoria.criar({
    id: 1,
    nome: 'JavaScript',
    created_at: new Date('2010-02-28'),
    updated_at: new Date('2025-03-19')
}));
//# sourceMappingURL=classes_genericas.js.map