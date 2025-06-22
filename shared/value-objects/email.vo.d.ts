export declare class Email {
    private readonly email;
    constructor(email: string);
    private static normalizeEmail;
    private static validateEmail;
    private static normalizeRemoveEdgeSpaces;
    private static normalizeToLowerCase;
    private static validateEmpty;
    private static validateFormat;
    getEmail(): string;
}
