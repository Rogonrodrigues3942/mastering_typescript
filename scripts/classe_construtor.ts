class Pedido{

    constructor(
        private produto: string,
        protected valorTotal: number,
        public previsaoEngtrega: Date
    ){}
}

const meuPedido = new Pedido('TV 32 POLEGADAS', 4000.00, new Date('2025-06-26'));
console.log(meuPedido)