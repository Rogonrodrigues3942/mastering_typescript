"use strict";
var Autenticacao;
(function (Autenticacao) {
    class LoginRegistro {
        login(usuario) {
            return usuario;
        }
        registro(novoUsuario) {
            return novoUsuario;
        }
    }
    Autenticacao.LoginRegistro = LoginRegistro;
    class Recuperacao {
        recuperarSenha() {
            return 'Enviando para recuperação de senhas!';
        }
        recuperacaoUsuario() {
            return `Enviando e-mail para
                    recuperação de nome de usuário!`;
        }
    }
    Autenticacao.Recuperacao = Recuperacao;
})(Autenticacao || (Autenticacao = {}));
//# sourceMappingURL=index.js.map