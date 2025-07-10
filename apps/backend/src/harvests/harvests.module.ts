import { Module } from "@nestjs/common";
import { HarvestsController } from "./harvests.controller";
import { HarvestsService } from "./harvests.service";
import { HarvestRepositoryPostgres } from "./repositories/Postgres/HarvestRepository.postgres";
import { PrismaService } from "../prisma/prisma.service";
import { HARVEST_REPOSITORY } from "./repositories/harvestToken";
import { PermissionsGuard } from "@shared/permissions";

@Module({
  controllers: [HarvestsController],
  providers: [
    HarvestsService,
    PrismaService,
    PermissionsGuard,
    {
      provide: HARVEST_REPOSITORY,
      useClass: HarvestRepositoryPostgres,
    },
  ],
  exports: [HarvestsService],
})
export class HarvestsModule {}
