import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { IUserRepository } from './repositories/user.repository.interface';
import { USER_REPOSITORY } from './repositories/tokens';
import { Email } from '@shared/value-objects/email.vo';
import { Name } from '@shared/value-objects/name.vo';
import { Password } from '@shared/value-objects/password.vo';
import { ERole } from '@shared/enums/user.enum';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: IUserRepository
  ) {}

  async findByEmail(email: string) {
    console.log('🔍 UsersService: Buscando usuário por email:', email);
    const user = await this.userRepository.findByEmail(email);
    console.log('👤 UsersService: Usuário encontrado:', user ? 'Sim' : 'Não');
    if (user) {
      console.log('📧 Email no banco:', user.email.getEmail());
      console.log(
        '🔐 Password hash:',
        user.password.getPassword().substring(0, 20) + '...'
      );
    }
    return user;
  }

  async create(data: {
    email: string;
    password: string;
    name: string;
    role?: ERole;
  }) {
    console.log('📝 UsersService: Criando usuário:', data.email);

    const emailVO = new Email(data.email);
    const nameVO = new Name(data.name);
    const passwordVO = Password.create(data.password);

    console.log('🔐 Senha original:', data.password);
    console.log(
      '🔐 Password VO criado:',
      passwordVO.getPassword().substring(0, 20) + '...'
    );

    const user = await this.userRepository.create({
      email: emailVO,
      password: passwordVO,
      name: nameVO,
      role: data.role || ERole.COMMON_USER,
    });

    console.log('✅ Usuário criado com sucesso:', user.email.getEmail());
    return user;
  }

  async findAll() {
    return this.userRepository.findAll();
  }

  async findOne(id: string) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }
}
