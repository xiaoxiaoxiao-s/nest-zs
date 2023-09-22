import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DynamicDocument = Dynamic & Document;
@Schema()
export class Dynamic extends Document {
  @Prop({ required: true, unique: true })
  title: string;
  @Prop({ required: true, unique: true })
  desc: string;
  @Prop({ required: true })
  image: string;
  @Prop({ required: true })
  html: string;
  @Prop({ required: true })
  date: number;
  @Prop({ required: true })
  dateStr: string;
}
export const DynamicSchema = SchemaFactory.createForClass(Dynamic);
