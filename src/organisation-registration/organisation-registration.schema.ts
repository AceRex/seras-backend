import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class OrgReg {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  author: string;
}
export const OrgRegSchema = SchemaFactory.createForClass(OrgReg);
