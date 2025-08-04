"use strict";
class NotificacaoV2 {
}
class EmailV2 extends NotificacaoV2 {
    constructor(usuario) {
        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
    }
    enviar() {
        console.log(`Enviando e-mail para o usuário ${this.email} ...`);
        return true;
    }
}
class SMSV2 extends NotificacaoV2 {
    constructor(usuario) {
        super();
        this.numero = usuario.telefone;
    }
    enviar() {
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
//# sourceMappingURL=classe_interface.js.map