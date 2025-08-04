export class Name {
  private readonly name: string;

  private static readonly MIN_LEN = 2;
  private static readonly MAX_LEN = 100;

  constructor(name: string) {
    const nameNormalized = Name.normalizeName(name);
    Name.validateName(nameNormalized);

    this.name = nameNormalized;
  }

  private static normalizeName(name: string): string {
    return Name.removeEdgeSpaces(name);
  }

  private static validateName(name: string): void {
    Name.validateEmpty(name);
    Name.validateLength(name);
    Name.validateCharacters(name);
  }

  private static removeEdgeSpaces(name: string): string {
    return name.trim();
  }

  private static validateEmpty(name: string): void {
    if (!name) {
      throw new Error("O nome não pode estar vazio.");
    }
  }

  private static validateLength(name: string): void {
    if (name.length < Name.MIN_LEN || name.length > Name.MAX_LEN) {
      throw new Error(
        `O nome deve ter entre ${Name.MIN_LEN} e ${Name.MAX_LEN} caracteres.`
      );
    }
  }

  private static validateCharacters(name: string): void {
    const validNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/u;
    if (!validNameRegex.test(name)) {
      throw new Error("O nome contém caracteres inválidos.");
    }
  }

  public getName(): string {
    return this.name;
  }
}
