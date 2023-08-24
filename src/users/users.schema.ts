import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Users {
  @Prop()
  FirstName: string;

  @Prop()
  MiddleName: string;

  @Prop()
  LastName: string;

  @Prop({ unique: [true, 'Email is already registered'] })
  UserEmail: string;

  @Prop()
  UserRole: string;

  @Prop()
  Password: string;
}
export const UsersSchema = SchemaFactory.createForClass(Users);
