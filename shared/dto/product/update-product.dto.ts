import { EProductStatus } from "@shared/enums/product.enum";

export class UpdateProductDto {
  constructor(
    public readonly name?: string,
    public readonly description?: string | null,
    public readonly price?: number,
    public readonly quantity?: number,
    public readonly status?: EProductStatus,
    public readonly category?: string | null
  ) {}
}

export interface RawUpdateProductDto {
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  status?: EProductStatus;
  category?: string;
}
