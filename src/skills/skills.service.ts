import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill, SkillDocument } from 'src/schemas/skill.schema';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';

@Injectable()
export class SkillsService {
  constructor(@InjectModel(Skill.name) private skillModel: Model<SkillDocument>) {}
  async create(createSkillDto: CreateSkillDto) {
    return new this.skillModel(createSkillDto).save();
  }

  async findAll() {
    return this.skillModel.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} skill`;
  }

  async update(id: number, updateSkillDto: UpdateSkillDto) {
    return this.skillModel.updateOne({id},{$set :{...updateSkillDto}});
  }

  async remove(id: number) {
    return this.skillModel.deleteOne({id});
  }
}
