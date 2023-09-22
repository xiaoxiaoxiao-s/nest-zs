import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NumDocument = Num & Document;
@Schema()
export class Num extends Document {
  @Prop({ required: true })
  num1: string;
  @Prop({ required: true })
  num2: string;
  @Prop({ required: true })
  num3: string;
  @Prop({ required: true })
  num4: string;
  @Prop({ required: true })
  title1: string;
  @Prop({ required: true })
  title2: string;
  @Prop({ required: true })
  title3: string;
  @Prop({ required: true })
  title4: string;
  @Prop({ required: true })
  dateStr: string;
}
export const NumSchema = SchemaFactory.createForClass(Num);
