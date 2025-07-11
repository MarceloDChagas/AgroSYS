import { Module } from "@nestjs/common";
import { UapsController } from "./uaps.controller";
import { UapsService } from "./uaps.service";
import { PrismaService } from "../prisma/prisma.service";
import { PermissionsGuard } from "@shared/permissions";
import { UAP_REPOSITORY } from "./repositories/uapToken";
import { UapRepositoryPostgres } from "./repositories/Postgres/UapRepository.postgres";

@Module({
  controllers: [UapsController],
  providers: [
    UapsService,
    PrismaService,
    PermissionsGuard,
    {
      provide: UAP_REPOSITORY,
      useClass: UapRepositoryPostgres,
    },
  ],
  exports: [UapsService],
})
export class UapsModule {}
