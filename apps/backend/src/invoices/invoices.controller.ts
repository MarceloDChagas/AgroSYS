import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  UseGuards,
  ParseUUIDPipe,
} from "@nestjs/common";
import { InvoicesService } from "./invoices.service";
import {
  PermissionsGuard,
  RequirePermissions,
  EPermission,
} from "@shared/permissions";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from "@nestjs/swagger";

@ApiTags("invoices")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller("invoices")
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Post("from-sale/:saleId")
  @RequirePermissions(EPermission.CREATE_INVOICE)
  @ApiOperation({ summary: "Criar nota fiscal a partir de uma venda" })
  async createFromSale(@Param("saleId", ParseUUIDPipe) saleId: string) {
    return this.invoicesService.createFromSale(saleId);
  }

  @Get()
  @RequirePermissions(EPermission.READ_INVOICE)
  @ApiOperation({ summary: "Listar todas as notas fiscais" })
  async findAll() {
    return this.invoicesService.findAll();
  }

  @Get(":id")
  @RequirePermissions(EPermission.READ_INVOICE)
  @ApiOperation({ summary: "Buscar nota fiscal por ID" })
  async findOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.invoicesService.findOne(id);
  }

  @Patch(":id/issue")
  @RequirePermissions(EPermission.ISSUE_INVOICE)
  @ApiOperation({ summary: "Emitir nota fiscal" })
  async issueInvoice(@Param("id", ParseUUIDPipe) id: string) {
    return this.invoicesService.issueInvoice(id);
  }

  @Patch(":id/mark-paid")
  @RequirePermissions(EPermission.UPDATE_INVOICE)
  @ApiOperation({ summary: "Marcar nota fiscal como paga" })
  async markAsPaid(@Param("id", ParseUUIDPipe) id: string) {
    return this.invoicesService.markAsPaid(id);
  }
}
