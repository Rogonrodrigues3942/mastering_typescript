"use strict";
// const BancoDeDados = require('./classes/BancoDeDados') //TODO: Modo commomjs
Object.defineProperty(exports, "__esModule", { value: true });
const BancoDeDados_1 = require("./classes/BancoDeDados");
const conexaoBanco = BancoDeDados_1.BancoDeDados.factory({
    tipoBanco: BancoDeDados_1.BancoDeDados.TIPO_SQLSERVER,
    senha: 'root',
    usuario: 'root',
    ip: BancoDeDados_1.BancoDeDados.LOCAL
});
console.log(conexaoBanco);
//# sourceMappingURL=classe_prop_metodo_estatico.js.map