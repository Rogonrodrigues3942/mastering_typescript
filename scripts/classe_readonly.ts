class Usuario{
    readonly id:string = '12345sda6789';
    nome: string = 'Rogério';
    private senha: string = '678901';
    readonly dataCadastro:Date = new Date('2021-01-31');
}

const usuario = new Usuario;

console.log(usuario.id);
// console.log(usuario.senha);

// usuario.id = '8907rsa';
// console.log(usuario.id);