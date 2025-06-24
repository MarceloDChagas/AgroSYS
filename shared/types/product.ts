import {
  EProductStatus,
  ESaleStatus,
  EInvoiceStatus,
} from "@shared/enums/product.enum";

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  quantity: number;
  status: EProductStatus;
  category: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Sale {
  id: string;
  userId: string;
  totalAmount: number;
  status: ESaleStatus;
  saleDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface SaleItem {
  id: string;
  saleId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface SaleWithItems extends Sale {
  saleItems: SaleItem[];
  user?: {
    id: string;
    name: string;
    email: string;
  };
}

export interface Invoice {
  id: string;
  saleId: string;
  userId: string;
  invoiceNumber: string;
  totalAmount: number;
  status: EInvoiceStatus;
  issueDate: Date;
  dueDate: Date | null;
  paidDate: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface InvoiceWithSale extends Invoice {
  sale?: SaleWithItems;
  user?: {
    id: string;
    name: string;
    email: string;
  };
}
