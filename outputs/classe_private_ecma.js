"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Documento_numero, _CNPJ_numero;
class Documento {
    constructor() {
        this.valor = '123456789-01'; //TS
        _Documento_numero.set(this, 35); // ECMAScript
    }
    mostrarDocumento() {
        return __classPrivateFieldGet(this, _Documento_numero, "f");
    }
}
_Documento_numero = new WeakMap();
class CNPJ extends Documento {
    constructor() {
        super(...arguments);
        // private valor: string = '987654321-89';  //TS
        _CNPJ_numero.set(this, 50);
    }
    mostrarCNPJ() {
        return __classPrivateFieldGet(this, _CNPJ_numero, "f");
    }
}
_CNPJ_numero = new WeakMap();
const rg = new Documento;
console.log(rg.mostrarDocumento());
const cnpj = new CNPJ;
console.log(cnpj.mostrarCNPJ());
console.log('class CNPJ - documento: ' + cnpj.mostrarDocumento());
//# sourceMappingURL=classe_private_ecma.js.map