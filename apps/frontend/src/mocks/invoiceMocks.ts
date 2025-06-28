import type { Invoice, InvoiceItem } from "../types/invoice";

// Dados mockados para itens de nota fiscal
const mockInvoiceItems: InvoiceItem[] = [
  {
    id: "1",
    productName: "Fertilizante NPK 10-10-10",
    quantity: 50,
    unit: "kg",
    unitPrice: 2.5,
    totalPrice: 125.0,
    description: "Fertilizante balanceado para pastagem",
  },
  {
    id: "2",
    productName: "Ração para Gado",
    quantity: 1000,
    unit: "kg",
    unitPrice: 1.8,
    totalPrice: 1800.0,
    description: "Ração concentrada para engorda",
  },
  {
    id: "3",
    productName: "Vacina Brucelose",
    quantity: 200,
    unit: "doses",
    unitPrice: 8.5,
    totalPrice: 1700.0,
    description: "Vacina contra brucelose bovina",
  },
  {
    id: "4",
    productName: "Semente de Milho",
    quantity: 80,
    unit: "kg",
    unitPrice: 12.0,
    totalPrice: 960.0,
    description: "Semente híbrida de milho",
  },
  {
    id: "5",
    productName: "Herbicida Glifosato",
    quantity: 20,
    unit: "L",
    unitPrice: 45.0,
    totalPrice: 900.0,
    description: "Herbicida para controle de plantas daninhas",
  },
  {
    id: "6",
    productName: "Arame Farpado",
    quantity: 20,
    unit: "rolos",
    unitPrice: 35.0,
    totalPrice: 700.0,
    description: "Arame farpado para cercas",
  },
  {
    id: "7",
    productName: "Sal Mineral",
    quantity: 500,
    unit: "kg",
    unitPrice: 1.2,
    totalPrice: 600.0,
    description: "Sal mineral para suplementação",
  },
  {
    id: "8",
    productName: "Vermífugo Bovino",
    quantity: 100,
    unit: "doses",
    unitPrice: 15.0,
    totalPrice: 1500.0,
    description: "Vermífugo para controle de parasitas",
  },
];

// Dados mockados para notas fiscais
export const mockInvoices: Invoice[] = [
  {
    id: "1",
    invoiceNumber: "NF-2024-001",
    type: "ENTRADA",
    status: "APROVADA",
    supplier: "Agropecuária Santa Maria Ltda",
    issueDate: "2024-01-15",
    dueDate: "2024-02-15",
    totalAmount: 1925.0,
    discount: 50.0,
    tax: 192.5,
    finalAmount: 2067.5,
    items: [mockInvoiceItems[0], mockInvoiceItems[1]],
    notes: "Entrega agendada para 20/01/2024",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z",
    createdBy: "João Silva",
  },
  {
    id: "2",
    invoiceNumber: "NF-2024-002",
    type: "ENTRADA",
    status: "PENDENTE",
    supplier: "Veterinária Rural Ltda",
    issueDate: "2024-01-20",
    dueDate: "2024-02-20",
    totalAmount: 1700.0,
    discount: 0,
    tax: 170.0,
    finalAmount: 1870.0,
    items: [mockInvoiceItems[2]],
    notes: "Aguardando aprovação do gerente",
    created_at: "2024-01-20T14:15:00Z",
    updated_at: "2024-01-20T14:15:00Z",
    createdBy: "Maria Santos",
  },
  {
    id: "3",
    invoiceNumber: "NF-2024-003",
    type: "SAIDA",
    status: "FINALIZADA",
    customer: "Fazenda Boa Vista",
    issueDate: "2024-01-25",
    dueDate: "2024-02-25",
    totalAmount: 960.0,
    discount: 20.0,
    tax: 96.0,
    finalAmount: 1036.0,
    items: [mockInvoiceItems[3]],
    notes: "Venda de sementes para plantio",
    created_at: "2024-01-25T09:45:00Z",
    updated_at: "2024-01-25T09:45:00Z",
    createdBy: "Pedro Oliveira",
  },
  {
    id: "4",
    invoiceNumber: "NF-2024-004",
    type: "ENTRADA",
    status: "CANCELADA",
    supplier: "Agro Química Ltda",
    issueDate: "2024-01-30",
    dueDate: "2024-02-30",
    totalAmount: 900.0,
    discount: 0,
    tax: 90.0,
    finalAmount: 990.0,
    items: [mockInvoiceItems[4]],
    notes: "Cancelada por problemas de qualidade",
    created_at: "2024-01-30T16:20:00Z",
    updated_at: "2024-02-01T10:00:00Z",
    createdBy: "Ana Costa",
  },
  {
    id: "5",
    invoiceNumber: "NF-2024-005",
    type: "ENTRADA",
    status: "APROVADA",
    supplier: "Metalúrgica Rural Ltda",
    issueDate: "2024-02-05",
    dueDate: "2024-03-05",
    totalAmount: 700.0,
    discount: 30.0,
    tax: 70.0,
    finalAmount: 740.0,
    items: [mockInvoiceItems[5]],
    notes: "Material para reforma de cercas",
    created_at: "2024-02-05T11:30:00Z",
    updated_at: "2024-02-05T11:30:00Z",
    createdBy: "Carlos Mendes",
  },
  {
    id: "6",
    invoiceNumber: "NF-2024-006",
    type: "SAIDA",
    status: "FINALIZADA",
    customer: "Sítio São José",
    issueDate: "2024-02-10",
    dueDate: "2024-03-10",
    totalAmount: 600.0,
    discount: 0,
    tax: 60.0,
    finalAmount: 660.0,
    items: [mockInvoiceItems[6]],
    notes: "Venda de sal mineral",
    created_at: "2024-02-10T13:45:00Z",
    updated_at: "2024-02-10T13:45:00Z",
    createdBy: "Lucia Ferreira",
  },
  {
    id: "7",
    invoiceNumber: "NF-2024-007",
    type: "ENTRADA",
    status: "APROVADA",
    supplier: "Farmácia Veterinária Central",
    issueDate: "2024-02-15",
    dueDate: "2024-03-15",
    totalAmount: 1500.0,
    discount: 75.0,
    tax: 150.0,
    finalAmount: 1575.0,
    items: [mockInvoiceItems[7]],
    notes: "Medicamentos para controle sanitário",
    created_at: "2024-02-15T08:20:00Z",
    updated_at: "2024-02-15T08:20:00Z",
    createdBy: "Roberto Alves",
  },
  {
    id: "8",
    invoiceNumber: "NF-2024-008",
    type: "TRANSFERENCIA",
    status: "FINALIZADA",
    issueDate: "2024-02-20",
    totalAmount: 2500.0,
    discount: 0,
    tax: 0,
    finalAmount: 2500.0,
    items: [
      {
        id: "9",
        productName: "Milho em Grão",
        quantity: 2000,
        unit: "kg",
        unitPrice: 1.25,
        totalPrice: 2500.0,
        description: "Transferência entre propriedades",
      },
    ],
    notes: "Transferência do silo principal para silo secundário",
    created_at: "2024-02-20T15:10:00Z",
    updated_at: "2024-02-20T15:10:00Z",
    createdBy: "Fernando Lima",
  },
];

// Funções auxiliares para filtrar dados
export const getInvoicesByType = (
  type: "ENTRADA" | "SAIDA" | "TRANSFERENCIA"
) => {
  return mockInvoices.filter((invoice) => invoice.type === type);
};

export const getInvoicesByStatus = (
  status: "PENDENTE" | "APROVADA" | "CANCELADA" | "FINALIZADA"
) => {
  return mockInvoices.filter((invoice) => invoice.status === status);
};

export const getInvoicesByDateRange = (startDate: string, endDate: string) => {
  return mockInvoices.filter((invoice) => {
    const invoiceDate = new Date(invoice.issueDate);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return invoiceDate >= start && invoiceDate <= end;
  });
};

export const getInvoicesBySupplier = (supplier: string) => {
  return mockInvoices.filter((invoice) =>
    invoice.supplier?.toLowerCase().includes(supplier.toLowerCase())
  );
};

export const getInvoicesByCustomer = (customer: string) => {
  return mockInvoices.filter((invoice) =>
    invoice.customer?.toLowerCase().includes(customer.toLowerCase())
  );
};
