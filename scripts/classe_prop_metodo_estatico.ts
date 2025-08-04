// const BancoDeDados = require('./classes/BancoDeDados') //TODO: Modo commomjs

import { BancoDeDados } from "./classes/BancoDeDados";

const conexaoBanco = BancoDeDados.factory({
    tipoBanco: BancoDeDados.TIPO_SQLSERVER,
    senha: 'root',
    usuario:'root',
    ip: BancoDeDados.LOCAL
})

console.log(conexaoBanco);

