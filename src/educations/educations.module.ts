import { Module } from '@nestjs/common';
import { EducationsService } from './educations.service';
import { EducationsController } from './educations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Education, EducationSchema } from 'src/schemas/education.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Education.name, schema: EducationSchema }])],
  controllers: [EducationsController],
  providers: [EducationsService]
})
export class EducationsModule {}
