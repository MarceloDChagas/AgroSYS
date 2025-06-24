import { EProductStatus } from "@shared/enums/product.enum";

export class CreateProductDto {
  constructor(
    public readonly name: string,
    public readonly description: string | null = null,
    public readonly price: number,
    public readonly quantity: number = 0,
    public readonly status: EProductStatus = EProductStatus.AVAILABLE,
    public readonly category: string | null = null
  ) {}
}

export interface RawCreateProductDto {
  name: string;
  description?: string;
  price: number;
  quantity?: number;
  status?: EProductStatus;
  category?: string;
}
