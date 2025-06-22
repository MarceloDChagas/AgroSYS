import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe, Logger } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do CORS
  app.enableCors();

  // Configuração do ValidationPipe para validação de DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    })
  );

  // Configuração do Swagger (Documentação da API)
  const config = new DocumentBuilder()
    .setTitle("Sistema de Gestão Agropecuária API")
    .setDescription("API do Sistema de Gestão Agropecuária")
    .setVersion("1.0")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  Logger.log("Servidor iniciado na porta 3000");
  // Inicialização do servidor
  await app.listen(3000);
}
bootstrap();
