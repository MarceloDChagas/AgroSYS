export declare class Name {
    private readonly name;
    private static readonly MIN_LEN;
    private static readonly MAX_LEN;
    constructor(name: string);
    private static normalizeName;
    private static validateName;
    private static removeEdgeSpaces;
    private static validateEmpty;
    private static validateLength;
    private static validateCharacters;
    getName(): string;
}
