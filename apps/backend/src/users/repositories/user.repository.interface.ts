import { User } from '@prisma/client';
import { CreateUserDto } from '@shared/dto/user/create-user.dto';
import { UpdateUserDto } from '@shared/dto/user/update-user.dto';
import { ERole } from '@shared/enums/user.enum';

export const USER_REPOSITORY = 'USER_REPOSITORY';

export interface IUserRepository {
  findOne(id: string): Promise<User | null>;

  findAll(): Promise<User[]>;

  create(data: CreateUserDto): Promise<User>;

  update(id: string, data: UpdateUserDto): Promise<User | null>;

  delete(id: string): Promise<void>;

  findByRole(role: Role): Promise<User[]>;

  findByEmail(email: string): Promise<User | null>;
}
