import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';
import { BlogModule } from './modules/blog/blog.module';
import { StudentModule } from './modules/student/student.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService);
  const routePrefix: string = configService.get('server.routePrefix') || '';
  app.setGlobalPrefix(routePrefix);
  app.useGlobalPipes(new ValidationPipe());
  app.use(function (request: Request, response: Response, next: NextFunction) {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    next();
  });

  //Setting Up Swagger Documentation

  const options = new DocumentBuilder()
    .setTitle('Self CURD App')
    .setDescription('API Documentation')
    .setVersion('1.0.0')
    .addBearerAuth()
    .addApiKey()
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    include: [AppModule, StudentModule, BlogModule]
  });
  SwaggerModule.setup(routePrefix + '/swagger', app, document);

  await app.listen(3000);
}
bootstrap();
