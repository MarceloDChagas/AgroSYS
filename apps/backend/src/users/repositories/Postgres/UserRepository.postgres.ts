import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/prisma.service";
import { CreateUserDto } from "@shared/dto/user/create.user.dto";
import { IUserRepository } from "../user.repository.interface";
import { User } from "@shared/types/user";
import { ERole, Role } from "@shared/enums/user.enum";
import { UserPrismaSelected, userSelect } from "./Utils.postgres";
import { Email } from "@shared/value-objects/email.vo";
import { Name } from "@shared/value-objects/name.vo";
import { Password } from "@shared/value-objects/password.vo";
import { UpdateUserDto } from "@shared/dto/user/update-user.dto";
import { roleMap, reverseRoleMap } from "@shared/permissions/permission.map";

function toDomainUser(prismaUser: UserPrismaSelected): User {
  return {
    ...prismaUser,
    email: new Email(prismaUser.email),
    name: new Name(prismaUser.name),
    password: Password.fromHashed(prismaUser.password),
    role: roleMap[prismaUser.role],
  };
}

@Injectable()
export class UserRepositoryPostgres implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: userSelect,
    });
    return user ? toDomainUser(user) : null;
  }

  async create(data: CreateUserDto): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        email: data.email.getEmail(),
        password: await data.password.getHashed(),
        name: data.name.getName(),
        role: data.role ? reverseRoleMap[data.role] : Role.COMMON,
      },
      select: userSelect,
    });
    return toDomainUser(user);
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      select: userSelect,
    });
    return users.map(toDomainUser);
  }

  async findOne(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: userSelect,
    });
    return user ? toDomainUser(user) : null;
  }

  async findById(id: string): Promise<User | null> {
    return this.findOne(id);
  }

  async update(id: string, data: UpdateUserDto): Promise<User | null> {
    const updateData: any = {};

    if (data.email) {
      updateData.email = data.email.getEmail();
    }
    if (data.password) {
      updateData.password = await data.password.getHashed();
    }
    if (data.name) {
      updateData.name = data.name.getName();
    }
    if (data.role) {
      updateData.role = reverseRoleMap[data.role];
    }

    const user = await this.prisma.user.update({
      where: { id },
      data: updateData,
      select: userSelect,
    });
    return toDomainUser(user);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }

  async findByRole(role: ERole): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      where: { role: reverseRoleMap[role] },
      select: userSelect,
    });
    return users.map(toDomainUser);
  }
}
