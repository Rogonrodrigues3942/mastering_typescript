var Autenticacao;
(function (Autenticacao) {
    var LoginRegistro = /** @class */ (function () {
        function LoginRegistro() {
        }
        LoginRegistro.prototype.login = function (usuario) {
            return usuario;
        };
        LoginRegistro.prototype.registro = function (novoUsuario) {
            return novoUsuario;
        };
        return LoginRegistro;
    }());
    Autenticacao.LoginRegistro = LoginRegistro;
    var Recuperacao = /** @class */ (function () {
        function Recuperacao() {
        }
        Recuperacao.prototype.recuperarSenha = function () {
            return 'Enviando para recuperação de senhas!';
        };
        Recuperacao.prototype.recuperacaoUsuario = function () {
            return "Enviando e-mail para\n                    recupera\u00E7\u00E3o de nome de usu\u00E1rio!";
        };
        return Recuperacao;
    }());
    Autenticacao.Recuperacao = Recuperacao;
})(Autenticacao || (Autenticacao = {}));
/// <reference path = "./autenticacao/index.ts"/>
var novoRegistro = new Autenticacao.LoginRegistro();
var acesso = novoRegistro.registro({
    nome: 'José Luís',
    email: 'joseluis"teste.com.br',
    senha: 'jose1234',
    dataNascimento: new Date('2000-02-21')
});
console.log(acesso);
