import {
  Controller,
  Post,
  UseGuards,
  Get,
  Request,
  Body,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { CreateUserDto } from "@shared/dto/user/create.user.dto";
import { RawCreateUserDto } from "@shared/dto/user/raw-create-user.dto";
import { Email } from "@shared/value-objects/email.vo";
import { Name } from "@shared/value-objects/name.vo";
import { Password } from "@shared/value-objects/password.vo";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("login")
  @ApiOperation({ summary: "Login de usuário" })
  @ApiResponse({ status: 200, description: "Login realizado com sucesso" })
  @ApiResponse({ status: 401, description: "Não autorizado" })
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  @ApiOperation({ summary: "Obter perfil do usuário" })
  @ApiResponse({ status: 200, description: "Perfil obtido com sucesso" })
  @ApiResponse({ status: 401, description: "Não autorizado" })
  getProfile(@Request() req) {
    return req.user;
  }

  @Post("register")
  @ApiOperation({ summary: "Registrar novo usuário" })
  @ApiResponse({ status: 201, description: "Usuário registrado com sucesso" })
  @ApiResponse({ status: 400, description: "Dados inválidos" })
  async register(@Body() rawDto: RawCreateUserDto) {
    const dto = new CreateUserDto(
      new Email(rawDto.email),
      Password.create(rawDto.password),
      new Name(rawDto.name),
      rawDto.role
    );
    return this.authService.register(dto);
  }
}
