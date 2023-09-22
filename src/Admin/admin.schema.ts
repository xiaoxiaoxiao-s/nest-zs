import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdminDocument = Admin & Document;
@Schema()
export class Admin extends Document {
  @Prop({ required: true, unique: true })
  account: string;
  @Prop({ required: true })
  password: string;
}
export const AdminSchema = SchemaFactory.createForClass(Admin);
