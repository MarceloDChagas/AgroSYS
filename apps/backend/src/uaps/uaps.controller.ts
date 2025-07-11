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
import { UapsService } from "./uaps.service";
import { CreateUapDto } from "@shared/dto/uap/create-uap.dto";
import { UpdateUapDto } from "@shared/dto/uap/update-uap.dto";
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

@ApiTags("uaps")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller("uaps")
export class UapsController {
  constructor(private readonly uapsService: UapsService) {}

  @Post()
  @RequirePermissions(EPermission.CREATE_UAP)
  @ApiOperation({ summary: "Criar nova UAP" })
  @ApiResponse({ status: 201, description: "UAP criada com sucesso" })
  async create(@Body() dto: CreateUapDto) {
    return this.uapsService.create(dto);
  }

  @Get()
  @RequirePermissions(EPermission.READ_UAP)
  @ApiOperation({ summary: "Listar todas as UAPs" })
  async findAll() {
    return this.uapsService.findAll();
  }

  @Get(":id")
  @RequirePermissions(EPermission.READ_UAP)
  @ApiOperation({ summary: "Buscar UAP por ID" })
  async findOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.uapsService.findOne(id);
  }

  @Patch(":id")
  @RequirePermissions(EPermission.UPDATE_UAP)
  @ApiOperation({ summary: "Atualizar UAP" })
  async update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() dto: UpdateUapDto
  ) {
    return this.uapsService.update(id, dto);
  }

  @Delete(":id")
  @RequirePermissions(EPermission.DELETE_UAP)
  @ApiOperation({ summary: "Excluir UAP" })
  async remove(@Param("id", ParseUUIDPipe) id: string) {
    return this.uapsService.remove(id);
  }
}
