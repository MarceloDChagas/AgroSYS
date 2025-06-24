import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from "@nestjs/common";
import { ToolService } from "./tool.service";
import { CreateToolDto } from "@shared/dto/tool/create-tool.dto";
import { UpdateToolDto } from "@shared/dto/tool/update-tool.dto";
import { EStatusTool, EToolName } from "@shared/enums/tool.enum";
import {
  PermissionsGuard,
  RequirePermissions,
  EPermission,
} from "@shared/permissions";

@Controller("tools")
@UseGuards(PermissionsGuard)
export class ToolController {
  constructor(private readonly toolService: ToolService) {}

  //ROTA 1: Buscar todas as ferramentas
  @Get()
  @RequirePermissions(EPermission.READ_TOOL)
  findAll() {
    return this.toolService.findAll();
  }

  //ROTA 6: Buscar ferramentas por status (deve vir antes de :id)
  @Get("filter/status")
  @RequirePermissions(EPermission.READ_TOOL)
  findByStatus(@Query("status") status: EStatusTool) {
    return this.toolService.findByStatus(status);
  }

  //ROTA 7: Buscar ferramentas por nome (deve vir antes de :id)
  @Get("filter/tool-name")
  @RequirePermissions(EPermission.READ_TOOL)
  findByToolName(@Query("toolName") toolName: EToolName) {
    return this.toolService.findByToolName(toolName);
  }

  //ROTA 2: Buscar uma ferramenta através do ID
  @Get(":id")
  @RequirePermissions(EPermission.READ_TOOL)
  findOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.toolService.findOne(id);
  }

  //ROTA 3: Criar uma nova ferramenta
  @Post()
  @RequirePermissions(EPermission.CREATE_TOOL)
  create(@Body() createToolDto: CreateToolDto) {
    return this.toolService.create(createToolDto);
  }

  //ROTA 4: Atualizar uma ferramenta existente
  @Put(":id")
  @RequirePermissions(EPermission.UPDATE_TOOL)
  update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() updateDto: UpdateToolDto
  ) {
    return this.toolService.update(id, updateDto);
  }

  //ROTA 5: Deletar uma ferramenta
  @Delete(":id")
  @RequirePermissions(EPermission.DELETE_TOOL)
  delete(@Param("id", ParseUUIDPipe) id: string) {
    return this.toolService.delete(id);
  }
}
