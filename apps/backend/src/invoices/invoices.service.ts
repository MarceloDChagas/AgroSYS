import { Injectable, Inject, NotFoundException } from "@nestjs/common";
import {
  IInvoiceRepository,
  INVOICE_REPOSITORY,
} from "./repositories/invoice.repository.interface";
import { CreateInvoiceDto } from "@shared/dto/invoice/create-invoice.dto";
import { UpdateInvoiceDto } from "@shared/dto/invoice/update-invoice.dto";
import { InvoiceWithSale } from "@shared/types/product";
import { EInvoiceStatus } from "@shared/enums/product.enum";
import { SalesService } from "../sales/sales.service";

@Injectable()
export class InvoicesService {
  constructor(
    @Inject(INVOICE_REPOSITORY)
    private readonly invoiceRepository: IInvoiceRepository,
    private readonly salesService: SalesService
  ) {}

  async createFromSale(saleId: string): Promise<InvoiceWithSale> {
    const sale = await this.salesService.findOne(saleId);

    const existingInvoice = await this.invoiceRepository.findBySaleId(saleId);
    if (existingInvoice) {
      throw new Error("Já existe uma nota fiscal para esta venda");
    }

    const invoiceNumber = await this.invoiceRepository.generateInvoiceNumber();

    const dto = new CreateInvoiceDto(
      saleId,
      sale.uapId,
      invoiceNumber,
      sale.totalAmount,
      EInvoiceStatus.DRAFT
    );

    return await this.invoiceRepository.create(dto);
  }

  async findAll(): Promise<InvoiceWithSale[]> {
    return await this.invoiceRepository.findAll();
  }

  async findOne(id: string): Promise<InvoiceWithSale> {
    const invoice = await this.invoiceRepository.findOne(id);
    if (!invoice) {
      throw new NotFoundException(`Nota fiscal com ID ${id} não encontrada`);
    }
    return invoice;
  }

  async issueInvoice(id: string): Promise<InvoiceWithSale> {
    return await this.invoiceRepository.update(
      id,
      new UpdateInvoiceDto(EInvoiceStatus.ISSUED)
    );
  }

  async markAsPaid(id: string): Promise<InvoiceWithSale> {
    return await this.invoiceRepository.update(
      id,
      new UpdateInvoiceDto(EInvoiceStatus.PAID, undefined, new Date())
    );
  }
}
