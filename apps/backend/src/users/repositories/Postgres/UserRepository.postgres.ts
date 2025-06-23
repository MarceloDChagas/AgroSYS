import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { IUserRepository } from '../user.repository.interface';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateUserDto } from '@shared/dto/user/create-user.dto';
import { UpdateUserDto } from '@shared/dto/user/update-user.dto';
import { ERole } from '@shared/enums/user.enum';

@Injectable()
export class UserRepositoryPostgres implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async create(data: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async update(id: string, data: UpdateUserDto): Promise<User | null> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }

  async findByRole(role: ERole): Promise<User[]> {
    return this.prisma.user.findMany({
      where: { role },
    });
  }
}
