import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const host = '127.0.0.1';
  const port = 3000;

  const config = new DocumentBuilder()
    .setTitle('ws project one')
    .setDescription('The ws project one API description')
    .setVersion('1.0')
    .addTag('ws')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  // Logger
  Logger.log(
    `Server is Running(🔥) on http://${host}:${port}/api/`,
    'ws project one',
  );
}
bootstrap();
