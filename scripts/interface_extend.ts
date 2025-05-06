interface IModel {
    id: number;
    crated_at: number;
    updated_at: number;
}

interface IPessoa extends IModel {
    nome: string;
    idade?: number;
}

interface IUsuario extends IPessoa {

    email: string;
    senha: string;
}

const rogerio: IUsuario = {
    id: 1,
    nome: 'Rogério',
    idade: 54,
    crated_at: new Date().getTime(),
    updated_at: new Date().getTime(),
    email: 'rogerio@rogerio.com',
    senha: '567890'
}

console.log(rogerio);