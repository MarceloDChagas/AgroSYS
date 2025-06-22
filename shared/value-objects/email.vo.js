"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
class Email {
    constructor(email) {
        const emailNormalized = Email.normalizeEmail(email);
        Email.validateEmail(emailNormalized);
        this.email = emailNormalized;
    }
    static normalizeEmail(email) {
        const trimmed = Email.normalizeRemoveEdgeSpaces(email);
        const lowercased = Email.normalizeToLowerCase(trimmed);
        return lowercased;
    }
    static validateEmail(email) {
        Email.validateEmpty(email);
        Email.validateFormat(email);
    }
    static normalizeRemoveEdgeSpaces(email) {
        return email.trim();
    }
    static normalizeToLowerCase(email) {
        return email.toLowerCase();
    }
    static validateEmpty(email) {
        if (!email) {
            throw new Error("O email não pode estar vazio.");
        }
    }
    static validateFormat(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error("O email informado é inválido.");
        }
    }
    getEmail() {
        return this.email;
    }
}
exports.Email = Email;
//# sourceMappingURL=email.vo.js.map