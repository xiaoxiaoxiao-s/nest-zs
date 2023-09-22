import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CaseDocument = Case & Document;
@Schema()
export class Case extends Document {
  @Prop({ required: true, unique: true })
  title: string;
  @Prop({ required: true })
  desc: string;
  @Prop({ required: true })
  logo: string;
  @Prop({ required: true })
  type: number;
  @Prop({ required: true })
  image: string;
  @Prop({ required: true })
  html: string;
  @Prop({ required: true })
  url: string;
  @Prop({ required: true })
  date: number;
  @Prop({ required: true })
  dateStr: string;
}
export const CaseSchema = SchemaFactory.createForClass(Case);
