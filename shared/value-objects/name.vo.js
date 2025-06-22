"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Name = void 0;
class Name {
    constructor(name) {
        const nameNormalized = Name.normalizeName(name);
        Name.validateName(nameNormalized);
        this.name = nameNormalized;
    }
    static normalizeName(name) {
        return Name.removeEdgeSpaces(name);
    }
    static validateName(name) {
        Name.validateEmpty(name);
        Name.validateLength(name);
        Name.validateCharacters(name);
    }
    static removeEdgeSpaces(name) {
        return name.trim();
    }
    static validateEmpty(name) {
        if (!name) {
            throw new Error("O nome não pode estar vazio.");
        }
    }
    static validateLength(name) {
        if (name.length < Name.MIN_LEN || name.length > Name.MAX_LEN) {
            throw new Error(`O nome deve ter entre ${Name.MIN_LEN} e ${Name.MAX_LEN} caracteres.`);
        }
    }
    static validateCharacters(name) {
        const validNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/u;
        if (!validNameRegex.test(name)) {
            throw new Error("O nome contém caracteres inválidos.");
        }
    }
    getName() {
        return this.name;
    }
}
exports.Name = Name;
Name.MIN_LEN = 2;
Name.MAX_LEN = 100;
//# sourceMappingURL=name.vo.js.map