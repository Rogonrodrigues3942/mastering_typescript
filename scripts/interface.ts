interface IEndereco{
    logradouro: string;
    numero: number;
    bairro: string;
    cidade: string;
}

// TODO: A interface é um contrato, cria-se um padrão que é obrigatório seguir.

let endereco: IEndereco;

endereco = {
    logradouro: 'Rua Jequitibas',
    numero: 200,
    bairro: 'Jabaquara',
    cidade: 'São Paulo'
}