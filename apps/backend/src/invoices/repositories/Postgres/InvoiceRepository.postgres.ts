import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/prisma.service";
import { CreateInvoiceDto } from "@shared/dto/invoice/create-invoice.dto";
import { UpdateInvoiceDto } from "@shared/dto/invoice/update-invoice.dto";
import { IInvoiceRepository } from "../invoice.repository.interface";
import { InvoiceWithSale } from "@shared/types/product";
import { EInvoiceStatus, InvoiceStatus } from "@shared/enums/product.enum";

// Mapeamento entre enums
const statusMap = {
  [InvoiceStatus.DRAFT]: EInvoiceStatus.DRAFT,
  [InvoiceStatus.ISSUED]: EInvoiceStatus.ISSUED,
  [InvoiceStatus.PAID]: EInvoiceStatus.PAID,
  [InvoiceStatus.CANCELLED]: EInvoiceStatus.CANCELLED,
};

const reverseStatusMap = {
  [EInvoiceStatus.DRAFT]: InvoiceStatus.DRAFT,
  [EInvoiceStatus.ISSUED]: InvoiceStatus.ISSUED,
  [EInvoiceStatus.PAID]: InvoiceStatus.PAID,
  [EInvoiceStatus.CANCELLED]: InvoiceStatus.CANCELLED,
};

const invoiceSelect = {
  id: true,
  saleId: true,
  uapId: true,
  invoiceNumber: true,
  totalAmount: true,
  status: true,
  issueDate: true,
  dueDate: true,
  paidDate: true,
  createdAt: true,
  updatedAt: true,
  sale: {
    select: {
      id: true,
      totalAmount: true,
      status: true,
      saleDate: true,
      saleItems: {
        select: {
          id: true,
          productId: true,
          quantity: true,
          unitPrice: true,
          totalPrice: true,
          product: {
            select: {
              id: true,
              name: true,
              price: true,
            },
          },
        },
      },
    },
  },
  uap: {
    select: {
      id: true,
      name: true,
      location: true,
      responsible: true,
    },
  },
};

function toDomainInvoice(prismaInvoice: any): InvoiceWithSale {
  return {
    ...prismaInvoice,
    totalAmount: Number(prismaInvoice.totalAmount),
    status: statusMap[prismaInvoice.status],
    sale: {
      ...prismaInvoice.sale,
      totalAmount: Number(prismaInvoice.sale.totalAmount),
      saleItems: prismaInvoice.sale.saleItems.map((item: any) => ({
        ...item,
        unitPrice: Number(item.unitPrice),
        totalPrice: Number(item.totalPrice),
      })),
    },
  };
}

@Injectable()
export class InvoiceRepositoryPostgres implements IInvoiceRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<InvoiceWithSale[]> {
    const invoices = await this.prisma.invoice.findMany({
      select: invoiceSelect,
      orderBy: { createdAt: "desc" },
    });
    return invoices.map(toDomainInvoice);
  }

  async findOne(id: string): Promise<InvoiceWithSale | null> {
    const invoice = await this.prisma.invoice.findUnique({
      where: { id },
      select: invoiceSelect,
    });
    return invoice ? toDomainInvoice(invoice) : null;
  }

  async findById(id: string): Promise<InvoiceWithSale | null> {
    return this.findOne(id);
  }

  async findByUapId(uapId: string): Promise<InvoiceWithSale[]> {
    const invoices = await this.prisma.invoice.findMany({
      where: { uapId },
      select: invoiceSelect,
      orderBy: { createdAt: "desc" },
    });
    return invoices.map(toDomainInvoice);
  }

  async findByStatus(status: EInvoiceStatus): Promise<InvoiceWithSale[]> {
    const invoices = await this.prisma.invoice.findMany({
      where: { status: reverseStatusMap[status] },
      select: invoiceSelect,
      orderBy: { createdAt: "desc" },
    });
    return invoices.map(toDomainInvoice);
  }

  async findBySaleId(saleId: string): Promise<InvoiceWithSale | null> {
    const invoice = await this.prisma.invoice.findUnique({
      where: { saleId },
      select: invoiceSelect,
    });
    return invoice ? toDomainInvoice(invoice) : null;
  }

  async create(data: CreateInvoiceDto): Promise<InvoiceWithSale> {
    const invoice = await this.prisma.invoice.create({
      data: {
        saleId: data.saleId,
        uapId: data.uapId,
        invoiceNumber: data.invoiceNumber,
        totalAmount: data.totalAmount,
        status: reverseStatusMap[data.status],
        issueDate: data.issueDate,
        dueDate: data.dueDate,
      },
      select: invoiceSelect,
    });
    return toDomainInvoice(invoice);
  }

  async update(
    id: string,
    data: UpdateInvoiceDto
  ): Promise<InvoiceWithSale | null> {
    const updateData: any = {};

    if (data.status !== undefined) {
      updateData.status = reverseStatusMap[data.status];
    }
    if (data.dueDate !== undefined) {
      updateData.dueDate = data.dueDate;
    }
    if (data.paidDate !== undefined) {
      updateData.paidDate = data.paidDate;
    }

    const invoice = await this.prisma.invoice.update({
      where: { id },
      data: updateData,
      select: invoiceSelect,
    });
    return toDomainInvoice(invoice);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.invoice.delete({ where: { id } });
  }

  async generateInvoiceNumber(): Promise<string> {
    const lastInvoice = await this.prisma.invoice.findFirst({
      orderBy: { createdAt: "desc" },
      select: { invoiceNumber: true },
    });

    if (!lastInvoice) {
      return "NF-2024-001";
    }

    const match = lastInvoice.invoiceNumber.match(/NF-(\d{4})-(\d+)/);
    if (!match) {
      return "NF-2024-001";
    }

    const year = match[1];
    const number = parseInt(match[2]) + 1;
    return `NF-${year}-${number.toString().padStart(3, "0")}`;
  }
}
