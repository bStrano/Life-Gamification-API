import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const initializeSwagger = (app: any) => {
  const config = new DocumentBuilder()
    .setTitle('Life Gamification API')
    .setDescription('Life Gamification API')
    .setVersion('1.0')
    .addTag('Stralom - Life Gamification')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};
