import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SkillDocument = Skill & Document;

@Schema()
export class Skill {
  @Prop({ required: true })
  skill: string;

  @Prop({ required: true })
  percentage: number;



}

export const SkillSchema = SchemaFactory.createForClass(Skill);