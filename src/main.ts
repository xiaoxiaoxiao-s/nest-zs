import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets('public');

  // 请求都带api
  app.setGlobalPrefix('api');

  app.enableCors();

  await app.listen(80);
}
bootstrap();
