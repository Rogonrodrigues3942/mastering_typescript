"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decoratorMetodo(target, propertyKey, descriptor) {
    // console.log({
    //     target,
    //     propertyKey,
    //     descriptor
    // });
    console.log(descriptor.value);
    // console.log(descriptor.get);
    descriptor.value = (...args) => {
        return args.map(item => {
            return item.toUpperCase();
        });
    };
}
class TratarMensagem {
    dizerMensagem(...mensagens) {
        return mensagens;
    }
}
__decorate([
    decoratorMetodo
], TratarMensagem.prototype, "dizerMensagem", null);
const instancia = new TratarMensagem();
console.log(instancia.dizerMensagem('Olá!', 'Seja bem-vindo!', 'Curso de decorator TS.'));
//# sourceMappingURL=decorators_metodo.js.map