import Decimal from "decimal.js";
import { EUnit } from "@shared/enums/unit.enum";

export class Quantity {
  private amount: Decimal;
  private unit: EUnit;

  constructor(amount: number | string, unit: EUnit) {
    if (!this.validateAmount(amount)) {
      throw new Error("Amount inválido para Quantity");
    }
    this.amount = new Decimal(amount);
    this.unit = unit;
  }

  private validateAmount(amount: number | string): boolean {
    try {
      const dec = new Decimal(amount);

      return dec.greaterThan(0);
    } catch {
      return false;
    }
  }

  public getAmount(): Decimal {
    return this.amount;
  }

  public getUnit(): EUnit {
    return this.unit;
  }

  public toString(): string {
    return `${this.amount.toString()} ${this.unit}`;
  }
}
