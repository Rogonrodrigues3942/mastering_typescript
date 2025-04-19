// TODO: Módulo 4 - Funções em TypeScript

function enviarEmail(para: string, assunto: string = 'Sem assunto.', remetente?:string):void{

    console.log({
        para,
        assunto,
        remetente
    });
}

// enviarEmail('rogerio@teste.com');   //TODO: valor padrão de parâmetro.
// enviarEmail('rogerio@teste.com', 'Estudando TypeScript');
enviarEmail('rogerio@teste.com','TypeScript' , 'retorno@teste.com');
