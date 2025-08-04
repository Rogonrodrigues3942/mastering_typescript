interface IEmailV2 {
    nome: string;
    email: string;
}

interface INotficacaoV2 {
    enviar(usuario: IMeuUsuarioV2): boolean;
}

interface IMeuUsuarioV2 {
    nome: string;
    email: string;
    telefone: string;
    idAndroid?: string
}

interface ITelefoneV2 {
    numero: string;
}

abstract class NotificacaoV2 implements INotficacaoV2 {

    abstract enviar(): boolean;
}

class EmailV2 extends NotificacaoV2 implements INotficacaoV2, IEmailV2 {

    nome: string;
    email: string;

    constructor(usuario: IMeuUsuarioV2) {
        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
    }

    enviar(): boolean {
        console.log(`Enviando e-mail para o usuário ${this.email} ...`);
        return true;
    }

}

class SMSV2 extends NotificacaoV2 implements INotficacaoV2, ITelefoneV2 {
    numero: string;

    constructor(usuario: IMeuUsuarioV2) {
        super();
        this.numero = usuario.telefone;
    }

    enviar(): boolean {
        console.log(`Enviando e-mail para o usuário ${this.numero} ...`);
        return true;
    }

}

// class AndroidV2 extends NotificacaoV2 {

//     enviar(usuario: IMeuUsuarioV2): boolean {
//         console.log(`Enviando mensagem para o usuário no Email ${usuario.idAndroid} ...`);
//         return true;
//     }

// }

// new EmailV2().enviar({
//     nome: 'José',
//     email: 'jose@teste.com.br',
//     telefone: '11988776655'
// });

// new SMSV2().enviar({
//     nome: 'José',
//     email: 'jose@teste.com.br',
//     telefone: '11988776655'
// });

// new AndroidV2().enviar({
//     nome: 'José',
//     email: 'jose@teste.com.br',
//     telefone: '11988776655',
//     idAndroid: 'sdf123sdf'
// });