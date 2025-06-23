import { User } from '@prisma/client';
import { CreateUserDto } from '@shared/dto/user/create-user.dto';
import { UpdateUserDto } from '@shared/dto/user/update-user.dto';
import { ERole } from '@shared/enums/user.enum';

export const USER_REPOSITORY = 'USER_REPOSITORY';

export interface IUserRepository {
  findOne(id: string): Promise<PrismaUser | null>;

  findAll(): Promise<PrismaUser[]>;

  create(data: CreateUserDto): Promise<PrismaUser>;

  update(id: string, data: UpdateUserDto): Promise<PrismaUser | null>;

  delete(id: string): Promise<void>;

  findByRole(role: Role): Promise<PrismaUser[]>;

  findByEmail(email: string): Promise<PrismaUser | null>;
}
