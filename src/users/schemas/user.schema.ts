import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsString,
  IsEmail,
  IsMongoId,
  MinLength,
  IsNumber,
} from 'class-validator';
import * as bcrypt from 'bcrypt';

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  @IsMongoId({ message: 'Invalid user ID' }) // Assuming userId is a Mongoose ID
  userId: string;

  @Prop({ required: true })
  @IsEmail({}, { message: 'Invalid email format' })
  @MinLength(3, { message: 'Email must be at least 3 characters long' })
  email: string;

  @Prop({ required: true })
  @IsString({ message: 'Name is required and must be a string' })
  @MinLength(3, { message: 'Name must be at least 3 characters long' })
  name: string;

  @Prop()
  @IsString({ message: 'Address must be a string' }) // Optional validation for address
  address?: string;

  @Prop({ required: true })
  @IsString({ message: 'Password is required and must be a string' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;

  @Prop({ required: true })
  @IsNumber(
    { allowNaN: false, allowInfinity: false },
    { message: 'Age must be a valid number' },
  )
  age: number;

  async setPassword(plainTextPassword: string) {
    const salt = await bcrypt.genSalt(10); // Adjust salt rounds as needed
    this.password = await bcrypt.hash(plainTextPassword, salt);
  }
}

export const UserSchema = SchemaFactory.createForClass(User);
