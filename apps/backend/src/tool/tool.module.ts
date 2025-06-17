import { Module } from '@nestjs/common';
import { ToolController } from './tool.controller';
import { ToolService } from './tool.service';
import { ToolRepository } from './repositories/tool.repository';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ToolController],
  providers: [
    ToolService,
    PrismaService,
    {
      provide: 'IToolRepository',
      useClass: ToolRepository,
    },
  ],
})
export class ToolModule {}
