interface IMeuUsuario{
    nome: string;
    email: string;
    telefone: string;
    idAndroid?:string
}

abstract class Notificacao{

    abstract enviar(usuario: IMeuUsuario):boolean;
}

class Email extends Notificacao{

    enviar(usuario: IMeuUsuario): boolean {
        console.log(`Enviando e-mail para o usuário ${usuario.email} ...`);
        return true;
    }
    
}

class SMS extends Notificacao{

    enviar(usuario: IMeuUsuario): boolean {
        console.log(`Enviando e-mail para o usuário ${usuario.telefone} ...`);
        return true;
    }
    
}

class Android  extends Notificacao{

    enviar(usuario: IMeuUsuario): boolean {
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