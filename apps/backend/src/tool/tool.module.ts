import { Module } from "@nestjs/common";
import { ToolController } from "./tool.controller";
import { ToolService } from "./tool.service";
import { ToolRepository } from "./repositories/Postgres/ToolRepository.postgres";
import { PrismaService } from "../prisma/prisma.service";
import { TOOL_REPOSITORY } from "./repositories/tool.repository.interface";
import { PermissionsGuard } from "@shared/permissions";

@Module({
  controllers: [ToolController],
  providers: [
    ToolService,
    PrismaService,
    PermissionsGuard,
    {
      provide: TOOL_REPOSITORY,
      useClass: ToolRepository,
    },
  ],
})
export class ToolModule {}
