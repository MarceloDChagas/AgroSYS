import { EInvoiceStatus } from "@shared/enums/product.enum";

export class UpdateInvoiceDto {
  constructor(
    public readonly status?: EInvoiceStatus,
    public readonly dueDate?: Date | null,
    public readonly paidDate?: Date | null
  ) {}
}

export interface RawUpdateInvoiceDto {
  status?: EInvoiceStatus;
  dueDate?: string | Date | null;
  paidDate?: string | Date | null;
}
