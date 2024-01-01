import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from '../modules/student/controllers/student.controller';
import { StudentSchema } from '../modules/student/schema/student.schema';
import { StudentService } from '../modules/student/services/student.service';
import { BlogController } from './blog/controller/blog.controller';
import { BlogService } from './blog/services/blog.service';
import { BlogSchema } from './blog/schema/blog.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      ignoreEnvFile: true
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/studentdb'),
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }, { name: 'Blog', schema: BlogSchema }]),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    // }),
  ],
  controllers: [AppController, StudentController, BlogController],
  providers: [AppService, StudentService, BlogService],
})
export class AppModule { }