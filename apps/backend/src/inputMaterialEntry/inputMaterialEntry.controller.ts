import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseUUIDPipe,
} from "@nestjs/common";
import { InputMaterialEntryService } from "./input-material-entry.service";
import {
  CreateInputMaterialEntryDto,
  RawCreateInputMaterialEntryDto,
} from "@shared/dto/inputMaterialEntry/create-inputMaterialEntry.dto";
import {
  UpdateInputMaterialEntryDto,
  RawUpdateInputMaterialEntryDto,
} from "@shared/dto/inputMaterialEntry/update-inputMaterialEntry.dto";
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

@ApiTags("input-material-entries")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller("input-material-entries")
export class InputMaterialEntryController {
  constructor(
    private readonly inputMaterialEntryService: InputMaterialEntryService
  ) {}

  @Post()
  @RequirePermissions(EPermission.CREATE_INPUT_MATERIAL_ENTRY)
  @ApiOperation({ summary: "Criar nova entrada de insumo/material" })
  @ApiResponse({ status: 201, description: "Entrada criada com sucesso" })
  async create(@Body() rawDto: RawCreateInputMaterialEntryDto) {
    const dto = new CreateInputMaterialEntryDto(
      rawDto.date,
      rawDto.quantity,
      rawDto.productId
    );
    return this.inputMaterialEntryService.create(dto);
  }

  @Get()
  @RequirePermissions(EPermission.READ_INPUT_MATERIAL_ENTRY)
  @ApiOperation({ summary: "Listar todas as entradas de materiais" })
  async findAll() {
    return this.inputMaterialEntryService.findAll();
  }

  @Get("product/:productId")
  @RequirePermissions(EPermission.READ_INPUT_MATERIAL_ENTRY)
  @ApiOperation({ summary: "Buscar entradas por ID do produto" })
  async findByProduct(@Param("productId", ParseUUIDPipe) productId: string) {
    return this.inputMaterialEntryService.findByProduct(productId);
  }

  @Get(":id")
  @RequirePermissions(EPermission.READ_INPUT_MATERIAL_ENTRY)
  @ApiOperation({ summary: "Buscar entrada por ID" })
  async findOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.inputMaterialEntryService.findOne(id);
  }

  @Patch(":id")
  @RequirePermissions(EPermission.UPDATE_INPUT_MATERIAL_ENTRY)
  @ApiOperation({ summary: "Atualizar entrada de material" })
  async update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() rawDto: RawUpdateInputMaterialEntryDto
  ) {
    const dto = new UpdateInputMaterialEntryDto(
      rawDto.date,
      rawDto.quantity,
      rawDto.productId
    );
    return this.inputMaterialEntryService.update(id, dto);
  }

  @Delete(":id")
  @RequirePermissions(EPermission.DELETE_INPUT_MATERIAL_ENTRY)
  @ApiOperation({ summary: "Deletar entrada de material" })
  async remove(@Param("id", ParseUUIDPipe) id: string) {
    await this.inputMaterialEntryService.remove(id);
    return { message: "Entrada deletada com sucesso" };
  }
}
