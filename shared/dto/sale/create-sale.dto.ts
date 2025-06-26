import { ESaleStatus } from "@shared/enums/product.enum";

export interface SaleItemDto {
  productId: string;
  quantity: number;
  unitPrice: number;
}

export class CreateSaleDto {
  constructor(
    public readonly userId: string,
    public readonly items: SaleItemDto[],
    public readonly status: ESaleStatus = ESaleStatus.PENDING,
    public readonly saleDate: Date = new Date()
  ) {}

  get totalAmount(): number {
    return this.items.reduce((total, item) => {
      return total + item.quantity * item.unitPrice;
    }, 0);
  }
}

export interface RawCreateSaleDto {
  userId: string;
  items: SaleItemDto[];
  status?: ESaleStatus;
  saleDate?: string | Date;
}
