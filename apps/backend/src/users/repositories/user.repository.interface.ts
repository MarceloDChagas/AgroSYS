import { ERole } from '@shared/enums/user.enum';
import { CreateUserDto } from '@shared/dto/user/create.user.dto';
import { UpdateUserDto } from '@shared/dto/user/update-user.dto';
import { User } from '@shared/types/user';

export interface IUserRepository {
  findOne(id: string): Promise<User | null>;

  findById(id: string): Promise<User | null>;

  findAll(): Promise<User[]>;

  create(data: CreateUserDto): Promise<User>;

  update(id: string, data: UpdateUserDto): Promise<User | null>;

  delete(id: string): Promise<void>;

  findByRole(role: ERole): Promise<User[]>;

  findByEmail(email: string): Promise<User | null>;
}
