export interface InvoiceItem {
  id: string;
  productName: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  totalPrice: number;
  description?: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  type: "ENTRADA" | "SAIDA" | "TRANSFERENCIA";
  status: "PENDENTE" | "APROVADA" | "CANCELADA" | "FINALIZADA";
  supplier?: string;
  customer?: string;
  issueDate: string;
  dueDate?: string;
  totalAmount: number;
  discount?: number;
  tax?: number;
  finalAmount: number;
  items: InvoiceItem[];
  notes?: string;
  created_at: string;
  updated_at: string;
  createdBy: string;
}

export interface CreateInvoiceRequest {
  type: "ENTRADA" | "SAIDA" | "TRANSFERENCIA";
  supplier?: string;
  customer?: string;
  issueDate: string;
  dueDate?: string;
  items: Omit<InvoiceItem, "id" | "totalPrice">[];
  notes?: string;
}

export interface UpdateInvoiceRequest {
  type?: "ENTRADA" | "SAIDA" | "TRANSFERENCIA";
  status?: "PENDENTE" | "APROVADA" | "CANCELADA" | "FINALIZADA";
  supplier?: string;
  customer?: string;
  issueDate?: string;
  dueDate?: string;
  items?: Omit<InvoiceItem, "id" | "totalPrice">[];
  notes?: string;
}

export interface InvoiceFilters {
  type?: "ENTRADA" | "SAIDA" | "TRANSFERENCIA";
  status?: "PENDENTE" | "APROVADA" | "CANCELADA" | "FINALIZADA";
  supplier?: string;
  customer?: string;
  startDate?: string;
  endDate?: string;
  minAmount?: number;
  maxAmount?: number;
  page?: number;
  limit?: number;
}
