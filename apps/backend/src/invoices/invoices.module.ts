import { Module } from "@nestjs/common";
import { InvoicesController } from "./invoices.controller";
import { InvoicesService } from "./invoices.service";
import { PrismaService } from "../prisma/prisma.service";
import { PermissionsGuard } from "@shared/permissions";
import { INVOICE_REPOSITORY } from "./repositories/invoice.repository.interface";
import { InvoiceRepositoryPostgres } from "./repositories/Postgres/InvoiceRepository.postgres";
import { SalesModule } from "../sales/sales.module";

@Module({
  imports: [SalesModule],
  controllers: [InvoicesController],
  providers: [
    InvoicesService,
    PrismaService,
    PermissionsGuard,
    {
      provide: INVOICE_REPOSITORY,
      useClass: InvoiceRepositoryPostgres,
    },
  ],
  exports: [InvoicesService],
})
export class InvoicesModule {}
