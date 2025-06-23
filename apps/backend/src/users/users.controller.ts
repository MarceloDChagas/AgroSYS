import { Controller, Get, Post, Body, Param, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from "@nestjs/swagger";
import { RawCreateUserDto } from "@shared/dto/user/raw-create-user.dto";

@ApiTags("users")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: "Criar novo usuário" })
  @ApiResponse({ status: 201, description: "Usuário criado com sucesso" })
  async create(@Body() rawDto: RawCreateUserDto) {
    return this.usersService.create({
      email: rawDto.email,
      password: rawDto.password,
      name: rawDto.name,
      role: rawDto.role,
    });
  }

  @Get()
  @ApiOperation({ summary: "Listar todos os usuários" })
  @ApiResponse({
    status: 200,
    description: "Lista de usuários retornada com sucesso",
  })
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Buscar usuário por ID" })
  @ApiResponse({ status: 200, description: "Usuário encontrado com sucesso" })
  @ApiResponse({ status: 404, description: "Usuário não encontrado" })
  async findOne(@Param("id") id: string) {
    return this.usersService.findOne(id);
  }
}
