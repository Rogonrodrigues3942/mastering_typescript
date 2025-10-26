
interface IHcode{
    length: number;
}

function mostrarQuantidadeTotal<Hcode extends IHcode>(valor: Hcode): Hcode {

    console.log(`Total: ${valor.length}`);

    return valor;
}

console.log(mostrarQuantidadeTotal([20,10,30]));

console.log(mostrarQuantidadeTotal(
    { _nome: 'José',idade: '21', length: 1}
));