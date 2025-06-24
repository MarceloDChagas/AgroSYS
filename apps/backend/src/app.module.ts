import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "./prisma/prisma.module";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { ToolModule } from "./tool/tool.module";
import { ProductsModule } from "./products/products.module";
import { SalesModule } from "./sales/sales.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    ToolModule,
    ProductsModule,
    SalesModule,
  ],
})
export class AppModule {}
