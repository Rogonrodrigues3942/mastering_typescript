"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BancoDeDados = void 0;
class BancoDeDados {
    constructor(ip, usuario, senha, tipoBanco) {
        this.ip = ip;
        this.usuario = usuario;
        this.senha = senha;
        this.tipoBanco = tipoBanco;
    }
    static factory(parametros) {
        if (![
            BancoDeDados.TIPO_MYSQL,
            BancoDeDados.TIPO_SQLSERVER
        ].includes(parametros.tipoBanco)) {
            throw new Error('Tipo de banco de dados incorreto!');
        }
        return new BancoDeDados(parametros.ip, parametros.senha, parametros.usuario, parametros.tipoBanco);
    }
}
exports.BancoDeDados = BancoDeDados;
BancoDeDados.LOCAL = '127.0.0.1';
BancoDeDados.TIPO_MYSQL = 'MySQL';
BancoDeDados.TIPO_SQLSERVER = 'SQL Server';
//# sourceMappingURL=BancoDeDados.js.map