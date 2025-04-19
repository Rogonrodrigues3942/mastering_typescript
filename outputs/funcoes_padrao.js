"use strict";
// TODO: Módulo 4 - Funções em TypeScript
function enviarEmail(para, assunto = 'Sem assunto.', remetente) {
    console.log({
        para,
        assunto,
        remetente
    });
}
// enviarEmail('rogerio@teste.com');   //TODO: valor padrão de parâmetro.
// enviarEmail('rogerio@teste.com', 'Estudando TypeScript');
enviarEmail('rogerio@teste.com', 'TypeScript', 'retorno@teste.com');
//# sourceMappingURL=funcoes_padrao.js.map