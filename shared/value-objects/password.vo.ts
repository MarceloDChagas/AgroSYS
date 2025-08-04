import * as bcrypt from "bcrypt";

export class Password {
  private readonly password: string;
  private readonly isHashed: boolean;
  private static readonly MIN_LENGTH = 8; //Pode mudar depois

  private constructor(password: string, isHashed = false) {
    const normalizedPassword = isHashed
      ? password
      : Password.normalizePassword(password);

    if (!isHashed) {
      Password.validatePassword(normalizedPassword);
    }

    this.password = normalizedPassword;
    this.isHashed = isHashed;
  }

  public static create(plainPassword: string): Password {
    return new Password(plainPassword, false);
  }

  public static fromHashed(hashedPassword: string): Password {
    return new Password(hashedPassword, true);
  }

  private static normalizePassword(password: string): string {
    const trimmed = this.removeEdgeSpaces(password);
    return trimmed; // Pode adicionar mais normalizações aqui no futuro
  }

  private static removeEdgeSpaces(password: string): string {
    return password.trim();
  }

  private static validatePassword(password: string): void {
    this.validateEmpty(password);
    this.validateLength(password);
    this.validateCharacters(password);
  }

  private static validateEmpty(password: string): void {
    if (!password) {
      throw new Error("A senha não pode estar vazia.");
    }
  }

  private static validateLength(password: string): void {
    if (password.length < this.MIN_LENGTH) {
      throw new Error(
        `A senha deve ter pelo menos ${this.MIN_LENGTH} caracteres.`
      );
    }
  }

  private static validateCharacters(password: string): void {
    const hasLetter = /[A-Za-z]/.test(password);
    const hasNumber = /\d/.test(password);

    if (!hasLetter || !hasNumber) {
      throw new Error("A senha deve conter letras e números.");
    }
  }

  public async getHashed(): Promise<string> {
    if (this.isHashed) {
      return this.password;
    }

    const salt = await bcrypt.genSalt();
    return bcrypt.hash(this.password, salt);
  }

  public async compare(plainPassword: string): Promise<boolean> {
    if (!this.isHashed) {
      throw new Error("Senha precisa estar com hash para comparar.");
    }
    return bcrypt.compare(plainPassword, this.password);
  }

  public getPassword(): string {
    return this.password;
  }
}
