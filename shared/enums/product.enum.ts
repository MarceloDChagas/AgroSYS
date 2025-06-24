// Enum para status do produto
export enum EProductStatus {
  AVAILABLE = "AVAILABLE",
  OUT_OF_STOCK = "OUT_OF_STOCK",
  DISCONTINUED = "DISCONTINUED",
}

// Enum para status da venda
export enum ESaleStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

// Enum para status da nota fiscal
export enum EInvoiceStatus {
  DRAFT = "DRAFT",
  ISSUED = "ISSUED",
  PAID = "PAID",
  CANCELLED = "CANCELLED",
}

// Enum do Prisma para mapeamento
export enum ProductStatus {
  AVAILABLE = "AVAILABLE",
  OUT_OF_STOCK = "OUT_OF_STOCK",
  DISCONTINUED = "DISCONTINUED",
}

export enum SaleStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export enum InvoiceStatus {
  DRAFT = "DRAFT",
  ISSUED = "ISSUED",
  PAID = "PAID",
  CANCELLED = "CANCELLED",
}
