namespace Autenticacao {

    interface IUsuario {
        email: string;
        senha: string;
    }

    interface ICadastro{
        nome: string;
        email: string;
        senha: string;
        dataNascimento: Date;
    }

    export class LoginRegistro {


        login(usuario: IUsuario) {

            return usuario;
        }

        registro(novoUsuario: ICadastro) {

            return novoUsuario;
        }

    }

    export class Recuperacao {

        recuperarSenha(){
            return 'Enviando para recuperação de senhas!';
        }

        recuperacaoUsuario(){
            return `Enviando e-mail para
                    recuperação de nome de usuário!`;
        }

    }

}