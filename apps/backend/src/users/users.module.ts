import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { PrismaModule } from "../prisma/prisma.module";
import { UserRepositoryPostgres } from "./repositories/Postgres/UserRepository.postgres";
import { USER_REPOSITORY } from "./repositories/tokens";
import { PermissionsGuard } from "@shared/permissions";

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    PermissionsGuard,
    {
      provide: USER_REPOSITORY,
      useClass: UserRepositoryPostgres,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
