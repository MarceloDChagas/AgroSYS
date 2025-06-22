import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { PrismaModule } from "../prisma/prisma.module";
import { UserRepositoryPostgres } from "./repositories/Postgres/UserRepository.postgres";
import { USER_REPOSITORY } from "./repositories/tokens";

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: USER_REPOSITORY,
      useClass: UserRepositoryPostgres,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
