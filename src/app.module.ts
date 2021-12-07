import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { EducationsModule } from './educations/educations.module';
import { SkillsModule } from './skills/skills.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/portfolio'),UsersModule,AuthModule, EducationsModule, SkillsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
