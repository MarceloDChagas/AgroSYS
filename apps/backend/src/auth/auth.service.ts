import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(
    email: string,
    pass: string
  ): Promise<{ id: string; email: string; name: string } | null> {
    console.log('🔍 Tentando validar usuário:', email);

    const user = await this.usersService.findByEmail(email);
    console.log('👤 Usuário encontrado:', user ? 'Sim' : 'Não');

    if (user) {
      console.log('🔐 Senha fornecida:', pass);
      console.log('🔐 Hash no banco:', user.password.getPassword());

      const isPasswordValid = await bcrypt.compare(
        pass,
        user.password.getPassword()
      );
      console.log('✅ Senha válida:', isPasswordValid);

      if (isPasswordValid) {
        const { password, ...result } = user;
        const userResult = {
          ...result,
          email: result.email.getEmail(),
          name: result.name.getName(),
        };
        console.log('🎉 Login bem-sucedido para:', userResult.email);
        return userResult;
      } else {
        console.log('❌ Senha incorreta');
      }
    } else {
      console.log('❌ Usuário não encontrado no banco');
    }

    return null;
  }

  async login(user: { id: string; email: string; name: string }) {
    console.log('🔑 Gerando token JWT para:', user.email);
    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);
    console.log('🎫 Token gerado:', token.substring(0, 20) + '...');

    return {
      access_token: token,
    };
  }
}
