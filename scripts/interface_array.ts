interface ICategoria {
    nome: string;
    id: number;
    categoriaPai?: ICategoria;
}

const frontEnd: ICategoria = {
    nome: 'Front-End',
    id: 1
}

const backEnd: ICategoria = {
    nome: 'Back-End',
    id: 2
}

interface IMenu {
    categorias: ICategoria[];
}

let menu: IMenu = {

    categorias : [frontEnd, backEnd]
};