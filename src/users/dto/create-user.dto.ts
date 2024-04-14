import { PartialType } from '@nestjs/mapped-types';
import { User } from '../schemas/user.schema';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto extends PartialType(User) {
  userId: string;
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsString({ message: 'Name is required and must be a string' })
  name: string;

  @IsString({ message: 'Address must be a string' })
  address: string;

  @IsString({ message: 'Age must be a number' })
  age: number;
  @IsString({ message: 'Password is required and must be a string' })
  password: string;
}
