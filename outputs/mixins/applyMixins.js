"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = applyMixins;
// Isso pode estar em qualquer lugar em sua base de código:
function applyMixins(derivadoCtor, construtores) {
    construtores.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((nome) => {
            Object.defineProperty(derivadoCtor.prototype, nome, Object.getOwnPropertyDescriptor(baseCtor.prototype, nome) ||
                Object.create(null));
        });
    });
}
//# sourceMappingURL=applyMixins.js.map