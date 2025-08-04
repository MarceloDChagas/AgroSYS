import { EInvoiceStatus } from "@shared/enums/product.enum";

export class CreateInvoiceDto {
  constructor(
    public readonly saleId: string,
    public readonly uapId: string,
    public readonly invoiceNumber: string,
    public readonly totalAmount: number,
    public readonly status: EInvoiceStatus = EInvoiceStatus.DRAFT,
    public readonly issueDate: Date = new Date(),
    public readonly dueDate: Date | null = null
  ) {}
}

export interface RawCreateInvoiceDto {
  saleId: string;
  uapId: string;
  invoiceNumber: string;
  totalAmount: number;
  status?: EInvoiceStatus;
  issueDate?: string | Date;
  dueDate?: string | Date;
}
