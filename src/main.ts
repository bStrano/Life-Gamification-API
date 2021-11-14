import './config/env.config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/stralom/life-gamification');
  await app.listen(3000);
}
bootstrap();
