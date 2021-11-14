import './config/env.config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { initializeSwagger } from './config/swager.config';
import { CONFIG } from './shared/constants/CONFIG';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(CONFIG.BASE_PATH);
  initializeSwagger(app);
  await app.listen(3000);
}
bootstrap();
