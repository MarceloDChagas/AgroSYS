// Exportações dos mocks de notas fiscais
export * from "./invoiceMocks";

// Exportações dos mocks de ferramentas
export * from "./toolMocks";

// Re-exportação dos tipos para facilitar importação
export type {
  Invoice,
  InvoiceItem,
  CreateInvoiceRequest,
  UpdateInvoiceRequest,
  InvoiceFilters,
} from "../types/invoice";
export type {
  Tool,
  CreateToolRequest,
  UpdateToolRequest,
  ToolsFilters,
} from "../services/api/toolService";
