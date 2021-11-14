import './config/env.config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { initializeSwagger } from './config/swager.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initializeSwagger(app);
  app.setGlobalPrefix('/stralom/life-gamification');
  await app.listen(3000);
}
bootstrap();
