import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  ParseUUIDPipe,
  Request,
} from "@nestjs/common";
import { SalesService } from "./sales.service";
import {
  CreateSaleDto,
  RawCreateSaleDto,
  SaleItemDto,
} from "@shared/dto/sale/create-sale.dto";
import {
  UpdateSaleDto,
  RawUpdateSaleDto,
} from "@shared/dto/sale/update-sale.dto";
import { ESaleStatus } from "@shared/enums/product.enum";
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

@ApiTags("sales")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller("sales")
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  @RequirePermissions(EPermission.CREATE_SALE)
  @ApiOperation({ summary: "Criar nova venda" })
  @ApiResponse({ status: 201, description: "Venda criada com sucesso" })
  async create(@Body() rawDto: RawCreateSaleDto, @Request() req: any) {
    const dto = new CreateSaleDto(
      rawDto.userId || req.user.id, // Se não especificado, usar o usuário logado
      rawDto.items,
      rawDto.status || ESaleStatus.PENDING,
      rawDto.saleDate ? new Date(rawDto.saleDate) : new Date()
    );
    return this.salesService.create(dto);
  }

  @Get()
  @RequirePermissions(EPermission.READ_SALE)
  @ApiOperation({ summary: "Listar todas as vendas" })
  @ApiResponse({
    status: 200,
    description: "Lista de vendas retornada com sucesso",
  })
  async findAll(@Request() req: any) {
    // Se for usuário comum, mostrar apenas suas vendas
    if (req.user.role === "COMMON_USER" || req.user.role === "COMMON") {
      return this.salesService.findByUserId(req.user.id);
    }
    // Se for admin, mostrar todas as vendas
    return this.salesService.findAll();
  }

  @Get("filter/status")
  @RequirePermissions(EPermission.READ_SALE)
  @ApiOperation({ summary: "Buscar vendas por status" })
  async findByStatus(
    @Query("status") status: ESaleStatus,
    @Request() req: any
  ) {
    const sales = await this.salesService.findByStatus(status);

    // Se for usuário comum, filtrar apenas suas vendas
    if (req.user.role === "COMMON_USER" || req.user.role === "COMMON") {
      return sales.filter((sale) => sale.userId === req.user.id);
    }

    return sales;
  }

  @Get("user/:userId")
  @RequirePermissions(EPermission.READ_SALE)
  @ApiOperation({ summary: "Buscar vendas por usuário" })
  async findByUserId(
    @Param("userId", ParseUUIDPipe) userId: string,
    @Request() req: any
  ) {
    // Usuários comuns só podem ver suas próprias vendas
    if (
      (req.user.role === "COMMON_USER" || req.user.role === "COMMON") &&
      req.user.id !== userId
    ) {
      return [];
    }

    return this.salesService.findByUserId(userId);
  }

  @Get(":id")
  @RequirePermissions(EPermission.READ_SALE)
  @ApiOperation({ summary: "Buscar venda por ID" })
  @ApiResponse({ status: 200, description: "Venda encontrada com sucesso" })
  @ApiResponse({ status: 404, description: "Venda não encontrada" })
  async findOne(@Param("id", ParseUUIDPipe) id: string, @Request() req: any) {
    const sale = await this.salesService.findOne(id);

    // Usuários comuns só podem ver suas próprias vendas
    if (
      (req.user.role === "COMMON_USER" || req.user.role === "COMMON") &&
      sale.userId !== req.user.id
    ) {
      return null;
    }

    return sale;
  }

  @Patch(":id")
  @RequirePermissions(EPermission.UPDATE_SALE)
  @ApiOperation({ summary: "Atualizar venda" })
  @ApiResponse({ status: 200, description: "Venda atualizada com sucesso" })
  @ApiResponse({ status: 404, description: "Venda não encontrada" })
  async update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() rawDto: RawUpdateSaleDto
  ) {
    const dto = new UpdateSaleDto(
      rawDto.status,
      rawDto.saleDate ? new Date(rawDto.saleDate) : undefined
    );
    return this.salesService.update(id, dto);
  }

  @Delete(":id")
  @RequirePermissions(EPermission.DELETE_SALE)
  @ApiOperation({ summary: "Deletar venda" })
  @ApiResponse({ status: 200, description: "Venda deletada com sucesso" })
  @ApiResponse({ status: 404, description: "Venda não encontrada" })
  async remove(@Param("id", ParseUUIDPipe) id: string) {
    await this.salesService.remove(id);
    return { message: "Venda deletada com sucesso" };
  }

  @Patch(":id/complete")
  @RequirePermissions(EPermission.UPDATE_SALE)
  @ApiOperation({ summary: "Completar venda" })
  async completeSale(@Param("id", ParseUUIDPipe) id: string) {
    return this.salesService.completeSale(id);
  }

  @Patch(":id/cancel")
  @RequirePermissions(EPermission.UPDATE_SALE)
  @ApiOperation({ summary: "Cancelar venda" })
  async cancelSale(@Param("id", ParseUUIDPipe) id: string) {
    return this.salesService.cancelSale(id);
  }
}
