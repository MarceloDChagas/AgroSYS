import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { IUserRepository } from './repositories/user.repository.interface';
import { USER_REPOSITORY } from './repositories/tokens';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: IUserRepository
  ) {}

  async findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  async create(data: { email: string; password: string; name: string }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.userRepository.create({
      ...data,
      password: hashedPassword,
    });
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
