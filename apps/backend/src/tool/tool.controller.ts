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
} from "@nestjs/common";
import { ToolService } from "./tool.service";
import { CreateToolDto } from "@shared/dto/tool/create-tool.dto";
import { UpdateToolDto } from "@shared/dto/tool/update-tool.dto";
import { EStatusTool, EToolName } from "@shared/enums/tool.enum";

@Controller("tools")
export class ToolController {
  constructor(private readonly toolService: ToolService) {}

  //ROTA 1: Buscar todas as ferramentas
  @Get()
  findAll() {
    return this.toolService.findAll();
  }

  //ROTA 6: Buscar ferramentas por status (deve vir antes de :id)
  @Get("filter/status")
  findByStatus(@Query("status") status: EStatusTool) {
    return this.toolService.findByStatus(status);
  }

  //ROTA 7: Buscar ferramentas por nome (deve vir antes de :id)
  @Get("filter/tool-name")
  findByToolName(@Query("toolName") toolName: EToolName) {
    return this.toolService.findByToolName(toolName);
  }

  //ROTA 2: Buscar uma ferramenta através do ID
  @Get(":id")
  findOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.toolService.findOne(id);
  }

  //ROTA 3: Criar uma nova ferramenta
  @Post()
  create(@Body() createToolDto: CreateToolDto) {
    return this.toolService.create(createToolDto);
  }

  //ROTA 4: Atualizar uma ferramenta existente
  @Put(":id")
  update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() updateDto: UpdateToolDto
  ) {
    return this.toolService.update(id, updateDto);
  }

  //ROTA 5: Deletar uma ferramenta
  @Delete(":id")
  delete(@Param("id", ParseUUIDPipe) id: string) {
    return this.toolService.delete(id);
  }
}
