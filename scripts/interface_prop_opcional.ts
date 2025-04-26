interface IProduto{
    nome: string;
    preco: number;
    descricao?: string;
    dataValidade: Date;
}

const produtoDados: IProduto ={
    nome: 'Notebook',
    preco: 2000,
    // descricao: 'Asus Vivobook i7',
    dataValidade: new Date(2025,11, 31)
}

console.log(produtoDados);