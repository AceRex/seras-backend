import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class AwardEntrySchema {
  
  @Prop()
  AwardEntry: string[]
}
export const OrgRegSchema = SchemaFactory.createForClass(AwardEntrySchema);
