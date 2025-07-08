"use strict";
class Empresa {
    prestarServico() {
        return 'Empresa prestando serviço.';
    }
}
class Padaria extends Empresa {
    prestarServico() {
        return 'Vendendo pão.';
    }
}
class Mercearia {
    prestarServico() {
        return 'Vendendo alimentos e bebidas.';
    }
}
console.log('Empresa: ', new Empresa().prestarServico());
console.log('Padaria: ', new Padaria().prestarServico());
console.log('Merceria: ', new Mercearia().prestarServico());
//# sourceMappingURL=classe_polimorfismo.js.map