export class Name {
    
  private readonly name: string;

  constructor(name: string) {
    this.validateName(name);
    this.name = name.trim();
  }

  private validateName(name: string): boolean {
    const trimmed = name.trim();

    if (!trimmed) {
      throw new Error("O nome não pode estar vazio.");
    }

    if (trimmed.length < 2 || trimmed.length > 100) {
      throw new Error("O nome deve ter entre 2 e 100 caracteres.");
    }

    return true;
  }

  public getName(): string {
    return this.name;
  }

}
