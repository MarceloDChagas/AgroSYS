export class Email {
  private readonly email: string;

  constructor(email: string) {
    const emailNormalized = Email.normalizeEmail(email);
    Email.validateEmail(emailNormalized);

    this.email = emailNormalized;
  }

  private static normalizeEmail(email: string): string {
    const trimmed = Email.normalizeRemoveEdgeSpaces(email);
    const lowercased = Email.normalizeToLowerCase(trimmed);
    return lowercased;
  }

  private static validateEmail(email: string): void {
    Email.validateEmpty(email);
    Email.validateFormat(email);
  }

  private static normalizeRemoveEdgeSpaces(email: string): string {
    return email.trim();
  }

  private static normalizeToLowerCase(email: string): string {
    return email.toLowerCase();
  }

  private static validateEmpty(email: string): void {
    if (!email) {
      throw new Error('O email não pode estar vazio.');
    }
  }

  private static validateFormat(email: string): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      throw new Error('O email informado é inválido.');
    }
  }

  public getEmail(): string {
    return this.email;
  }
}
