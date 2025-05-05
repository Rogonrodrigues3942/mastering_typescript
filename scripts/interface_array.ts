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

interface IToDo{
    [indece: number]: string | number | boolean | ICategoria;
}

let minhasTarefas: IToDo;
    minhasTarefas = [ 'Estudar TS', 'Estudar JS', 'Estudar PHP8', 20, true, frontEnd, {nome: 'JS', id: 3, categoriaPai: frontEnd} ];

console.log(minhasTarefas);
console.log(minhasTarefas[0]);
console.log(minhasTarefas[4]);