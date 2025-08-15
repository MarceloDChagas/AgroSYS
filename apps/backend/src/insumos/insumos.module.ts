import { Module } from '@nestjs/common';
import { InsumosController } from './insumos.controller';
import { InsumosService } from './insumos.service';
import { InsumoRepositoryPostgres } from './repositories/Postgres/InsumoRepository.postgres';
import { INSUMO_REPOSITORY } from './repositories/insumoToken';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [InsumosController],
  providers: [
    InsumosService,
    {
      provide: INSUMO_REPOSITORY,
      useClass: InsumoRepositoryPostgres,
    },
  ],
  exports: [InsumosService],
})
export class InsumosModule {}
