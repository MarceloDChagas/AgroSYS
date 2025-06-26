import { CreateProductDto } from "@shared/dto/product/create-product.dto";
import { UpdateProductDto } from "@shared/dto/product/update-product.dto";
import { Product } from "@shared/types/product";
import { EProductStatus } from "@shared/enums/product.enum";

export interface IProductRepository {
  findAll(): Promise<Product[]>;
  findOne(id: string): Promise<Product | null>;
  findById(id: string): Promise<Product | null>;
  findByStatus(status: EProductStatus): Promise<Product[]>;
  findByCategory(category: string): Promise<Product[]>;
  create(data: CreateProductDto): Promise<Product>;
  update(id: string, data: UpdateProductDto): Promise<Product | null>;
  delete(id: string): Promise<void>;
}
