import { CreateInvoiceDto } from "@shared/dto/invoice/create-invoice.dto";
import { UpdateInvoiceDto } from "@shared/dto/invoice/update-invoice.dto";
import { Invoice, InvoiceWithSale } from "@shared/types/product";
import { EInvoiceStatus } from "@shared/enums/product.enum";

export const INVOICE_REPOSITORY = Symbol("INVOICE_REPOSITORY");

export interface IInvoiceRepository {
  findAll(): Promise<InvoiceWithSale[]>;
  findOne(id: string): Promise<InvoiceWithSale | null>;
  findById(id: string): Promise<InvoiceWithSale | null>;
  findByUserId(userId: string): Promise<InvoiceWithSale[]>;
  findByStatus(status: EInvoiceStatus): Promise<InvoiceWithSale[]>;
  findBySaleId(saleId: string): Promise<InvoiceWithSale | null>;
  create(data: CreateInvoiceDto): Promise<InvoiceWithSale>;
  update(id: string, data: UpdateInvoiceDto): Promise<InvoiceWithSale | null>;
  delete(id: string): Promise<void>;
  generateInvoiceNumber(): Promise<string>;
}
