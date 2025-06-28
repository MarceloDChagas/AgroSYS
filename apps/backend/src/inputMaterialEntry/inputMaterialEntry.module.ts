import { Module } from "@nestjs/common";
import { InputMaterialEntryController } from "./inputMaterialEntry.controller";
import { InputMaterialEntryService } from "./inputMaterialEntry.service";
import { InputMaterialEntryRepositoryPostgres } from "./repositories/Postgres/InputMaterialEntryRepository.postgres";
import { PrismaService } from "../prisma/prisma.service";
import { INPUT_MATERIAL_ENTRY_REPOSITORY } from "./repositories/inputMaterialEntryToken";
import { PermissionsGuard } from "@shared/permissions";

@Module({
  controllers: [InputMaterialEntryController],
  providers: [
    InputMaterialEntryService,
    PrismaService,
    PermissionsGuard,
    {
      provide: INPUT_MATERIAL_ENTRY_REPOSITORY,
      useClass: InputMaterialEntryRepositoryPostgres,
    },
  ],
  exports: [InputMaterialEntryService],
})
export class InputMaterialEntryModule {}
