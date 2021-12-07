import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Education, EducationDocument } from 'src/schemas/education.schema';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';

@Injectable()
export class EducationsService {
  constructor(@InjectModel(Education.name) private educationModel: Model<EducationDocument>) {}
  async create(createEducationDto: CreateEducationDto) {
    return new this.educationModel(createEducationDto).save();
  }

  async findAll() {
    return this.educationModel.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} education`;
  }

  async update(id: number, updateEducationDto: UpdateEducationDto) {
    return this.educationModel.updateOne({id},{$set :{...updateEducationDto}});
  }

  async remove(id: number) {
    return this.educationModel.deleteOne({id});
  }
}
