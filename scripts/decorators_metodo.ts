


function decoratorMetodo(target: any, propertyKey: string,
    descriptor: PropertyDescriptor) {

    // console.log({
    //     target,
    //     propertyKey,
    //     descriptor
    // });

    console.log(descriptor.value);
    // console.log(descriptor.get);
    descriptor.value = (...args: unknown[]) => {

      return  args.map(item => {
            return (<string>item).toUpperCase();
        });
    }
}

class TratarMensagem {

    @decoratorMetodo
    dizerMensagem(...mensagens: string[]) {

        return mensagens;
    }
}

const instancia = new TratarMensagem();

console.log(instancia.dizerMensagem('Olá!',
    'Seja bem-vindo!', 'Curso de decorator TS.'
));