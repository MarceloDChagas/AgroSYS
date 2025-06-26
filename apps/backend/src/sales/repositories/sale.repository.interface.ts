import { CreateSaleDto } from "@shared/dto/sale/create-sale.dto";
import { UpdateSaleDto } from "@shared/dto/sale/update-sale.dto";
import { Sale, SaleWithItems } from "@shared/types/product";
import { ESaleStatus } from "@shared/enums/product.enum";

export interface ISaleRepository {
  findAll(): Promise<SaleWithItems[]>;
  findOne(id: string): Promise<SaleWithItems | null>;
  findById(id: string): Promise<SaleWithItems | null>;
  findByUserId(userId: string): Promise<SaleWithItems[]>;
  findByStatus(status: ESaleStatus): Promise<SaleWithItems[]>;
  create(data: CreateSaleDto): Promise<SaleWithItems>;
  update(id: string, data: UpdateSaleDto): Promise<SaleWithItems | null>;
  delete(id: string): Promise<void>;
}
