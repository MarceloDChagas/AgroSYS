import { Injectable, NotFoundException, Inject, Logger } from "@nestjs/common";
import { IUserRepository } from "./repositories/user.repository.interface";
import { USER_REPOSITORY } from "./repositories/userToken";
import { Email } from "@shared/value-objects/email.vo";
import { Name } from "@shared/value-objects/name.vo";
import { Password } from "@shared/value-objects/password.vo";
import { ERole } from "@shared/enums/user.enum";

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: IUserRepository
  ) {}

  async findByEmail(email: string) {
    const user = await this.userRepository.findByEmail(email);
    return user;
  }

  async create(data: {
    email: string;
    password: string;
    name: string;
    role?: ERole;
  }) {
    const emailVO = new Email(data.email);
    const nameVO = new Name(data.name);
    const passwordVO = Password.create(data.password);

    const user = await this.userRepository.create({
      email: emailVO,
      password: passwordVO,
      name: nameVO,
      role: data.role || ERole.COMMON_USER,
    });

    this.logger.log(`User created successfully: ${user.email.getEmail()}`);
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
