"use strict";
class Notificacao {
}
class Email extends Notificacao {
    enviar(usuario) {
        console.log(`Enviando e-mail para o usuário ${usuario.email} ...`);
        return true;
    }
}
class SMS extends Notificacao {
    enviar(usuario) {
        console.log(`Enviando e-mail para o usuário ${usuario.telefone} ...`);
        return true;
    }
}
class Android extends Notificacao {
    enviar(usuario) {
        console.log(`Enviando mensagem para o usuário no Android ${usuario.idAndroid} ...`);
        return true;
    }
}
new Email().enviar({
    nome: 'José',
    email: 'jose@teste.com.br',
    telefone: '11988776655'
});
new SMS().enviar({
    nome: 'José',
    email: 'jose@teste.com.br',
    telefone: '11988776655'
});
new Android().enviar({
    nome: 'José',
    email: 'jose@teste.com.br',
    telefone: '11988776655',
    idAndroid: 'sdf123sdf'
});
//# sourceMappingURL=classe_abstrata.js.map