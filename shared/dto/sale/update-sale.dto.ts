import { ESaleStatus } from "@shared/enums/product.enum";

export class UpdateSaleDto {
  constructor(
    public readonly status?: ESaleStatus,
    public readonly saleDate?: Date
  ) {}
}

export interface RawUpdateSaleDto {
  status?: ESaleStatus;
  saleDate?: string | Date;
}
