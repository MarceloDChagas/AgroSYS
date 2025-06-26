import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { ProductRepositoryPostgres } from "./repositories/Postgres/ProductRepository.postgres";
import { PrismaService } from "../prisma/prisma.service";
import { PRODUCT_REPOSITORY } from "./repositories/productToken";
import { PermissionsGuard } from "@shared/permissions";

@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService,
    PrismaService,
    PermissionsGuard,
    {
      provide: PRODUCT_REPOSITORY,
      useClass: ProductRepositoryPostgres,
    },
  ],
  exports: [ProductsService],
})
export class ProductsModule {}
